/* @pjs preload="angry.jpg","digistrip.ttf","evil.jpg", "haha.jpg", "hmph.jpg", "logo.png", "sad.jpg", "smile.jpg", "waat.jpg", "wow.jpg", "yikes.jpg"; */


 //Mario_Dcunha
 //Text Adventure "Kurious Kwery"
 //Images by Danilo Sanino 'ddraw' http://bit.ly/2v2dPVr

//Global Variable Declaration

PFont font;  
PImage face, mad;

//Three points of text start
int limit=300;  

//main variables for global text
String mainText="Can I ask you a question? You can answer by speaking out loud and clicking.";
String choiceRIGHTtext="Umm, nevermind!", choiceLEFTtext="Sure";
int mainX=100, mainY=70, choiceX=100, choiceY=610, choiceXL, choiceXR; 

//Managing Screens and TreeFlow
int screen=1, level=1, flag=1;




void setup()
{
  size(600,700);
  font = createFont("digistrip.ttf",20);
  face=loadImage("smile.jpg");
  mad=loadImage("logo.png");
  choiceXR=width-width/4; choiceXL=width/4; 
}

void draw()
{
  //White Background, Black Text, Load Font
  background(255);
  textFont(font);
  
  //face
  image(face,75,100,500,500);

  if(screen==1)
  {
    textAlign(CENTER);
    text("Hi! I'm Kurious Kwery.",300,mainY-20);
  }

  displayText();
  
  if (level==1)
  {
      if(mousePressed && mouseX<limit)
      {
        freshText("What is the Captial of Israel?");
        choiceLEFT("Tel-Aviv"); choiceRIGHT("I dunno");
        level=2; flag=1;
        face=loadImage("smile.jpg");
      }
      else if(mousePressed && mouseX>limit)
      {
        freshText("Then why did you... TURN ME ON?");
        choiceLEFT("Ok Fine! Continue"); choiceRIGHT("Cut the crap!");
        level=2; flag=2;
        face=loadImage("angry.jpg");
      }
  }
  else if(level==2 && flag==1)
  {
    if(mousePressed && mouseX>limit)
      {
        freshText("It's Tel-Aviv! Ok, another one. Why is Bryan Adams so cool?");
        choiceLEFT("Enlighten Me!"); choiceRIGHT("I dunno");
        level=3; flag=2;
        face=loadImage("smile.jpg");
      }
      else if(mousePressed && mouseX<limit)
      {
        freshText("AVIV!");
        choiceLEFT("Oh Gawd!"); choiceRIGHT("What??!!!");
        level=3; flag=1;
        face=loadImage("haha.jpg");
      }
  }
  else if(level==2 && flag==2)
  {
      if(mousePressed && mouseX>limit)
      {
        freshText("Ok, I'm sorry! Do you really wanna leave?");
        choiceLEFT("Fine, continue."); choiceRIGHT("Yes! I wanna exit!");
        level=3; flag=3;
        face=loadImage("sad.jpg");
      }
      else if(mousePressed && mouseX<limit)
      {
        level=1; flag=1;
      }
  }
  else if(level==3 && flag==1)
  {
    if(mousePressed && mouseX<limit)
      {
        freshText("Haha! Another one?");
        choiceLEFT("Yes"); choiceRIGHT("No");
        level=4; flag=1;
        face=loadImage("haha.jpg");
      }
      else if(mousePressed && mouseX>limit)
      {
        freshText("You said tell Aviv! So I told 'Aviv'!");
        choiceLEFT("Ummm...");  choiceRIGHT("Oh Gawd! Lemme go!");
        level=4; flag=2;
        face=loadImage("haha.jpg");
      }
  }
  else if(level==3 && flag==2)
  {
    if(mousePressed && mouseX<limit)
      {
        freshText("Coz he's got a fan following!");
        choiceLEFT("Ummm...");  choiceRIGHT("Oh Gawd! Lemme go!");
        level=4; flag=3;
        face=loadImage("haha.jpg");
      }
      else if(mousePressed && mouseX>limit)
      {
        freshText("Coz he's got a fan following!");
        choiceLEFT("Haha! Another question?");  choiceRIGHT("Oh Gawd! Lemme go!");
        level=4; flag=1;
        face=loadImage("haha.jpg");
      }
  }
  else if(level==3 && flag==3)
  {
    if(mousePressed && mouseX<limit)
      {
        //freshText("Yaay! Ok!");
        level=1; flag=1;
      }
      else if(mousePressed && mouseX>limit)
      {
        bye();
      }
  }
  
    else if(level==4 && flag==1)
  {
    if(mousePressed && mouseX<limit)
      {
        freshText("Do you watch Game of Thrones?");
        choiceLEFT("Yes"); choiceRIGHT("No");
        level=5; flag=1;
        face=loadImage("smile.jpg");
      }
      else if(mousePressed && mouseX>limit)
      {
        bye();
      }
  }

  else if(level==4 && flag==2)
  {
    if(mousePressed && mouseX<limit)
      {
        freshText("Haha! Another question?");
        choiceLEFT("Yes"); choiceRIGHT("No");
        level=4; flag=1;
        face=loadImage("smile.jpg");
      }
      else if(mousePressed && mouseX>limit)
      {
        bye();
      }
   }
 
   else if(level==4 && flag==3)
   {
      if(mousePressed && mouseX<limit)
        {
          freshText("Haha! Another question?");
          choiceLEFT("Yes"); choiceRIGHT("No");
          level=4; flag=1;
          face=loadImage("smile.jpg");
        }
        else if(mousePressed && mouseX>limit)
        {
          bye();
        }
     }
     
     else if(level==4 && flag==4)
     {
        if(mousePressed && mouseX<limit)
          {
            freshText("Haha! Another question?");
            choiceLEFT("Yes"); choiceRIGHT("No");
            level=4; flag=1;
            face=loadImage("smile.jpg");
          }
          else if(mousePressed && mouseX>limit)
          {
            bye();
          }
     }
     
      else if(level==5 && flag==1)
     {
      if(mousePressed && mouseX<limit)
        {
          freshText("How did the UX Designer kill Daenerys' Dragon?");
          choiceLEFT("I'm curious! How??"); choiceRIGHT("I dunno");
          level=6; flag=1;
          face=loadImage("smile.jpg");
        }
        else if(mousePressed && mouseX>limit)
        {
          freshText("OMG! Just stop talking to me!");
          choiceLEFT(""); choiceRIGHT("");
          level=4; flag=6;
          face=loadImage("waat.jpg");
        }
     }


      else if(level==6 && flag==1)
     {
      if(mousePressed && mouseX<limit)
        {
          freshText("Umm... He used DRAG'N DROP! Haha!");
          choiceLEFT("One Last Question?");
          choiceRIGHT("I can't take this. Bye!");
          level=7; flag=1;
          face=loadImage("haha.jpg");
        }
        else if(mousePressed && mouseX>limit)
        {
          freshText("He used DRAG'N DROP! Haha!");
          choiceLEFT("One Last Question?");
          choiceRIGHT("I can't take this. Bye!");
          level=7; flag=1;
          face=loadImage("haha.jpg");
        }
     }
     
     else if(level==7 && flag==1)
     {
      if(mousePressed && mouseX<limit)
        {
          freshText("What do you call a bee, that just entered the room and burped?");
          choiceRIGHT("I give up!");
          choiceLEFT("Waat...?");
          level=8; flag=1;
          face=loadImage("yikes.jpg");
        }
        else if(mousePressed && mouseX>limit)
        {
          bye();
        }
     }
     
     else if(level==8 && flag==1)
     {
      if(mousePressed && mouseX<limit)
        {
          freshText("JUST-IN BEE-BURP!");
          choiceRIGHT("I'M DONE!");
          choiceLEFT("Dear Lord!");
          level=4; flag=6;
          face=loadImage("haha.jpg");
        }
        else if(mousePressed && mouseX>limit)
        {
          bye();
        }
     }
     
    else if(level==4 && flag==6)
    {
      if(mousePressed)
      {
        bye();
      }
    }
    else if(level==98 && flag==98 && mousePressed)
    {
      freshText("");
      face=mad;
      level=99; flag=99;
    }

    else if(level==99 && flag==99 && mousePressed)
    {
      background(0);
      image(mad,75,100,500,500);
        if(mousePressed || keyPressed)
          exit(); 
    }
}




void displayText()
{
  //textAlign(CENTER);
  fill(0);
  text(mainText,mainX,mainY,400,400);
  text(choiceRIGHTtext,choiceXR,choiceY);
  text(choiceLEFTtext,choiceXL,choiceY);
}



void freshText(String inputText)
{
  if(mousePressed)
  {
    delay(300);
    background(255);
    mainText=inputText;
    screen++;
  }
}


void choiceRIGHT(String inputText)
{
  if(mousePressed)
  {
    delay(300);
    background(255);
    choiceRIGHTtext=inputText;
  }   
}

void choiceLEFT(String inputText)
{
  if(mousePressed)
  {
    delay(300);
    background(255);
    choiceLEFTtext=inputText;
  }   
}


void bye()
{
    freshText("K! Bye!");
    choiceRIGHT("");
    choiceLEFT("");
    level=98; flag=98; //exit
    face=loadImage("hmph.jpg");
}



  






  