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
    if (isvip === true) {
        return "access granted: Welcome VIP! "
    }

    if (age < 21) {
        return "access denied: Too young!"
    }   

    return "access granted: Enjoy the night!"
}
console.log(checkentry(18, false))