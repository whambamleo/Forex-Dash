import React, { Component } from "react";
import NZD from "../imgs/NZD.jpg";

class USDNZD extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={NZD}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDNZD;
