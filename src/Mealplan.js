import React, { Component } from 'react';

function Mealplan(props) {
    return(
        <div class="search">
            <br/>
            <label>No Meal Plan Required:</label>
            <label class="switch">
                <input type="checkbox" onChange={props.handleMeal}/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default Mealplan;