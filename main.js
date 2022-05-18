// done - select the collection of span tags from the page
// done - hide them immediately in the beginning
// done - add them back in using animation and a timer
// done - center the h1 tag

// expected result
// letters will be brought in one at a time onto the page

console.log("main");

// animate__animated animate__bounce show
let spanTags = $('h1 > span');
let count = 0;

// for(var i = 0; i < spanTags.length; i++){
//   console.log(spanTags.get(i));
// }

let interval = setInterval(() => {
  $(spanTags.get(count)).addClass("show animate__animated animate__rollIn");

  // "animate__animated animate__bounce animate__infinite show"
  count++;
  if(count >= spanTags.length){
    clearInterval(interval);
  }
}, 300);
