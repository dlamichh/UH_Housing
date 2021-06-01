import React from 'react';

const TheQuad =() =>{
    return (
        <div id="The Quad">
            <h4>The Quad</h4>
            <img id="quad-image" src="https://www.uh.edu/housing/housing-options/the-quad/new-quad-cover.jpg"/>
        
            
            <div class="Floor Plan">
                <h5>Floor Plan</h5>
                <img id="floor-plan-image"
                    src="https://www.uh.edu/housing/quad/photos-and-renderings/quad_townhomes_floorplans_thumbnail.jpg"/>
            </div>
        
            
            <div class="Amenties">
                <h5>Amenties</h5>
                <ul>
                    <li>Private Bedooms</li>
                    <li>Fitness Area</li>
                    <li>Computer Room</li>
                </ul>
            </div>
        
        
            
            <div class="Pros">
                <h5>Pros:</h5>
                <ul>
                    <li>Close to UH Cougar Woods Dining Hall</li>
                    <li>Private bedroom</li>
                    <li>Furnished Rooms</li>
                    <li>New Building</li>
                </ul>
            </div>
        
            
            <div class="Cons">
                <h5>Cons:</h5>
                <ul>
                    <li>No Pets</li>
                    <li>Mandatory Meal Plan with the cheapest available options at $2,209.86 per semester.</li>
                </ul>
            </div>
        
            
            <div class="Summary">
                <h5>Summary</h5>
                <p>If you are looking for private bedroom and is okay with having mandatory meal plan, then the Quad might
                    be a good fit for you.</p>
            </div>
        
        </div>

    );
};

export default TheQuad;