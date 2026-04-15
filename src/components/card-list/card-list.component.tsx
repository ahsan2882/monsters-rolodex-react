import { Component } from "react";
import { Monster } from "../../models/monster.model";

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { monsters } = this.props;
    return (
      <>
        {monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default CardList;
