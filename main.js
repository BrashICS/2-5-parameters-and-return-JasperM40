/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
* 

randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}
**/ 


'use strict';

function exponent(base, exp) {
    let answer = base**exp;
    return answer
}

function to_fahrenheit(celsius) {
    let f = (celsius * 9/5) + 32
    let f_rnd = Math.round(f)
    return f_rnd
}

function to_celsius(fahrenheit) {
    let c = (fahrenheit - 32) * 5/9
    let c_rnd = Math.round(c)
    return c_rnd
}

function roll_dice(qty, sides){
    let answer = randInt
    return answer 
}

    function randInt(min, max) {
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return rnd;
}

function area_circle(radius){
const π = 3.14
let area_circle =  π * radius**2
return area_circle
}

function cylinder_volume(radius, height){
    const π = 3.14
let area_circle =  π * radius**2
let volume = area_circle* height
return volume
}
