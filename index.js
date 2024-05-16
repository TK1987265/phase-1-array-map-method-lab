const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  return tutorials.map(function(question) 
  {
    
    const words = question.split(" ")

const mappedWords = words.map(function(word) {
  const firstLetter = word[0].toUpperCase()
  const restOfIt = word.slice(1, word.length)
  return firstLetter + restOfIt
})

return (mappedWords.join(" "))
  })

  
}



