import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 3;
  state = {
    information: [
      {
        id: 0,
        name: "홍길동",
        phone: "010-1234-1234",
      },
      {
        id: 1,
        name: "가나다",
        phone: "432143214321",
      },
      {
        id: 2,
        name: "홍길동2",
        phone: "010-9876--9876",
      },
    ],
    keyword: "",
  };

  handelChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat(
        Object.assign({}, data, {
          id: this.id++,
        })
      ),
    });
  };

  handelRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data,
          };
        }
        return info;
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handelChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handelRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;