import * as React from 'react';
import Modal from '../Modal';

declare module 'react' {
  type IProvider<T> = React.ComponentType<{
    value: {};
    children?: React.ReactNode;
  }>;
  type IConsumer<T> = React.ComponentType<{
    children: (value: T) => React.ReactNode;
    unstable_observedBits?: number;
  }>;
  interface Context<T> {
    Provider: IProvider<T>;
    Consumer: IConsumer<T>;
  }
  function createContext<T>(
    defaultValue: T,
    calculateChangedBits?: (prev: T, next: T) => number,
  ): Context<T>;
}

const ModalContext = React.createContext({
  content: null,
  props: {},
  showModal: (props: any) => {},
  hideModal: (props: any) => {},
  isOpen: false,
});

export class ModalProvider extends React.Component<any, any> {
  showModal = (content, props = {}) => {
    this.setState({
      content,
      props,
      isOpen: true,
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  state = {
    component: null,
    props: {},
    showModal: this.showModal,
    hideModal: this.hideModal,
    isOpen: false,
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export const ModalConsumer = ModalContext.Consumer;
