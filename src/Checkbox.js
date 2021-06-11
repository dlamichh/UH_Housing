import React, { Component } from 'react';

function Checkbox(props) {
    return(
        <div class="search">
            <br/>
            <label>Private Bedroom:</label>
            <label class="switch">
                <input type="checkbox" onChange={props.handleCheckbox}/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default Checkbox;