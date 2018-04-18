<h1 align="center">
  React Modal Button
</h1>

<div align="center">
  <img height="50px"      src="https://camo.githubusercontent.com/801e23cd20de6f0e8838be63c663b081022fa6b4/68747470733a2f2f656d6f6a6970656469612d75732e73332e616d617a6f6e6177732e636f6d2f7468756d62732f3234302f6170706c652f3132392f646f675f31663431352e706e67" />
</div>
<p align="center" style="font-size: 1.2rem;">Button that takes a modal as prop</p>

<div align="center">
  <img src="https://img.shields.io/badge/🦄-Just Works-cc00cc.svg"/> <img src="https://img.shields.io/badge/💎-Modern-44aadd.svg"/> <img src="https://img.shields.io/badge/🦋-Extremely Lightweight-7799cc.svg"/> <img src="https://img.shields.io/badge/🔥-Blazing%20Fast-red.svg"/>
</div>
<hr />

## Installation

`npm i --save react-modal-button`

## Example

[Codesandbox.io](https://codesandbox.io/s/q86k5wxl09)

## Usage

```javascript
import React from 'react';
import { ModalButton } from 'react-modal-button';

const App = () => (
  <div>
    <h1>React Modal Button!</h1>

    <ModalButton
      modal={({ closeModal }) => (
        <div>
          <p>My Modal</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    >
      Button Text Here 🐕
    </ModalButton>
  </div>
);
```

## Props for content

| prop  | render prop |
| ----- | :---------: |
| modal | closeModal  |

## Props on Button

| props           | defualt |
| --------------- | :-----: |
| buttonStyle     |         |
| buttonClassName |         |

## Props for Modal

| props               | Default |
| ------------------- | :-----: |
| isBackdrop          |  false  |
| showCloseButton     |  true   |
| closeOnBackdrop     |  true   |
| closeOnEsc          |  true   |
| height              | '300px' |
| width               | '500px' |
| animation           | 'fade'  |
| animationDurationMS |   300   |
| className           |         |
| windowClassName     |         |
| windowStyles        |         |
| backdropClassName   |         |
| backdropStyles      |         |

## Custom Animation

`modal-[your-animation-prop]-on-[enter/leave]`

## Control the modal with state

```javascript
import { Modal } from 'react-modal-button';

class App extends Component {
  state = {
    isModalOpen: false,
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
        <button onClick={this.openModal}>Open Modal</button>

        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal}>
          <div>Content</div>
          <button onClick={this.closeModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}
```
