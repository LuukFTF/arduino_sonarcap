// Sonar Cap lv2

let distance = 0                       
music.setVolume(255)       
          
let piepState = true
let timeSinceLast = 0
                
loops.forever(function () {       
    pins.A2.digitalWrite(false)       
    control.waitMicros(2)       
    pins.A2.digitalWrite(true)       
    control.waitMicros(10)       
    pins.A2.digitalWrite(false)       
    distance = pins.A1.pulseIn(PulseValue.High) / 58       
    light.graph(distance, 50)       
                
    if (timeSinceLast > distance && distance < 500) {       
        distanceSound()       
        timeSinceLast = 0         
    }         
        
    timeSinceLast = timeSinceLast + 40 
      
    console.logValue("distancecm", distance)       
    console.logValue("timesincelast", timeSinceLast)       
    pause(1)        
})       
                
                      
function distanceSound() {       
                
    music.playMelody("C6", 130)       
                
} 

// Lucas van der Vegt 2019
// EOF  
