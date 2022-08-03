import React, { Component } from "react";
import DKK from "../imgs/DKK.jpeg";
class USDDKK extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                  <img src={DKK} alt="currency denominations" class="currencyPic" />
                  </>
            );
      }
}

export default USDDKK;
