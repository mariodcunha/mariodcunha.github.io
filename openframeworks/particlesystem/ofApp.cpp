#include "ofApp.h"
ofVec3f pos;

//--------------------------------------------------------------
void ofApp::setup(){
	
	ofBackground(255);
	
	gravity = ofVec2f(0,ofRandom(0,20));
	
	lastUpdateTime = ofGetElapsedTimef();

}

//--------------------------------------------------------------
void ofApp::update(){
	
	// time elapsed since last frame
	float timeDiff = ofGetElapsedTimef() - lastUpdateTime;
	
	// update the particle systems
	
	for (int i=0; i<systems.size(); i++)
	{
		systems[i].update(gravity, timeDiff);	// update
	}
		
	lastUpdateTime = ofGetElapsedTimef();

}

//--------------------------------------------------------------
void ofApp::draw(){
	
//	ofBackgroundGradient((200, 130, 199),(89, 90, 90));
	
	for (int i=0; i<systems.size(); i++)
	{
		systems[i].draw();
	}
   
}


//--------------------------------------------------------------
//void ofApp::mouseReleased(int x, int y, int button)
//{
//    
//    systems.push_back( ParticleSystem(ofVec2f(ofGetMouseX(), ofGetMouseY())) );    // construct new particle system
//
//
//}
//--------------------------------------------------------------

void ofApp::mouseDragged(int x, int y, int button)
{
    systems.push_back( ParticleSystem(ofVec2f(ofGetMouseX(), ofGetMouseY())) );    // construct new particle system
}



