import PropTypes from 'prop-types'

function List(props){

const itemsList=props.items;
const category=props.category;

const lowCalorieFood = itemsList.filter((fruit) => fruit.calories < 100);

lowCalorieFood.sort((a,b)=>b.name.localeCompare(a.name));

    const listItems=lowCalorieFood.map((fruit)=> <li key={fruit.id}> {fruit.name} : calories &nbsp; <b>{fruit.calories}</b></li>)

    return (
      <>

        <h2 className="list-category">{category}</h2> <ol className="list-items">{listItems}</ol>
      </>   
    );

}

List.defaultProps={

    items:[],
    category:'Category',
}
List.propTypes={
    items:PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
    category:PropTypes.string,
}

export default List;