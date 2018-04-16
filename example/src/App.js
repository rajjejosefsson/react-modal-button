import React, { Component } from "react";
import TestModal from "./TestModal";

class App extends Component {
  state = {
    isModalOpen: false
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div>
        <h1>Simple Modal Demo</h1>
        <button className="btn" onClick={this.openModal}>
          Open Modal
        </button>

        <TestModal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}

export default App;
