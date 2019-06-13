import React from "react";
import { Modal } from "antd";

class SuccessModal extends React.Component {
  state = { visible: false };

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (oldProps.isVisible !== newProps.isVisible) {
      this.setState({ visible: this.props.isVisible });
    }
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <Modal
        title=""
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <h2>Спасибо</h2>
        <p>Ваша заявка принята.</p>
        <p>Ответ вы получите в смс и по почте.</p>
      </Modal>
    );
  }
}
export default SuccessModal;
