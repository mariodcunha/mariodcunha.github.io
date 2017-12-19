//
//  Particle.hpp
//  FlockingSketch
//
//  Created by Mario Dcunha on 05/12/17.
//

#ifndef Particle_hpp
#define Particle_hpp

//#include "studio.h"
#include "ofMain.h"

class Particle
{
public:
    void setup();
    void reset();
    void update();
    void draw();
    
    void toggleMode();
    
    ofPoint position;
    ofPoint velocity;
    ofPoint force;
    float drag;
    
    bool isAttracting = true;

};

#endif /* Particle.hpp */

