import React, { Component } from "react";
import JPY from "../imgs/JPY.jpg";

class USDJPY extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={JPY}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDJPY;
