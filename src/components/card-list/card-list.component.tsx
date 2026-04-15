// import { Component } from "react";
import { Monster } from '../../models/monster.model';
import './card-list.styles.css';
import Card from '../card/card.component';

interface CardListProps {
  monsters: Monster[];
}

export default function CardList({ monsters }: CardListProps) {
  return (
    <div className="card-list">
      {monsters.map(monster => {
        const { id } = monster;
        return <Card key={id} monster={monster} customClassName="card-container" />;
      })}
    </div>
  );
}

// class CardList extends Component<CardListProps> {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           const { id } = monster;
//           return (
//             <Card key={id} monster={monster} customClassName="card-container" />
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default CardList;
