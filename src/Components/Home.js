import React, { Component } from "react";
import '../Components/Home.css';
import axios from "axios";
import SearchBar from "./SearchBar";
import Card from "./Card";

class Home extends Component {
  state = {
    charachters: [],
    searchElement: "",
  };

  componentDidMount() {
    axios.get("https://rickandmortyapi.com/api/character").then((res) => {
      this.setState({
        charachters: res.data.results,
      });
      console.log(this.state.charachters);
    });
  }
  onChangeHandler = (e) => {
    this.setState({
      searchElement: e.target.value,
    });
    console.log(this.state.searchElement);
  };

  render() {
    const filtered = this.state.charachters.filter((name) => {
      const fullName = name.name.toLowerCase();
      return fullName.includes(this.state.searchElement.toLowerCase());
    });
    return (
      <div>
        <div>
          <SearchBar
            searchElement={this.state.searchElement}
            inputHandler={(e) => this.onChangeHandler(e)}
          />
        </div>

        {/* <form>
          <input
            type="search"
            placeholder="Search your charachter"
            value={this.state.searchElement}
            onChange={(e) => this.onChangeHandler(e)}
          />
        </form> */}
        <div className="card-wrapper">
          {filtered.map((item, index) => {
            return (
              <Card
                key={index}
                location={item.location.name}
                name={item.name}
                pic={item.image}
                status={item.status}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
