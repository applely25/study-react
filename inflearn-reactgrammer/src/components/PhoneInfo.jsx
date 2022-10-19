import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name: "",
    phone: "",
  };

  shouldComponentUpdate(nextProps, nextState) {
    //최적화 시켜주기 위해서 사용됨 //작성안하면 return true;이라고 적용되어있음
    if (this.state !== nextState) {
      return true;
    }
    return this.props.info !== nextProps.info; 
  }

  handelRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };
  handelTogelEdit = () => {
    //true가 false -> onUpdate
    //false가 true -> state에 info값 넣어주기
    const { info, onUpdate } = this.props;
    if (this.state.editing) {
      onUpdate(info.id, {
        name: this.state.name,
        phone: this.state.phone,
      });
    } else {
      this.setState({
        name: info.name,
        phone: info.phone,
      });
    }
    this.setState({
      editing: !this.state.editing,
    });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { name, phone } = this.props.info;
    const { editing } = this.state;
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px",
    };
    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <div>
              <input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="이름"
                value={this.state.name}
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                onChange={this.handleChange}
                placeholder="전화번호"
                value={this.state.phone}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div>
              <b>{name}</b>
            </div>
            <div>{phone}</div>
          </Fragment>
        )}
        <button onClick={this.handelRemove}>삭제</button>
        <button onClick={this.handelTogelEdit}>
          {editing ? "적용" : "수정"}
        </button>
      </div>
    );
  }
}

export default PhoneInfo;