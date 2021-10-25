import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };
  styles = {
    fontSize: "50px",
    fontWeight: "bold",
  };

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

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: this.state.count * 0 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  render() {
    return (
      <React.Fragment>
        <h1>HELP<h1/>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button onClick={this.handleReset} className="btn m-2 btn-info btn-sm">
          Reset
        </button>
        {this.state.tags.length == 0 && "Please create a new tag!"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
