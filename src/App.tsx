import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import { Monster } from "./models/monster.model";

type AppState = {
  monsters: Monster[];
  searchField?: string;
};

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users: Monster[]) =>
        this.setState(
          () => ({ monsters: users }),
          () => console.log(this.state),
        ),
      );
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => ({ searchField }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField || ""),
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
