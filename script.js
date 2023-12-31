// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//  jQuery .ready for wrapping code to wait until all html elements render

  $(document).ready (function(){

// dayjs advanced plugin for displaying the sufixes on date like the example

    dayjs.extend(window.dayjs_plugin_advancedFormat);

    var currentDate = dayjs().format('dddd, MMMM, Do');
  

    $("#dateDisplay").text(currentDate);
  
  var currentHour = dayjs().hour();

// Using a jQuery function to add or change the class status 
// of each time block using the id of stated hour
// compared to actual time

  $(".time-block").each(function() {
    var hourId = parseInt($(this).attr("id").split("-")[1]);
    console.log("Current Hour:", currentHour);
    if (hourId < currentHour) {
     $(this).addClass ("past");
    } else if (hourId === currentHour) {
      $(this).removeClass ("past");
      $(this).addClass ("present");
    } else {
     $(this).removeClass ("past"); 
     $(this).removeClass ("present"); 
     $(this).addClass ("future");
    }
  });
//  I used the arttibute of the time block id to store data to localStorage on click
//  with the save button

$(".saveBtn").on('click',function(){
  var timeBlockId = $(this).parent().attr("id");
  var userInput = $(this).siblings(".description").val();
  localStorage.setItem(timeBlockId, userInput);
});
// getting saved data from localStorage for each time block

  $(".time-block").each(function() {
    var timeBlockId = $(this).attr("id");
    var savedUserInput = localStorage.getItem(timeBlockId);
    if (savedUserInput) {
      $(this).find(".description").val(savedUserInput);
    }
  });

  
});





  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
