'use strict'
console.log('ex day 22')
//variadic functions

function getLongest() {
    var longestArg = ''
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > longestArg) { longestArg = arguments[i] }
    }
    console.log('longest argument was ', longestArg)
    return longestArg
}

getLongest('lala', 'rogogogo', 'rorookkksksk')

//try and catch errors

// Throws TypeError: 
try {
    var num = 4; num.toUpperCase();
} catch (err) {
    console.log('an error occurred ' + err)
}

// Throws SyntaxError 
try{ 
    eval("alert('Hello)");
} catch (err) {
    console.log (err)
} finally {
    console.log ('this always runs')
}

// Throws ReferenceError 
try {
    var x = y + 1;
    if (!y) {throw new varError ('var is undefined')}
} catch (err) {
    console.log('another error occurred ' + err)
}