import * as React from 'react';
import { ModalProvider, ModalConsumer } from './ModalContext';
import Modal from '../Modal';

const ModalButton = ({
  modal,
  children,
  buttonStyle,
  buttonClassName,
  ...rest
}): any => (
  <ModalProvider>
    <ModalConsumer>
      {({ content: Content, props, hideModal, isOpen, showModal }) => (
        <React.Fragment>
          {/** Modal and content */}
          {Content ? (
            <Modal isOpen={isOpen} onClose={hideModal} {...rest}>
              <Content closeModal={hideModal} />
            </Modal>
          ) : null}

          {/** Button to show the modal */}
          <button
            onClick={() => showModal(modal)}
            style={buttonStyle}
            className={buttonClassName}
          >
            {children}
          </button>
        </React.Fragment>
      )}
    </ModalConsumer>
  </ModalProvider>
);

export default ModalButton;
