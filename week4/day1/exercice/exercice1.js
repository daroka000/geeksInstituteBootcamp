// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - Run in the console:
funcOne();
//  Expected Output: "inside the funcOne function 3

// #1.2 - What if we use `const` instead of `let`?
//  If we write `const a = 5`, then try to reassign `a = 3`, it will throw an error:
// TypeError: Assignment to constant variable.



// #2
let a = 0;

function funcTwo() {
    a = 5; // modifies the global variable `a`
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - Run in the console:
funcThree(); //  Output: "inside the funcThree function 0"
funcTwo();   //  Changes global `a` to 5
funcThree(); //  Output: "inside the funcThree function 5"

// #2.2 - What if we declare `a` with `const` instead of `let`?
//  If we change `let a = 0;` to `const a = 0;`,
// funcTwo() will cause an error because we are trying to reassign a constant variable.

// #3
function funcFour() {
    window.a = "hello"; // sets a global variable by attaching it to the window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - Run in the console:
funcFour();  //  Creates global variable `a` with value "hello"
funcFive();  //  Output: "inside the funcFive function hello"

//  Note: Since `a` was not declared with `let`, `const`, or `var`,
// it becomes a global variable on the `window` object.

// #4
let
