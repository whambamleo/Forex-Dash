import React, { Component } from "react";
import AUD from "../imgs/AUD.jpg";

class USDAUD extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={AUD}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDAUD;
