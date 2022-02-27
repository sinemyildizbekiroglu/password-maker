function makePassword(phrase) {
  let splitWords = phrase.split(" ")
  let firstLetters = splitWords.map((letter)=>{
      return letter[0]   
  })
  
  let newpassword = []
  
  firstLetters.filter((letter)=>{
     
    if( letter === 'i'|| letter === "I"){
      newpassword.push(1)
    } else if(letter === 's' || letter === "S"){
      newpassword.push(9)
    } else if(letter === 'e'|| letter === "E"){
        newpassword.push(8)
    } else if(letter === 'a' || letter === "A"){
      newpassword.push(5)
    } else {
      newpassword.push(letter)
    }
  })
   return password = newpassword.join("")
}

module.exports = makePassword
