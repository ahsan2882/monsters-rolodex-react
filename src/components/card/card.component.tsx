import { Component } from "react";
import "./card.styles.css";
import { Monster } from "../../models/monster.model";

interface CardProps {
  customClassName: string;
  monster: Monster;
}

class Card extends Component<CardProps> {
  render() {
    const { monster, customClassName } = this.props;
    const { name, email, id } = monster;
    return (
      <div className={customClassName}>
        <img
          alt={name}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
