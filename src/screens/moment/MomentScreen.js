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
    new MomentService().fetchMoments().then(moments => {
      console.log(moments[0]);
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