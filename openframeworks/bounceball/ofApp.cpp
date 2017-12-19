#include "ofApp.h"

float posX, posY;

float xLimit, yLimit, gravity=1;

ofVec2f circlePosition;
ofVec2f circleVelocity;
int radius;
float friction;


//--------------------------------------------------------------
void ofApp::setup()
{
    ofSetWindowShape(600, 600);
    ofSetWindowTitle("Bounce Ball");
    ofSetBackgroundColor(255, 255, 255);
    ofEnableSmoothing();
    ofSetCircleResolution(40);

//    posX = ofGetWidth()/2;
//    posY = ofGetHeight()/2;
//
//    xLimit = ofGetWidth() - radius;
//    yLimit = ofGetHeight() - radius;
    
    radius = 50;
    friction = 0.1f;
    ofSetColor(255, 100, 0); //orange
    
    circleVelocity.set(5,2);
    circlePosition.x = ofGetWidth()/2;
    circlePosition.y = ofGetHeight()/2;
    
}

//--------------------------------------------------------------
void ofApp::update()
{
    circlePosition.x += 10;
    circlePosition.y += 4;

}

//--------------------------------------------------------------
void ofApp::draw()
{
    ofDrawCircle(circlePosition.x, circlePosition.y, radius);

    circlePosition += circleVelocity;
    circleVelocity *= friction;

    if (circlePosition.x > 0 || circlePosition.x < ofGetWidth()) {
        circlePosition.x *= -1;
    }
    if (circlePosition.y < 0 || circlePosition.y > ofGetHeight()) {
        circlePosition.y *= -1;
    }

//    circlePosition.x += 5 - ofRandom(10);
//    circlePosition.y += 5 - ofRandom(10);
    
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button)
{
//    circlePosition.x = x;
//    circlePosition.y = y;
//
//    circlePosition.x += 5 - ofRandom(10);
//    circlePosition.y += 5 - ofRandom(10);
}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
