import React, { Component } from "react";
import { FlatList, RefreshControl } from "react-native";
import MomentListItem from "./components/MomentListItem";
import MomentService from "./service/MomentService";

export default class MomentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
      moments: []
    };
  }

  componentDidMount(): void {
    this._fetchMoments();
  }

  _fetchMoments(): void {
    new MomentService().fetchMoments().then(moments => {
      this.setState({
        refreshing: false,
        moments: moments.filter(this._isMomentValid)
      });
    });
  }

  _isMomentValid(moment): Boolean {
    return moment.content !== undefined || (moment.images !== undefined && moment.images.length !== 0)
  }

  _refresh() {
    this.setState({
      refreshing: true
    });
    this._fetchMoments();
  }

  render() {
    return (
        <FlatList
            refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._refresh.bind(this)} />}
            data={this.state.moments}
            renderItem={ ({ item }) => <MomentListItem moment={item} /> }
            keyExtractor={ moment => moment.id }
        />
    )
  }
}
