#include <Keyboard.h>

#define ROW_1 2
#define ROW_2 3
#define ROW_3 4

int num_pressess = 0; 

char row_1 [10] = {'q','w','e','r','t','y','u','i','o','p'}

typedef struct {
  int pin;
  char associatedKey;
  int state;
  int lastState;
  int num_pressess;
} Button;

Button buttons[3] = {
  {ROW_1, KEY_UP_ARROW, 0, 0,0},
  {ROW_2, KEY_DOWN_ARROW, 0, 0,0},
  {ROW_3, KEY_LEFT_ARROW, 0, 0,0}
};
void setup() {
Serial.begin(9600);

  for(int i = 0; i < sizeof(buttons) / sizeof(Button); i++) {
    pinMode(buttons[i].pin, INPUT);
  }
}

void loop() {
 // Update each button, and check for presses or releases
  for(int i = 0; i < sizeof(buttons) / sizeof(Button); i++) {
    Button *but = &buttons[i];

    but->lastState = but->state;
    but->state = digitalRead(but->pin);

    if(but->lastState != but->state) {
      if(but->state == 0) {
        num_pressess++; 
        Serial.println(num_pressess);
        but->associatedKey = row_1[num_pressess];
        Keyboard.press(but->associatedKey);
      } else {
        // Button just turned off
        Serial.println("Button was just released");
        Keyboard.release(but->associatedKey);
      }
    }
  }
    delay(10);

}
