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


// Functions

// Load watchlist and render them to the screen
// !!button needs to apply to entire div!! no break in rows!!
// function getWatchlist() {
//   $("#watchlist").empty();
//   $.getJSON("/watchlist", function(data) {
//     for (var i = 0; i < data.length; i++) {
//       $("#watchlist").prepend("
//         <div class='movetoportfolio' data-id='" + data[i]._id + "'>
//         <div class=''><img src='images/" + data[i].brand + "' style='width:100px;height:100px;''></div><div>" + data[i].company + "</div><div>" + data[i].ticker + "</div></div>");
//     }
//     $("#watchlist").prepend("<tr><th>On the bench</th></tr>");
//   });
// }


// Load watchlist and render them to the screen
function getWatchlist() {
  $("#watchlist").empty();
  $.getJSON("/watchlist", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#watchlist").prepend("<span class='tiles'><tr><th><button class='movetoportfolio' data-id='" + data[i]._id + "'><img src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th>" + data[i].ticker +
        "</button></th></tr></span>");
    }
    $("#watchlist").prepend("<center><h2>On the Bench</h2></center>");
  });
}

// Load portfolio stocks and render them to the screen
function getPortfolio() {
  $("#portfolio").empty();
  $.getJSON("/portfolio", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#portfolio").prepend("<span class='tiles'><tr><th><button class='movetowatchlist' data-id='" + data[i]._id + "'><img src='images/" + data[i].brand + "' style='width:100px;height:100px;''></th><br><th>" + data[i].company + "</th><br><th>" + data[i].ticker +
        "</button></th></tr></span>");
    }
    $("#portfolio").prepend("<center><h2>My Lineup (Max 20)</h2></center>");
  });
}

// function titleCase() {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   return str.join(' ');
// }

// Calling our functions
getPortfolio();
getWatchlist();

