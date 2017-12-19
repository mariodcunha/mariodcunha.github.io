#pragma once

#include "ofMain.h"
#include "ParticleSystem.hpp"

class ofApp : public ofBaseApp
{

public:
	void setup();
	void update();
	void draw();

//    void mouseReleased(int x, int y, int button);
    void mouseDragged(int x, int y, int button);
//    void mouseMoved(int x, int y );


	vector<ParticleSystem> systems;
	ofVec3f gravity;
	
	float lastUpdateTime;	// track frame-by-frame time diff
		
};
