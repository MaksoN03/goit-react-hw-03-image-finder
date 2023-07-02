import css from 'styles.module.css';

import { Component } from 'react';

export class Modal extends Component {

  componentDidMount(){
    document.addEventListener("keydown", this.closeModal)
}

  closeModal = ({target, currentTarget, code}) => {
    if(target === currentTarget || code === "Escape") {
        this.props.close()
    }
}

componentWillUnmount() {
  document.removeEventListener("keydown", this.closeModal)
}

  render() {
    const {closeModal} = this;
    const { children } = this.props;
    return (
      <div onClick={closeModal} className={css.Overlay}>
        <div className={css.Modal}>{children}</div>
      </div>
    );
  }
}