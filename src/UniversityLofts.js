import React from 'react';

const UniversityLofts =() =>{
    return (
        <div id="University Lofts">
            <h4>Univerity Lofts</h4>
            <img id="University-Lofts-image" src="https://uh.edu/housing/housing-options/university-lofts/lofs-courtyard.jpg"/>
        
            
            <div class="Floor Plan">
                <h5>Floor Plan</h5>
                <img id="floor-plan-image" src="https://uh.edu/housing/housing-options/university-lofts/clfloorplans.jpg"/>
            </div>
        
            
            <div class="Video_Tour">
                <h5>Video Tour</h5>
                <a href="https://www.youtube.com/watch?v=4P8q5XxfqbI" target="_blank">University Lofts Video Tour(Made by
                    UH student)</a>
            </div>
        
            
            <div class="Amenties">
                <h5>Amenties</h5>
                <ul>
                    <li>Fitness Area</li>
                    <li>Computer Room</li>
                </ul>
            </div>
        
        
            
            <div class="Pros">
                <h5>Pros:</h5>
                <ul>
                    <li>Close to classes.</li>
                    <li>No Meal Plan is required.</li>
                    <li>Can choose between furnished and unfurnished rooms.</li>
                </ul>
            </div>
        
            
            <div class="Cons">
                <h5>Cons:</h5>
                <ul>
                    <li>Expensive</li>
                    <li>No Pets</li>

                </ul>
                
            </div>
        
            <div class="Summary">
                <h5>Summary</h5>
                <p>If you are looking for housing that doesn't require meal plan and is near the classes, then University Lofts may be best fit for you.</p>
            </div>
        </div>
    );
};

export default UniversityLofts;