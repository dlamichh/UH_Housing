import React, { Component } from 'react';

function Dropmenu(props) {
    return(
        <div class="search">
            <label>Filter by Housing: </label>
            <select onChange={props.optionSelected}>
                        <option></option>
                        <option value="Studio">Studio</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedroom</option>
                        <option value="3">3 Bedroom</option>
                        <option value="4">4 Bedroom</option>
                        <option value="Townhouse">Townhouse</option>
            </select>
        </div>
    )
}

export default Dropmenu;