


$("#submit").on("click", function () {
    $("#results").empty();

    var first = $("#firstName").val()
    console.log(first)
    var last = $("#lastName").val()
    console.log(last)
    var age = $("#age").val()
    console.log(age)

    var baseURL = "https://my-api-server-bjs.herokuapp.com/api/persons?person"

    var key = "&key=123456"

    var query = ""

    if (first) {
        query += "&first_name=" + first;
    }
    if (last) {
        query += "&last_name=" + last;
    }
    if (age) {
        query += "&age=" + age;
    }

    var url = baseURL + key + query;
    console.log(url)

    $.ajax({
        url: url,
        method: "GET",
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(function (response) {
        console.log(response);

        if (!response) {
            $("#results").text("no results match your search")
        } else {
            for (var i = 0; i < response.length; i++) {
                var container = $("<div>").addClass("result-div-container")
                var nameDiv = $("<div>").text("name: " + response[i].first + " " + response[i].last + ".").addClass("result-name-div")
                var ageDiv = $('<div>').text("age: " + response[i].age + ".")

                container.prepend(nameDiv, ageDiv)
                $("#results").prepend(container)
            }
        }

        $("#firstName").val("");
        $("#lastName").val("");
        $("#age").val("");
    });
});




$("#submit-all").on("click", function () {
    $("#results").empty();
    var URLall = "https://my-api-server-bjs.herokuapp.com/api/persons?person&key=123456&all=people"
    console.log(URLall)

    $.ajax({
        url: URLall,
        method: "GET",
        headers: {
            'Content-Type': 'text/plain',
        }
    }).then(function (response) {
        console.log(response);

        if (!response) {
            $("#results").text("no results match your search")
        } else {
            for (var i = 0; i < response.length; i++) {
                var container = $("<div>").addClass("result-div-container")
                var nameDiv = $("<div>").text("name: " + response[i].first + " " + response[i].last + ".").addClass("result-name-div")
                var ageDiv = $('<div>').text("age: " + response[i].age + ".")

                container.prepend(nameDiv, ageDiv)
                $("#results").prepend(container)
            }
        }
        $("#firstName").val("");
        $("#lastName").val("");
        $("#age").val("");
    });
});


$("#clear").on("click", function () {
    $("#results").empty();
});



$("#getApiKey").on("click", function () {
    console.log("clickec");
    // var URL = "http://localhost:3001/key";
    var URL = "https://my-api-server-bjs.herokuapp.com/key";

    var email = $("#apiRequest").val().trim()
    var data = {
        email: email
    }
    console.log(data)

    $.ajax({
        url: URL,
        method: "POST",
        data: data
    }).then(function (response) {
        console.log(response);
    })
});




//   fetch(url, options)
    //   .then((resp) => {
    //     var response =JSON.parse(resp);

    //       console.log(response)
    //   })



    // fetch(url, options)
    // .then((resp) => resp.json())
    // .then(function(data) {
    //     console.log(data)
    // })