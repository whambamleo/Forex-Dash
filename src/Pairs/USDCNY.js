import React, { Component } from "react";
import CNY from "../imgs/CNY.jpg";

class USDCNY extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={CNY}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDCNY;
