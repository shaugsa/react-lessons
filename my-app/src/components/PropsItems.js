import React from 'react';

function PropsItems(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) => 
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItem}</ul>
    );
}

export default PropsItems;