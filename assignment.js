//fahnrenheit to celsius
function celsius (fah){
    let result = (fah - 32) *5/9
    console.log(result + ' deg celsius')
}
celsius(32)

//celisius to fahnrenheit
function fah (cels) {
    let result = (cels * 9/5 + 32)
    console.log(result + ' deg fahrenheit')
}
fah(100)







function checkentry(age, isvip) {
     if(isvip === true && age >= 21){
    return "access grnted: Enjoy the night!"
    }
    if (isvip === true || age >= 21) {
        return "access granted: Welcome VIP! immediately "
    }

    if (age < 21) {
        return "access denied: Too young!"
    }   
}
console.log(checkentry(25, true))




function calculateDogAge(puppyAge) {
    let conversioon_rate = 7
    let dogAge = puppyAge * conversioon_rate;
    return dogAge + 'years';


}
console.log(calculateDogAge(2, 7))
console.log(calculateDogAge(9, 7))



function calCircumference(radius) {
    let circumference = (2 * Math.PI * radius).toFixed(2);
    return circumference + 'cm';


}
console.log(calCircumference(78))


function Capitlize(firstletter) {
    return firstletter
    .split(" ")
    .map(function(word) {
        return word.charAt(0).toUpperCase() +
        word.slice(1);
    })    
    .join(" ")
}
console.log(Capitlize("Hello i am a student of digital world tech academy"))




