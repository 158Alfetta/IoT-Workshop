#include <ESP8266WiFi.h>
#include <FirebaseArduino.h> 

#define WIFI_SSID "YOUR_SSID"
#define WIFI_SSID "YOUR_PASSWORD" 

#define FIREBASE_HOST "iot-openhouse-2019.firebaseio.com"
#define FIREBASE_AUTH "z46ng4bNnMlfLx4oFXRjtaOGcHSqeb6wGShYTpnT"

int red = D6;
int green = D7;
int blue = D8;

void setup() {
  Serial.begin(9600); 
  WiFi.begin(WIFI_SSID); 
  Serial.print("connecting"); 
  while (WiFi.status() != WL_CONNECTED) { 
    Serial.print("."); 
    delay(500);} 
  Serial.println(); 
  Serial.print("connected: "); 
  Serial.println(WiFi.localIP());
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  //Light Setup
  pinMode(red, OUTPUT);
  pinMode(green, OUTPUT);
  pinMode(blue, OUTPUT);
  
  }
  
void loop() {
  int led = Firebase.getInt("led");
  int color = Firebase.getInt("color");

  if(color==1 && led==1){
    digitalWrite(red, HIGH);
    digitalWrite(green, LOW);
    digitalWrite(blue, HIGH);
  }else if(color==2 && led==1){
    digitalWrite(red, LOW);
    digitalWrite(green, HIGH);
    digitalWrite(blue, HIGH);
  }else if(color==3 && led==1){
    digitalWrite(red, LOW);
    digitalWrite(green, LOW);
    digitalWrite(blue, HIGH);
  }else if(color==4 && led==1){
    digitalWrite(red, HIGH);
    digitalWrite(green, LOW);
    digitalWrite(blue, LOW);
  }else if(color==5 && led==1){
    digitalWrite(red, LOW);
    digitalWrite(green, HIGH);
    digitalWrite(blue, LOW);
  }else if(color==6 && led==1){
    digitalWrite(red, LOW);
    digitalWrite(green, LOW);
    digitalWrite(blue, LOW);
  }else{
    digitalWrite(red, HIGH);
    digitalWrite(green, HIGH);
    digitalWrite(blue, HIGH);
  }
}
    
