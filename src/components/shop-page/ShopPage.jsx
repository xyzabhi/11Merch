import React, { Component } from "react";
import SHOP_DATA from "./shop_data.js";
import PreviewCollection from "../preview-collection/preview-collection.compoents.jsx";
export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...othercollectionprops }) => (
          <PreviewCollection key={id} {...othercollectionprops} />
        ))}
      </div>
    );
  }
}
