const runOnce = function () {
  console.log("This will never run again!");
};

runOnce();

runOnce();

// IIFE (immediatly invoqued function expression)
(function () {
  console.log("This will never run again!");
  const isprivate = true;
})();

(() => {
  console.log("This will never run again!");
})();

console.log(isPrivate);
