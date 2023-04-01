// Defining a object which will hold some words and their definations
const dictionary = {
    hello: 'used as a greeting or to begin a conversation',
    world: 'the earth, together with all of its countries, peoples, and natural features',
    javascript: 'a high-level programming language used to create interactive effects within web browsers',
word:"a command, password, or signal.",
now:"at the present time or moment.",
aardvark:"a nocturnal badger-sized burrowing mammal of Africa",
abandon:"to leave somebody",
hat:"a shaped covering for the head worn for warmth,",
mat:"a piece of coarse material placed on a floor for people to wipe their feet on.",
cat:"a land animal"
  };
  
  
  // Checks if input matches any word in the dictionary
  function checkinp(){
  const userInput = document.getElementById("search").value;
  if (dictionary.hasOwnProperty(userInput)) {
    document.getElementById('p').innerHTML=`Definition of ${userInput}: ${dictionary[userInput]}`;
  } else {
    document.getElementById('p').innerHTML='Word Not found';
  }
  }
  


