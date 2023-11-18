import { Component } from 'react';
import { Backdrop, ModalContainer } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  handleCloseByEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseByEsc);
  }

  render() {
    const { item } = this.props;
    return createPortal(
      <Backdrop onClick={this.handleBackdropClose}>
        <ModalContainer>
          <img src={item.largeImageURL} alt={item.tags} />
        </ModalContainer>
      </Backdrop>,
      modalRoot
    );
  }
}
