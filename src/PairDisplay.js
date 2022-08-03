import React, { Component } from "react";

class PairDisplay extends Component {
      constructor(props) {
            super(props);
            this.state = {};

      }

      render() {
            return ( 
                  <>
                        <div class="PairDisplay" onClick={() => this.props.display(this.props.name)}> 
                        <div class="PairRate" > BUY </div> 
                        <span class = "PairText"> <h5> {this.props.name} </h5> <h6> {this.props.rate} </h6>  </span>
                        
                        
                        </div>

                  </>
            );
      }
}

export default PairDisplay;
