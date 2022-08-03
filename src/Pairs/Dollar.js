import React, { Component } from "react";
import USD from "../imgs/USD.png";

class Dollar extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <h1> The Almighty Dollar </h1>
                        <div class="dollarContent">
                              
                              <img
                                    src={USD}
                                    alt="dollar denominations"
                                    class="dollarPic"
                              />
                              <p class="dollarText">
                                    {" "}
                                    The United States dollar (symbol: $; code:
                                    USD; also abbreviated US$ or U.S. Dollar, to
                                    distinguish it from other dollar-denominated
                                    currencies; referred to as the dollar, U.S.
                                    dollar, American dollar, or colloquially
                                    buck) is the official currency of the United
                                    States and several other countries. The
                                    Coinage Act of 1792 introduced the U.S.
                                    dollar at par with the Spanish silver
                                    dollar, divided it into 100 cents, and
                                    authorized the minting of coins denominated
                                    in dollars and cents. U.S. banknotes are
                                    issued in the form of Federal Reserve Notes,
                                    popularly called greenbacks due to their
                                    predominantly green color.
                                    <br></br>
                                    Article I, Section 8 of the U.S.
                                    Constitution provides that Congress has the
                                    power " coin money." Laws implementing this
                                    power are currently codified in Title 31 of
                                    the U.S. Code, under Section 5112, which
                                    prescribes the forms in which the United
                                    States dollars should be issued. These coins
                                    are both designated in the section as "legal
                                    tender" in payment of debts. The Sacagawea
                                    dollar is one example of the copper alloy
                                    dollar, in contrast to the American Silver
                                    Eagle which is pure silver. Section 5112
                                    also provides for the minting and issuance
                                    of other coins, which have values ranging
                                    from one cent (U.S. Penny) to 100 dollars.
                                    These other coins are more fully described
                                    in Coins of the United States dollar.
                                    Article I, Section 9 of the Constitution
                                    provides that "a regular Statement and
                                    Account of the Receipts and Expenditures of
                                    all public Money shall be published from
                                    time to time," which is further specified by
                                    Section 331 of Title 31 of the U.S. Code.
                                    The sums of money reported in the
                                    "Statements" are currently expressed in U.S.
                                    dollars, thus the U.S. dollar may be
                                    described as the unit of account of the
                                    United States. "Dollar" is one of the first
                                    words of Section 9, in which the term refers
                                    to the Spanish milled dollar, or the coin
                                    worth eight Spanish reales.
                                    <br></br>

                                    
                              </p>
                        </div>
                  </>
            );
      }
}

export default Dollar;
