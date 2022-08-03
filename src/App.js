import React, { Component } from "react";
import ReactDOM from "react-dom";

import LeftMainContent from "./LeftMainContent";
import RightMainContent from "./RightMainContent";

import LeftInfoDisplay from "./LeftInfoDisplay";
import RightInfoDisplay from "./RightInfoDisplay";

import LoginWindow from "./LoginWindow";
import Broker from "./Broker";

import Dollar from "./Pairs/Dollar";

import intro from "./imgs/intro.jpg";
import engine from "./imgs/engine.jpg";
import "./App.css";

class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  rates: [],
                  names: [
                        "USDEUR",
                        "USDJPY",
                        "USDGBP",
                        "USDCHF",
                        "USDCAD",
                        "USDAUD",
                        "USDNZD",
                        "USDBTC",
                        "USDCNY",
                        "USDRUB",
                        "USDMXN",
                        "USDDKK",
                  ],
                  time: "",
            };

            this.fetchRates = this.fetchRates.bind(this);
            this.parseRates = this.parseRates.bind(this);

            this.renderLeftDisplay = this.renderLeftDisplay.bind(this);
            this.renderRightDisplay = this.renderRightDisplay.bind(this);

            this.closeLeftDisplay = this.closeLeftDisplay.bind(this);
            this.closeRightDisplay = this.closeRightDisplay.bind(this);

            this.renderLoginWindow = this.renderLoginWindow.bind(this);

            this.renderBrokerWindow = this.renderBrokerWindow.bind(this);

            this.componentDidMount = this.componentDidMount.bind(this);
      }

      fetchRates() {
            let xhttp = new XMLHttpRequest();
            const key = "505e27cfde4b425d01cc6c4b38599b77";
            const url = `http://api.currencylayer.com/live?access_key=${key}`;

            xhttp.open("GET", url, true);
            xhttp.send();

            let self = this;

            xhttp.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                        console.log("Success!");
                        self.parseRates(JSON.parse(xhttp.responseText));
                  }
            };
      }

      parseRates(response) {
            let time = response.timestamp;
            let quotes = response.quotes;

            // Most important pairs: USDEUR, USDJPY, USDGBP, USDCHF, USDCAD, USDAUD, USDNZD, USDBTC, USDCNY, USDRUB, USDMXN, USDDKK
            let array = this.setState({
                  time: time,
                  rates: [
                        quotes.USDEUR,
                        quotes.USDJPY,
                        quotes.USDGBP,
                        quotes.USDCHF,
                        quotes.USDCAD,
                        quotes.USDAUD,
                        quotes.USDNZD,
                        quotes.USDBTC,
                        quotes.USDCNY,
                        quotes.USDRUB,
                        quotes.USDMXN,
                        quotes.USDDKK,
                  ],
            });

            console.log(this.state);
      }

      renderLeftDisplay(name) {
            console.log(name);
            ReactDOM.render(
                  <LeftInfoDisplay close={this.closeLeftDisplay} name={name} />,
                  document.getElementById("leftMainContent")
            );
      }

      closeLeftDisplay() {
            ReactDOM.render(
                  <LeftMainContent
                        display={this.renderRightDisplay}
                        rates={this.state.rates}
                        names={this.state.names}
                  />,
                  document.getElementById("leftMainContent")
            );
      }

      renderRightDisplay(name) {
            ReactDOM.render(
                  <RightInfoDisplay close={this.closeRightDisplay} name={name} />,
                  document.getElementById("rightMainContent")
            );
      }

      closeRightDisplay() {
            ReactDOM.render(
                  <RightMainContent
                        display={this.renderLeftDisplay}
                        rates={this.state.rates}
                        names={this.state.names}
                  />,
                  document.getElementById("rightMainContent")
            );
      }

      componentDidMount() {
            this.fetchRates();
      }

      renderLoginWindow() {
            ReactDOM.render(
                  <LoginWindow close={this.closeLoginWindow} />,
                  document.getElementById("intro")
            );
      }

      closeLoginWindow() {
            ReactDOM.render(
                  <div id="intro">
                        <h4>
                              {" "}
                              forex-dash is a website for elevating your
                              knowlege in foreign exchange whilst keeping track
                              of your favorite currency pairs in real-time.{" "}
                        </h4>

                        <img src={intro} id="introImage" alt="intro image" />
                  </div>,
                  document.getElementById("intro")
            );
      }

      renderBrokerWindow() {
            ReactDOM.render(
                  <Broker close={this.closeBrokerWindow}/>,
                  document.getElementById("intro")
            );
      }

      /*

      Make sure you push your code to main/master
      Run 'npm run build' //Will build optimized bundle of your React app
      Change your "homepage" value in your package.json file
      Run 'npm run deploy' //That will atuomatically create gh-pages branch
      Go to your repo Settings -> Find your github pages link

      */

      closeBrokerWindow() {
            ReactDOM.render(
                  <div id="intro">
                        <h4>
                              {" "}
                              forex-dash is a website for elevating your
                              knowlege in foreign exchange whilst keeping track
                              of your favorite currency pairs in real-time.{" "}
                        </h4>

                        <img src={intro} id="introImage" alt="intro image" />
                  </div>,
                  document.getElementById("intro")
            );
      }

      render() {
            return (
                  <>
                        <div id="header">
                              <h5> forex-dash </h5>
                              <div
                                    class="btn-group options"
                                    role="group"
                                    aria-label="Basic example"
                              >
                                    <button
                                          type="button"
                                          class="btn btn-primary optionButton"
                                          onClick={this.renderBrokerWindow}
                                    >
                                          My Broker
                                    </button>
                                    <button
                                          type="button"
                                          class="btn btn-primary optionButton"
                                    >
                                          Contact
                                    </button>
                                    <button
                                          type="button"
                                          class="btn btn-primary specialOptionButton"
                                          onClick={this.renderLoginWindow}
                                    >
                                          Log In
                                    </button>
                              </div>
                        </div>

                        <div id="intro">
                              <h4>
                                    {" "}
                                    forex-dash is a website for elevating your
                                    knowlege in foreign exchange whilst keeping
                                    track of your favorite currency pairs in
                                    real-time.{" "}
                              </h4>

                              <img
                                    src={intro}
                                    id="introImage"
                                    alt="intro image"
                              />
                        </div>

                        <div id="mainContent">
                              <div id="leftMainContent">
                                    <LeftMainContent
                                          display={this.renderRightDisplay}
                                          rates={this.state.rates}
                                          names={this.state.names}
                                    />
                              </div>
                              <div id="rightMainContent">
                                    <RightMainContent
                                          display={this.renderLeftDisplay}
                                          rates={this.state.rates}
                                          names={this.state.names}
                                    />
                              </div>
                        </div>
                        <div id="dollar">
                              <Dollar />
                        </div>
                        <div id="outro">

                              <div id="outroContent">
                                    <img
                                          src={engine}
                                          id="outroImage"
                                          alt="outro image"
                                    />

                              <h2> This website is powered by <a href="https://currencylayer.com"> CurrencyLayer </a></h2>
                              </div>
                        </div>
                  </>
            );
      }
}

export default App;
