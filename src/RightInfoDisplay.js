import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import USDEUR from ".//Pairs/USDEUR";
import USDGBP from ".//Pairs/USDGBP";
import USDCAD from ".//Pairs/USDCAD";
import USDJPY from ".//Pairs/USDJPY";
import USDCHF from ".//Pairs/USDCHF";
import USDAUD from ".//Pairs/USDAUD";

const animationState = {
      initial: {
            x: 1000,
      },
      animate: {
            x: 0,
      },
      exit: {},
};

class RightInfoDisplay extends Component {
      constructor(props) {
            super(props);
            this.state = { animationState: {} };
      }

      currencyClicked = () => {
            console.log(this.props.name)

            if (this.props.name == "USDEUR") {
                  return <USDEUR />;
            } else if (this.props.name == "USDGBP") {
                  return <USDGBP />;
            } else if (this.props.name == "USDCAD") {
                  return <USDCAD />;
            } else if (this.props.name == "USDJPY") {
                  return <USDJPY />;
            } else if (this.props.name == "USDCHF") {
                  return <USDCHF />;
            } else if (this.props.name == "USDAUD") {
                  return <USDAUD />;
            }
      };

      render() {
            return (
                  <>
                        <AnimatePresence>
                              <motion.div
                                    class="rightInfoDisplay"
                                    variants={animationState}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{
                                          type: "fade",
                                          stiffness: 100,
                                    }}
                              >
                                    <AnimatePresence>
                                          <motion.button
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                type="button"
                                                class="btn btn-danger rightInfoDisplayCloseButton"
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

export default RightInfoDisplay;
