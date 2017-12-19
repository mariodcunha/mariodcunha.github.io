//
//  Particle.cpp
//  ParticleSystem
//
//  Created by Tyler on 10/5/17.
//
//

#include "Particle.hpp"

Particle::Particle()
{
	lifespan = 3.; // seconds
}

Particle::Particle(ofVec3f _pos)
{
	pos = _pos;
	vel.x = ofRandom(ofGetMouseX()/20, 10);
	vel.y = ofRandom(ofGetMouseY()/20, 10);
	lifespan = 3.;
}

void Particle::applyForce(ofVec3f force){
	acc += force;
}

void Particle::update(float timeDiff){ // how much time has passed since last frame?
	vel += acc;
	pos += vel;
	acc *= 0;
	
	lifespan -= timeDiff;
	if (lifespan < 0.) lifespan = 0.;
}

void Particle::draw(){
	ofPushStyle();
	float hue = ofMap(lifespan, ofRandom(0,200), ofRandom(200), ofRandom(200), ofRandom(200));
	//ofSetColor(ofColor::fromHsb(hue,hue,hue));
    
    ofSetColor(ofRandom(200), ofRandom(200), ofRandom(200),0.2);
    
	
	ofDrawCircle(pos, 1);
	ofPopStyle();
    
    ofPushStyle();
    float hue1 = ofMap(lifespan, 0., 3., 0, ofRandom(200));
    float hue2= ofMap(lifespan, 0., 3., ofRandom(200), ofRandom(200));
    //ofSetColor(ofColor::fromHsb(hue1,hue1,hue1));
    //ofSetColor(ofColor::fromHsb(hue2,hue1,hue2));
    
    ofSetColor(ofRandom(200), ofRandom(200), ofRandom(200));
    
    ofDrawCircle(pos, ofRandom(0,5));
    ofPopStyle();
}

