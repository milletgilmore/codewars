//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.


//first split the string where the space is so split(' ')
//next create a new string with map and only pass in the first letter of the two strings
//then make them upperCase
//finally join the two strings with a '.' in the middle

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }