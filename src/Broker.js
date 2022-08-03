import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "./Backdrop";

class Broker extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <Backdrop> </Backdrop>

                        <motion.div className="brokerWindow">
                              <button
                                    type="button"
                                    class="btn btn-danger brokerDisplayCloseButton"
                                    onClick={this.props.close}
                              >
                                    Close Window
                              </button>
                              CONNECT YOUR FAVORITE BROKER
                        </motion.div>
                  </>
            );
      }
}

export default Broker;
