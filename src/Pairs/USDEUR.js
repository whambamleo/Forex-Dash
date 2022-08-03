import React, { Component } from "react";
import EUR from "../imgs/EUR.jpg";
import USD from "../imgs/USD.png";

class USDEUR extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <div class="infoDisplayContent">
                              <h1> USD/EUR </h1>
                              <p class="infoDisplayText">
                                    <img
                                          src={EUR}
                                          alt="euro denominations"
                                          class="currencyPic"
                                    />
                                    <br></br>
                                    The euro (symbol: €; code: EUR) is the
                                    official currency of 19 of the 27 member
                                    states of the European Union. This group of
                                    states is known as the eurozone or,
                                    officially, the euro area, and includes
                                    about 343 million citizens as of 2019. The
                                    euro is divided into 100 cents. The currency
                                    is also used officially by the institutions
                                    of the European Union, by four European
                                    microstates that are not EU members, the
                                    British Overseas Territory of Akrotiri and
                                    Dhekelia, as well as unilaterally by
                                    Montenegro and Kosovo. Outside Europe, a
                                    number of special territories of EU members
                                    also use the euro as their currency.
                                    Additionally, over 200 million people
                                    worldwide use currencies pegged to the euro.
                                    As of 2013, the euro is the second-largest
                                    reserve currency as well as the second-most
                                    traded currency in the world after the
                                    United States dollar. As of December 2019,
                                    with more than €1.3 trillion in circulation,
                                    the euro has one of the highest combined
                                    values of banknotes and coins in circulation
                                    in the world.The name euro was officially
                                    adopted on 16 December 1995 in Madrid.The
                                    euro was introduced to world financial
                                    markets as an accounting currency on 1
                                    January 1999, replacing the former European
                                    Currency Unit (ECU) at a ratio of 1:1
                                    (US$1.1743). Physical euro coins and
                                    banknotes entered into circulation on 1
                                    January 2002, making it the day-to-day
                                    operating currency of its original members,
                                    and by March 2002 it had completely replaced
                                    the former currencies. While the euro
                                    dropped to US$0.83 within two years (26
                                    October 2000), it has traded above the U.S.
                                    dollar since the end of 2002, peaking at
                                    US$1.60 on 18 July 2008 and since then
                                    returning near to its original issue rate.
                                    In late 2009, the euro became immersed in
                                    the European sovereign-debt crisis, which
                                    led to the creation of the European
                                    Financial Stability Facility as well as
                                    other reforms aimed at stabilising and
                                    strengthening the currency.
                              </p>
                        </div>
                  </>
            );
      }
}

export default USDEUR;
