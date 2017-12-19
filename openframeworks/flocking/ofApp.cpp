#include "ofApp.h"

ofImage cake;
ofImage spray;

int imageCenter = 0;

float posX=50.0, posY=100.0;

//--------------------------------------------------------------
void ofApp::setup()
{
   //ofBackground(255,255,0);
    cake.load("cake.png");
    spray.load("cake1.png");
    
    int numParticles = 700;
    
    for (int i = 0; i < numParticles; i++)
    {
        Particle newParticle;
        newParticle.reset();
        particles.push_back(newParticle);
    }


}

//--------------------------------------------------------------
void ofApp::update()
{
    for (int i = 0; i < particles.size(); i++)
    {
        particles[i].update();
    }
    
    if(imageCenter==0)
        cake.draw(posX-50, posY-50);
    else
        spray.draw(posX-50, posY-50);
}

//--------------------------------------------------------------
void ofApp::draw()
{
    
    ofBackgroundGradient(ofColor(255,210,100), ofColor(255, 198, 0));
    
    //ofSetColor(255, 255, 255, 0);
    //ofBackground(255, 198, 0);
    
    for (int i = 0; i < particles.size(); i++)
    {
        particles[i].draw();
    }
    
    if(imageCenter==0)
        cake.draw(posX-50, posY-50);
    else
        spray.draw(posX, posY);

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y )
{
    posX = x;
    posY = y;

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button)
{

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button)
{
    posX = x;
    posY = y;

    for (int i = 0; i < particles.size(); i++)
    {
        particles[i].toggleMode();
    }
    
    if(imageCenter==0)
    {
        imageCenter=1; cake.draw(posX-50, posY-50);
    }
    else
    {
        imageCenter=0; spray.draw(posX, posY);
    }
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
