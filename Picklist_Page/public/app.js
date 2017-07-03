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
  $(this).parents("tr").remove();
  getPortfolio();
});

// Click event to move stock to watchlist
$(document).on("click", ".movetowatchlist", function() {
  var thisId = $(this).attr("data-id");
  $.ajax({
    type: "GET",
    url: "/movetowatchlist/" + thisId
  });
  $(this).parents("tr").remove();
  getWatchlist();
});


// Functions

// Load watchlist and render them to the screen
function getWatchlist() {
  $("#watchlist").empty();
  $.getJSON("/watchlist", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#watchlist").prepend("<tr><td><img src='images/" + data[i].brand + "' style='width:100px;height:100px;''></td><td>" + data[i].company + "</td><td>" + data[i].ticker +
        "</td><td><button class='movetoportfolio' data-id='" + data[i]._id + "'>Move to Portfolio</button></td></tr>");
    }
    $("#watchlist").prepend("<tr><th>On the bench</th></tr>");
  });
}

// Load portfolio stocks and render them to the screen
function getPortfolio() {
  $("#portfolio").empty();
  $.getJSON("/portfolio", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#portfolio").prepend("<tr><td><img src='images/" + data[i].brand + "' style='width:100px;height:100px;''></td><td>" + data[i].company + "</td><td>" + data[i].ticker +
        "</td><td><button class='movetowatchlist' data-id='" + data[i]._id + "'>Move to Watchlist</button></td></tr>");
    }
    $("#portfolio").prepend("<tr><th>My Lineup</th></tr>");
  });
}

function titleCase() {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}

// Calling our functions
getPortfolio();
getWatchlist();

