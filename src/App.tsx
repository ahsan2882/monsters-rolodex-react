import {
  // Component,
  useEffect,
  useState
} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import { Monster } from './models/monster.model';
import SearchBox from './components/search-box/searh-box.component';

export default function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState<string>('');
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users: Monster[]) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField || ''));
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox customClassName="search-box" placeholder="Search monsters" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// type AppState = {
//   monsters: Monster[];
//   searchField?: string;
// };

// class App extends Component<{}, AppState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users: Monster[]) =>
//         this.setState(
//           () => ({ monsters: users }),
//           () => console.log(this.state),
//         ),
//       );
//   }

//   onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => ({ searchField }));
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField || ""),
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           customClassName="search-box"
//           placeholder="Search monsters"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// export default App;
