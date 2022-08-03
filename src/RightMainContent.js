import React, { Component } from "react";
import PairDisplay from "./PairDisplay";

class leftMainContent extends Component {
      constructor(props) {
            super(props);
            this.state = {};
      }

      render() {
            return (
                  <>
                        <PairDisplay name={(this.props.names)[6]} rate={(this.props.rates)[6]} display={this.props.display} />
                        <PairDisplay name={(this.props.names)[7]} rate={(this.props.rates)[7]} display={this.props.display} />
                        <PairDisplay name={(this.props.names)[8]} rate={(this.props.rates)[8]} display={this.props.display} />
                        <PairDisplay name={(this.props.names)[9]} rate={(this.props.rates)[9]} display={this.props.display} />
                        <PairDisplay name={(this.props.names)[10]} rate={(this.props.rates)[10]} display={this.props.display} />
                        <PairDisplay name={(this.props.names)[11]} rate={(this.props.rates)[11]} display={this.props.display} />
                  </>
            );
      }
}

export default leftMainContent;
