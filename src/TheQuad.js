import React from 'react';

const TheQuad =() =>{
    return (
        <div id="The Quad" class="Title">
            <h4>The Quad</h4><br/>
            <img id="quad-image" src="https://www.uh.edu/housing/housing-options/the-quad/new-quad-cover.jpg"/>
        
            <br/><br/>
            <div class="Floor Plan">
                <h5>Floor Plan</h5><br/>
                <img id="floor-plan-image"
                    src="https://www.uh.edu/housing/quad/photos-and-renderings/quad_townhomes_floorplans_thumbnail.jpg"/>
            </div>
        
            <br/>
            <div class="Amenties">
                <h5>Amenties</h5><br/>
                <ul>
                    <li>Private Bedooms</li>
                    <li>Fitness Area</li>
                    <li>Computer Room</li>
                </ul>
            </div>
        
        
            <br/>
            <div class="Pros">
                <h5>Pros:</h5><br/>
                <ul>
                    <li>Close to UH Cougar Woods Dining Hall</li>
                    <li>Private bedroom</li>
                    <li>Furnished Rooms</li>
                    <li>New Building</li>
                </ul>
            </div>
        
            <br/>
            <div class="Cons">
                <h5>Cons:</h5><br/>
                <ul>
                    <li>No Pets</li>
                    <li>Mandatory Meal Plan with the cheapest available options at $2,209.86 per semester.</li>
                </ul>
            </div>
        
            <br/>
            <div class="Summary">
                <h5>Summary</h5><br/>
                <p>If you are looking for private bedroom and is okay with having mandatory meal plan, then the Quad might
                    be a good fit for you.</p>
            </div>
        
        </div>

    );
};

export default TheQuad;