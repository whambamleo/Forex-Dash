import React, { Component } from "react";
import RUB from "../imgs/RUB.jpg";

class USDRUB extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <img
                              src={RUB}
                              alt="currency denominations"
                              class="currencyPic"
                        />
                        <p class="dollarText">
                              The Russian ruble or rouble (Russian: рубль rublʹ;
                              symbol: ₽, руб; code: RUB) is the official
                              currency of the Russian Federation. The ruble is
                              subdivided into 100 kopeks (sometimes written as
                              kopecks or copecks; Russian: копе́йка kopeyka,
                              plural: копе́йки kopeyki). The first Russian ruble
                              (code: RUR) replaced the Soviet ruble (code: SUR)
                              in September 1993 at parity or 1 SUR = 1 RUR. In
                              1998, preceding the financial crisis, the current
                              ruble was redenominated with the new code "RUB"
                              and was exchanged at the rate of 1 RUB = 1,000
                              RUR. The ruble was the currency of the Russian
                              Empire and of the Soviet Union (as the Soviet
                              ruble). However, today only Russia, Belarus and
                              Transnistria use currencies with the same name.
                              The Russian ruble is also unofficially used in the
                              four partially recognised republics of Abkhazia,
                              South Ossetia, the Donetsk People's Republic and
                              the Luhansk People's Republic. As of April 2019,
                              the ruble is the seventeenth most traded currency
                              in the world, and a free-floating currency.
                        </p>
                  </>
            );
      }
}

export default USDRUB;
