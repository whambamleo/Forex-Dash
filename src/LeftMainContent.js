import React, { Component } from "react";

import PairDisplay from "./PairDisplay";

class LeftMainContent extends Component {
      constructor(props) {
            super(props);


      }

      render() {
            return (
                  <>
                        <PairDisplay display={this.props.display} name={(this.props.names)[0]} rate={(this.props.rates)[0]} />
                        <PairDisplay display={this.props.display} name={(this.props.names)[1]} rate={(this.props.rates)[1]} />
                        <PairDisplay display={this.props.display} name={(this.props.names)[2]} rate={(this.props.rates)[2]} />
                        <PairDisplay display={this.props.display} name={(this.props.names)[3]} rate={(this.props.rates)[3]} />
                        <PairDisplay display={this.props.display} name={(this.props.names)[4]} rate={(this.props.rates)[4]} />
                        <PairDisplay display={this.props.display} name={(this.props.names)[5]} rate={(this.props.rates)[5]} />
                  </>
            );
      }
}

export default LeftMainContent;
