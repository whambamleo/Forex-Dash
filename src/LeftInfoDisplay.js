import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import USDNZD from ".//Pairs/USDNZD";
import USDCNY from ".//Pairs/USDCNY";
import USDMXN from ".//Pairs/USDMXN";
import USDBTC from ".//Pairs/USDBTC";
import USDRUB from ".//Pairs/USDRUB";
import USDDKK from ".//Pairs/USDDKK";


import USD from "./imgs/USD.png";
import EUR from "./imgs/EUR.jpg";

const animationState = {
      initial: {
            x: -1000,
      },
      animate: {
            x: 0,
      },
      exit: {},
};

class LeftInfoDisplay extends Component {
      constructor(props) {
            super(props);

            this.componentDidMount = this.componentDidMount.bind(this);
      }

      componentDidMount() {
            console.log(this.props.name);
      }

      currencyClicked = () => {
            console.log(this.props.name)

            if (this.props.name == "USDNZD") {
                  return <USDNZD />;
            } else if (this.props.name == "USDCNY") {
                  return <USDCNY />;
            } else if (this.props.name == "USDMXN") {
                  return <USDMXN />;
            } else if (this.props.name == "USDBTC") {
                  return <USDBTC />;
            } else if (this.props.name == "USDRUB") {
                  return <USDRUB />;
            } else if (this.props.name == "USDDKK") {
                  return <USDDKK />;
            }
      };

      render() {
            return (
                  <>
                        <AnimatePresence>
                              <motion.div
                                    class="infoDisplay"
                                    variants={animationState}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{
                                          type: "fade",
                                          stiffness: 50,
                                    }}
                              >
                                    <AnimatePresence>
                                          <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                type="button"
                                                class="btn btn-danger infoDisplayCloseButton"
                                                onClick={this.props.close}
                                          >
                                                Close Window
                                          </motion.button>
                                    </AnimatePresence>
                                    <this.currencyClicked />
                              </motion.div>
                        </AnimatePresence>
                  </>
            );
      }
}

export default LeftInfoDisplay;
