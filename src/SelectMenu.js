import React, { Component } from 'react';

function SelectMenu(props) {
    return(
        <div id="search">
            <input onChange={props.handleInput} type="text" placeholder="Search by Housing Name"/>
            {/*<label>Choose a Filter:</label>
                    <select onChange={props.handleInput} >
                        <option value="Private">Private Bedroom</option>
                        <option value="Meal">Meal Plan Required</option>
            </select>*/}
        </div>
    )
}

export default SelectMenu;