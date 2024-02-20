function List(props){

 
 const itemsList=props.items;

const lowCalorieFood = itemsList.filter((fruit) => fruit.calories < 100);

lowCalorieFood.sort((a,b)=>b.name.localeCompare(a.name));

    const listItems=lowCalorieFood.map((fruit)=> <li key={fruit.id}> {fruit.name} : calories &nbsp; <b>{fruit.calories}</b></li>)

    return (<ol>{listItems}</ol>)

}

export default List;