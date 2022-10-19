import React, { Component } from "react";

class PhoneForm extends Component {
  input = React.createRef();
  state = {
    name: "",
    phone: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name !== "" && this.state.phone !== "") {
      this.props.onCreate(this.state);
      this.setState({
        name: "",
        phone: "",
      });
      e.target.reset();
    }
    this.input.current.focus(); 
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          type="text"
          onChange={this.handleChange}
          defaultValue={this.state.name}
          placeholder="이름"
          ref={this.input}
        />
        <input
          name="phone"
          type="text"
          onChange={this.handleChange}
          defaultValue={this.state.number}
          placeholder="전화번호"
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
