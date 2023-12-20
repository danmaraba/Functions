// Anonymous functions-simply functions without a name
const fn=function (){
    console.log("You will go to the office");
}
fn();
// Function expressions are arrangments of constants, variables, and symbols that, when interpreted by the language, produce a value.
// One way of accessing anonymous function is by declaring a variable and assigning the function as its value. Then you can now use the variable name to invoke the function. 
// Function expressions are not hoisted!
// The second way of invoking anonymous function is by way of using Immediately-Invoked Function Expression. To achieve this, you enclose the entire function with parentheses.Below is an example

(function (baseNumber){
    console.log( baseNumber +3);
})(2);