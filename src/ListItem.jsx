import propTypes from 'prop-types'

function ListItem(props) {
    const itemList = props.listItem;
    const category = props.category;

    const listItem = itemList.map(item => <li key={item.id}>
                                                  {item.name}: <b>{item.calories}</b>
                                         </li>)

    return (
        <>
            <h2 className="list-category">{category}</h2>
            <ol className="list-item">{listItem}</ol>
        </>
    );
}

ListItem.default = {
    category: "Category",
    listItem: []
}
ListItem.propTypes = {
    category: propTypes.string,
    listItem: propTypes.arrayOf(propTypes.shape({id: propTypes.number, 
                                                name: propTypes.string, 
                                                calories: propTypes.number}))
}

export default ListItem


// on App()

// const fruits = [{ id: 1, name: "apple", calories: 97 },
//     { id: 2, name: "mango", calories: 109 },
//     { id: 3, name: "guyabano", calories: 123 },
//     { id: 4, name: "orange", calories: 95 },
//     { id: 5, name: "banana", calories: 89 }];

// const vegetables = [{ id: 6, name: "ampalaya", calories: 69 },
//     { id: 7, name: "okra", calories: 46 },
//     { id: 8, name: "cabbage", calories: 89 },
//     { id: 9, name: "malunggay", calories: 65 },
//     { id: 10, name: "carrots", calories: 70 }];
// return (
// <>
// {fruits.length > 0 ? <ListItem listItem={fruits} category="Fruits" /> : null}
// {vegetables.length > 0 ? <ListItem listItem={vegetables} category="Vegetables" /> : null}
// </>
// );