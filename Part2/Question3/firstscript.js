function isPalindrom(){
    let mark = String(prompt("Entrez un mot"))
    if(mark === mark.split('').reverse().join('')){
        alert(word + "is a palindrom")
    }
}
isPalindrom()