import React, { Component } from "react";
import CHF from "../imgs/CHF.jpg";

class USDCHF extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={CHF}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                  </>
            );
      }
}

export default USDCHF;
