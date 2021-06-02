import React from 'react';

const MoodyTower =() =>{
    return (
        <div id="Moody_tower" class="Title">
            <h4>Moody Tower</h4><br/>
            <img id="moody-image" src="https://www.uh.edu/housing/housing-options/moody-towers/moody-exterior.jpg"/>
            <br/><br/>
            
            <div class="Floor-Plan">
                <h5>Floor Plan: </h5><br/>
                <img id="floor-plan-moody" src="https://www.uh.edu/housing/housing-options/moody-towers/moody-floorplan1.jpg"/>
            </div>


            <br/>
            <div class="Video Tour">
                <h5>Video Tour: </h5><br/>
                <ul>
                    <li><a href="https://www.youtube.com/watch?v=MLo6428S9fc" src="https://www.youtube.com/watch?v=MLo6428S9fc" target="_blank">Moody Tower Video Tour(Made by UH Housing)</a></li>
                    <li><a href="https://www.youtube.com/watch?v=5VywZhltQIg" src="https://www.youtube.com/watch?v=5VywZhltQIg" target="_blank">Moody Tower Video Tour(Made by UH Students)</a></li>
                </ul>
            </div>


            <br/>
            <div class="Amenties">
                <h5> Amenties: </h5><br/>
                <ul>
                    <li>Computer Lab</li>
                    <li>Fitness Room</li>
                    <li>TV Lounge per floor</li>
                </ul>
            </div>
            <br/>

            <div class="Pros">
                <h5>Pros: </h5><br/>
                <ul>
                    <li>Close to UH Moody Dining Commons, MD Anderson Library and Recreation Center</li>
                    <li>Furnished rooms.</li>
                    <li>Moody Tower is on Campus, everything is walkable.</li>
                    <li>Relatively cheaper than other housing with $2,771 per semester for Double.</li>
                </ul>
            </div>

            <br/>
            <div class="Cons">
                <h5>Cons:</h5><br/>
                <ul>
                    <li>Mandatory Meal Plan with the cheapest available options at $2,209.86 per semester.</li>
                    <li>No Pets</li>
                    <li>Rooms are not spacious.</li>
                    <li>Super Old Building. The building was built on 1970.</li>
                    <li>Communal Bathrooms and can have a rat problems. Shower Slippers is recommended.</li>
                </ul>
            </div>
            <br/>
            <div class="Summary">
                <h5>Summary:</h5><br/>
                <ul>
                    <li>If you are looking for the cheapest housing on campus and don't plan to cook, and are okay with communal bathroom then Moody Tower might be a good fit for you.</li>
                </ul>
            </div>
        </div>
    );
};

export default MoodyTower;
