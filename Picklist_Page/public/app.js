// Click Events

// Click event to add a stock to the db
$("#addstock").on("click", function() {
  $.ajax({
    type: "POST",
    url: "/submit",
    dataType: "json",
    data: {
      company: $("#company").val().toUpperCase(),
      ticker: $("#ticker").val().toUpperCase(), 
      brand: $("#ticker").val().toUpperCase() + '.png',
      created: Date.now()
    }
  })
  .done(function(data) {
    console.log(data);
    getWatchlist();
    $("#ticker").val("");
    $("#company").val("");
  }
  );
  return false;
});

// Click event to move stock to portfolio
$(document).on("click", ".movetoportfolio", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
    type: "GET",
    url: "/movetoportfolio/" + thisId
  });
  $(this).parents("span").remove();
  getPortfolio();
});

// Click event to move stock to watchlist
$(document).on("click", ".movetowatchlist", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
    type: "GET",
    url: "/movetowatchlist/" + thisId
  });
  $(this).parents("span").remove();
  getWatchlist();
});

// Click event to submit user stock selections from #portfolio
// $("#userstock").on("click", function() {
//   $.ajax({
//     type: "POST",
//     url: "/",
//     dataType: "json",
//     data: {
//       company: $("#company").val().toUpperCase(),
//       ticker: $("#ticker").val().toUpperCase(), 
//       brand: $("#ticker").val().toUpperCase() + '.png',
//       created: Date.now()
//     }
//   })
//   .done(function(data) {
//     console.log(data);
//     getPortfolio();
//   }
//   );
//   return false;
// });

// Functions

// Load watchlist and render them to the screen
function getWatchlist() {
  $("#watchlist").empty();
  $.getJSON("/watchlist", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#watchlist").prepend("<span class='tiles'><tr><th><button class='movetoportfolio' data-id='" + data[i]._id + "'><img class='default-img' src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th><p class='tickname'>" + data[i].ticker +
        "</p></button></th></tr></span>");
    }
    $("#watchlist").prepend("<center><h2>On the Bench</h2></center><hr>");
  });
}

// Load portfolio stocks and render them to the screen
function getPortfolio() {
  $("#portfolio").empty();
  $.getJSON("/portfolio", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#portfolio").prepend("<span class='tiles'><tr><th><button class='movetowatchlist' data-id='" + data[i]._id + "'><img class='default-img' src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th><p class='tickname'>" + data[i].ticker +
        "</p></button></th></tr></span>");
    }
    $("#portfolio").prepend("<center><h2>My Lineup (Max 20)</h2></center><hr>");
    $("#portfolio").append("<hr><p><center><button type='submit' id='userstock' class='userstock-btn'>Submit</button></center></p>");
  });
}


// function titleCase() {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }

// Validation Rules
// $(document).ready(function () {
//             $("#addstock").validate({
//                 rules: 
//                 {
//                     company:{
//                     required:true,
//                     },
//                     ticker:{
//                     required:true,  
//                     },
//                 },
//                 messages:
//                 {   
//                     company:
//                     { required:"Company name is required"
//                     },
//                     ticker:
//                     { required:"Ticker Symbol is required",
//                     },
//                 }
//             });

// Calling functions
getPortfolio();
getWatchlist();

