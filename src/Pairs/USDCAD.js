import React, { Component } from "react";
import CAD from "../imgs/CAD.jpg";

class USDCAD extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={CAD}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDCAD;
