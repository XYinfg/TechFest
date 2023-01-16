import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Inventory(){ // used in element={<Inventory/>} in App.js
    useEffect(() => {
        fetchItems(); // fetch items from fetchItems function below
    }, []);

    const [items, setItems] = useState([]); // set items to empty array

    const fetchItems = async () => {
        const data = await fetch('/inventory'); // fetch data from inventory url route in port 4000 of handler.js
        const items = await data.json(); // set data to json
        setItems(items); // set items to use in return function below
    }

    return(
        <section>
            <div class="container-fluid">
            <h1>Inventory</h1>
            </div>
            {
            items.map(item => ( // iterate through items and display name, price, and quantity
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </div>
            ))
        }
        </section>
    )
}

export default Inventory;