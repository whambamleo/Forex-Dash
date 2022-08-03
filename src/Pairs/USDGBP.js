import React, { Component } from "react";
import GBP from "../imgs/GBP.jpg";

class USDGBP extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={GBP}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDGBP;
