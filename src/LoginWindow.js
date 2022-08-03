import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Backdrop from "./Backdrop";

class LoginWindow extends Component {
      constructor(props) {
            super(props);
      }

      render() {
            return (
                  <>
                        <Backdrop></Backdrop>
                        <motion.div 
                        className="loginWindow"
                        initial={{y: -500}}
                        animate={{y: 0}}
                        exit={{y: -500}}
                        transition={{
                              type: "fade",
                              stiffness: 10,
                        }}>
                              <button
                                    type="button"
                                    class="btn btn-danger loginDisplayCloseButton"
                                    onClick={this.props.close}
                              >
                                    Close Window
                              </button>

                              <div class="input-group flex-nowrap">
                                    <span
                                          class="input-group-text"
                                          id="addon-wrapping"
                                    >
                                          @
                                    </span>
                                    <input
                                          type="text"
                                          class="form-control"
                                          placeholder="Username"
                                          aria-label="Username"
                                          aria-describedby="addon-wrapping"
                                    />
                              </div>
                              <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Password"
                                    aria-label="default input example"
                              ></input>
                              <button type="button" class="btn btn-primary">
                                    Login
                              </button>
                        </motion.div>
                  </>
            );
      }
}

export default LoginWindow;
