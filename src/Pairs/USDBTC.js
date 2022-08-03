import React, { Component } from "react";
import BTC from "../imgs/BTC.jpg";

class USDBTC extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={BTC}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                        <p class="dollarText">
                              Bitcoin (₿) is a decentralized digital currency,
                              without a central bank or single administrator,
                              that can be sent from user to user on the
                              peer-to-peer bitcoin network without the need for
                              intermediaries.Transactions are verified by
                              network nodes through cryptography and recorded in
                              a public distributed ledger called a blockchain.
                              The cryptocurrency was invented in 2008 by an
                              unknown person or group of people using the name
                              Satoshi Nakamoto. The currency began use in
                              2009 when its implementation was released as
                              open-source software. Bitcoins are
                              created as a reward for a process known as mining.
                              They can be exchanged for other currencies,
                              products, and services. Bitcoin has been
                              criticized for its use in illegal transactions,
                              the large amount of electricity (and thus carbon
                              footprint) used by mining, price volatility, and
                              thefts from exchanges. Some investors and
                              economists have characterized it as a speculative
                              bubble at various times. Others have used it as an
                              investment, although several regulatory agencies
                              have issued investor alerts about
                              bitcoin. A few local and national
                              governments are officially using Bitcoin in some
                              capacity, with two countries, El Salvador and the
                              Central African Republic, adopting it as a legal
                              tender.
                        </p>
                  </>
            );
      }
}

export default USDBTC;
