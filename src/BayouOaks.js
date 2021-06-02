import React from 'react';
import './blog.css'

const BayouOaks =() =>{
    return (
        <div class="Title" id="BayouOaks">
            <h4>Bayou Oaks</h4>
            <br/>
            <img id="bayouoaks-image" src="https://www.uh.edu/housing/housing-options/bayou-oaks/bayou-oaks-courtyard.jpg"/>
        
            <br/><br/>    
            <div class="Floor Plan">
                <h5>Floor Plan</h5><br/>
                <img id="floor-plan-image"
                    src="https://www.uh.edu/housing/housing-options/bayou-oaks/bayouoaks1.jpg"/>
            </div>
        
            <br/>
            <div class="Video_Tour">
                <h5>Video Tour</h5><br/>
                <a href="https://www.youtube.com/watch?v=UQaD143BJzY" target="_blank">Bayou Oaks Video Tour(Made by UH
                    Housing)</a>
                <br/><a href="https://www.youtube.com/watch?v=lsRcNtQVagw" target="_blank">Bayou Oaks Video Tour(Made by
                    UH student)</a>
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
                    <li>Private bedroom</li>
                    <li>Furnished Rooms</li>
                    <li>Meal Plan is not required</li>
                    <li>Home to sororities and fraternities</li>
                </ul>
            </div>
        
            <br/>
            <div class="Cons">
                <h5>Cons:</h5><br/>
                <ul>
                    <li>Can be far away from classes</li>
                    <li>No Pets</li>
                    <li>Has to sign full-year lease including summer</li>
                    <li>Could be noisy sometimes.</li>
                </ul>
            </div>
        
            <br/>
            <div class="Summary">
                <h5>Summary</h5><br/>
                <p>If you are looking for private bedroom and is okay with having to sign full-year lease and plans to cook, then Bayou Oaks might                   be a good fit for you.</p>
            </div>
        </div>
    );
};

export default BayouOaks;
