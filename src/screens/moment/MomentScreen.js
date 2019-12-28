import React from "react";
import { FlatList } from "react-native";
import MomentListItem from "./components/MomentListItem";
import MomentService from "./service/MomentService";

class MomentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moments: []
    };
  }

  componentDidMount(): void {
    this._fetchMoments();
  }

  _fetchMoments() {
    new MomentService().fetchMoments().then(moments => {
      this.setState({
        moments: moments
      });
    });
  }

  render() {

    return (
        <FlatList
            data={this.state.moments}
            renderItem={ ({ item }) => <MomentListItem moment={item} /> }
            keyExtractor={ moment => moment.id }
        />
    )
  }
}

export default MomentScreen;