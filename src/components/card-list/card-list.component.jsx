import './card-lists.styles.css';
import Card from "../card/card.component";

const CardList = ({ employees }) => (
  <div className="card-list">
    { employees.map(employee => <Card key={employee.id} employee={employee}/>) } 
  </div>
)

export default CardList;