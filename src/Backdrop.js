import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

class Backdrop extends Component {
      constructor(props) {
            super(props);


      }

      render() {
            return (
                  <>
                    <motion.div
                        className="backdrop"
                        iniital={{ opacity: 0}}
                        animate={{ opacity:1 }}
                        exit={{opacity: 0}}

                    >

                    </motion.div>
                  </>
            );
      }
}

export default Backdrop;
