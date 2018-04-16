<h1 align="center">
  React Modal Button 🐕
</h1>
<p align="center" style="font-size: 1.2rem;">Button that takes a modal as prop</p>

<hr />

<img src="https://img.shields.io/badge/🦄-Just Works-cc00cc.svg"/>

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
