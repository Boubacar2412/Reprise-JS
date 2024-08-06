const day = "monday";

switch (day) {
  case "monday":
    console.log("Teach JS in the morning");
    console.log("Work on projects in the evening");
    console.log("Teach JS in the afternoon");
    console.log("Do some soport a night");
  // break;
  case "thuesday":
    console.log("Work on projects in the evening");
    console.log("Teach JS in the afternoon");
    console.log("Do some soport a night");
  // break;
  case "wednesday":
  case "thursday":
  // break;
  case "friday":
    console.log("I record my courses online");
  // break;
  case "saturday":
  case "sunday":
    console.log("I enjoy my weekend !!");
  // break;
  default:
    console.log("Not a valid day !");
}

if (day == "thuesday") {
  console.log("Work on projects in the evening");
  console.log("Teach JS in the afternoon");
  console.log("Do some soport a night");
} else if (day == "monday" || day == "thuesday") {
  console.log("Teach JS in the morning");
  console.log("Work on projects in the evening");
  console.log("Teach JS in the afternoon");
  console.log("Do some soport a night");
  //
  console.log("Work on projects in the evening");
  console.log("Teach JS in the afternoon");
  console.log("Do some soport a night");
} else if (day == "thuesday") {
  console.log("Work on projects in the evening");
  console.log("Teach JS in the afternoon");
  console.log("Do some soport a night");
} else if (day == "wednesday" || day == "thursday") {
  console.log("Do some soport a night");
} else if (day == "friday") {
  console.log("I record my courses online");
} else if (day == "saturday" || day == "sunday") {
  console.log("I enjoy my weekend !!");
} else {
  console.log("Not a valid day !");
}
