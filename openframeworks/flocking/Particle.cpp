//
//  Particle.cpp
//  FlockingSketch
//
//  Created by Mario Dcunha on 05/12/17.
//

#include "Particle.hpp"

//ofSoundPlayer   mySound;




void Particle::reset()
{
    
    position.x = ofRandomWidth();
    position.y = ofRandomHeight();
    
    velocity.x = ofRandom(-4, 4);
    velocity.y = ofRandom(-4, 4);
    
    drag = ofRandom(0.90, 0.99);
    
    force = ofPoint(0,0);
}

void Particle::update()
{
    if (isAttracting)
    {
        ofPoint attractPoint = ofPoint(ofGetMouseX(), ofGetMouseY());
        
        force = attractPoint - position;
        force.normalize();
        
        velocity *= drag;
        velocity += force * 0.6;
        
        position += velocity;
    }
    else {
        ofPoint repulsePoint = ofPoint(ofGetMouseX(), ofGetMouseY());
        force = repulsePoint - position;
        
        float distance = force.length();
        force.normalize();
        
        if (distance < 150) {
            velocity -= force * 0.6;
        }
    }
    
    position += velocity;

    
}

void Particle::draw()
{
//    if (isAttracting)
//
//    else
//        ofSetColor(128, 0, 128);
 
    ofSetColor(ofRandom(0,50));
    ofDrawCircle(position.x, position.y, 3.0);
}


void Particle::toggleMode()
{
    isAttracting = !isAttracting;
    reset();
}
