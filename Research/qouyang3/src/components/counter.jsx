import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";

class Counter extends React.Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: "50px",
    fontWeight: "bold",
  };

  /*
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    else
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
  }
  */

  //handleIncrement = (product) => {
  handleIncrement = () => {
    //  console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick={() => this.handleIncrement(product)}
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/*{this.state.tags.length == 0 && "Please create a new tag!"}
        {this.renderTags()}*/}
      </div>
    );
  }
}

export default Counter;
