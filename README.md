# Prep exercise - Cat walk with Promises

In the Browsers module you made an exercise to make a cat walk on the screen until it was halfway, then do a dance for 5 seconds after which it will continue walking until the end of the screen. In this exercise the result should be the same, but this time we want to use `Promise`s to write it in a different way.

Have a look [here](https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk) to remind yourself what the goal of the code was and then do the steps written in `index.js`. We have already provided a couple of functions for you.

## Things to think about

- What do you think the advantages are of having the constants in the global scope? Are there any disadvantages?
- To make the code loop we cannot use a standard JavaScript loop (`for` or `while`). Why is that?
- Do you feel this version is easier to read than the version you made in the Browsers module?
- Is this version more efficient or not or does it not matter?

- //Answer:

//In this case, I feel that both this version and the one from last week are easy to read,
//(It's true that we save on arrow functions, but even that part I feel was useful to clarity.)
// and the use of "then" in this version might be a little clearer for me. Both versions are equally efficient.
//Async/await works similarly to promises, so this method doesn't block other functions from running, which is a fundamental feature of promises.

//However, I understand that the objective of these new methods is to make the code clearer,
// so I suppose that the difference is almost imperceptible, at least for me, in this scenario.
