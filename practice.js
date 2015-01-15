//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var isTyler = function(name) {
    if (name === 'Tyler') {
      return true;
    } else {
      return false;
    }
  };

  console.log(isTyler('Tyler'));
  console.log(isTyler('Stephen'));


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  var getName = function() {
    return prompt('What is your name?');
  };

  getName();


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var welcome = function() {
    alert(getName());
  };

  welcome();

//Next problem



//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here

  var adder = function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    return result;
  };

  adder(1,2,3,4,5);

  var addXToadder = function(x) {
    return adder(x, arguments);
  };

//Next Problem



//What is the difference between arguments and parameters?

  //Answer Here
  //Arguments are the actual values that you pass into the function.
  //Parameters are the placehodlers - the variables that the function uses to reference the passed in parameters.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //Falsy values are undefined, NaN, '', 0, null, false
  //To check if something is falsy just do an if statement with the variable name in parens
  //Example: if you want to test the variable 'name' do:
  // if (name) {}



//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var myName = function() {
    return 'Stephen Done';
  };

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName

  alert(newMyName());


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  var outerFn = function() {
    return function() {
      return 'Stephen Done';
    };
  };

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
  innerFn();

