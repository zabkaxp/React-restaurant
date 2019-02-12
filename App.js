import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Menu from "./Menu";

class App extends Component {
  state = {
    menu: [
      {
        id: 1,
        name: "oranges",
        active: false
      },
      {
        id: 2,
        name: "bananas",
        active: false
      },
      {
        id: 3,
        name: "obregines",
        active: true
      },
      {
        id: 4,
        name: "cherries",
        active: false
      },
      {
        id: 5,
        name: "berries",
        active: true
      }
    ]
  };

  changeState = id => {
    console.log(id);
    const items = this.state.menu.map(item => {
      if (item.id === id) {
        item.active = !item.active;
      }
      return item;
    });

    this.setState({
      menu: items
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div>
        <Header menu={menu} />
        <ul className="menuList">
          {menu.map(item => (
            <Menu
              key={item.id}
              id={item.id}
              name={item.name}
              status={item.active}
              onclick={this.changeState}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
