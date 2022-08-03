import React, { Component } from "react";
import MXN from "../imgs/MXN.jpg";

class USDMXN extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={MXN}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDMXN;
