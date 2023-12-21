// Anonymous functions-simply functions without a name
const fn=function (){
    console.log("You will go to the office");
}
fn();
// Function expressions are arrangments of constants, variables, and symbols that, when interpreted by the language, produce a value.
// One way of accessing anonymous function is by declaring a variable and assigning the function as its value. Then you can now use the variable name to invoke the function. 
// Function expressions are not hoisted!
// The second way of invoking anonymous function is by way of using Immediately-Invoked Function Expression. To achieve this, you enclose the entire function with grouping operator ().Below is an example

(function (baseNumber){
    console.log( baseNumber +3);
})(2);

function outer(greeting, msg="It's a fine day to learn"){
    const innerFunction = function (name, lang="Python"){
    return `${greeting},${name}!${msg}${lang}`;
    };
    return innerFunction ;
}
console.log(outer("Hello") ("student","JavaScript"));

// Difference of writing a normalfunction and arrow functions

function printBook(book){
    console.log(book)
}
// Arrow function-if the function has one parameter we don't need parentheses. You can also make it a one line by removing the curly brackets. Also, the parentheses can be used on the right side instead of the curly brackets. If the parameters are more than one, the returned parameters should be returned in a different data structure i.e., arrays
const printBookArrow=(book,author)=>[book,author]

printBook('Eloquent JavaScript');
printBookArrow('Miracle Morning Millionares','David Osborn');