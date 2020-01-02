import MomentListItem from '../MomentListItem';

import React from "react";
import renderer from 'react-test-renderer';

describe("MomentListItem", () => {
  test("rendered as snapshot", () => {
    const tree = renderer.create(<MomentListItem moment={{content: "test content"}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});