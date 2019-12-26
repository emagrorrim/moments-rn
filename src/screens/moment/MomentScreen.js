import React from "react";
import { FlatList } from "react-native";
import MomentListItem from "./components/MomentListItem";
import MomentService from "./service/MomentService";
import request from '../../common/networking/URLRequest';

const Data = [
  {id: "1", title: "A"},
  {id: "2", title: "B"},
  {id: "3", title: "C"},
  {id: "4", title: "D"},
];

const MomentScreen = () => {
  new MomentService(request).fetchMoments();
  return (
      <FlatList
          data={Data}
          renderItem={ ({ item }) => <MomentListItem item={item} /> }
          keyExtractor={ item => item.id }
      />
  )
};

export default MomentScreen;