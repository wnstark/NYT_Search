$('button').on("click", function () {
    var txtSearch = $("#txtSearch").val();
    var txtRecordsNum = $('#txtRecordsNum').val();
    var txtStartYear = $("#txtStartYear").val();
    var txtEndYear = $("#txtEndYear").val();
    var btnName = $(this).attr('data-name');
    var articleDiv = $("#articleDiv");

    if (btnName === 'Search') {
        var apiKey = "&api-key=CxqL80Gok23rT2wvkbEST0HGyLKhK0OL";
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + txtSearch + apiKey;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // $("#art-view").text(JSON.stringify(response));

            var results = response.response.docs;

            for (var i = 0; i < results.length; i++) {

                var artDiv = $("<div>");

                var wordCount = results[i].word_count;

                var p = $("<p>").text("Word Count: " + wordCount);
                var q = $("<p>").text(results[i].abstract);

                artDiv.prepend(p);
                artDiv.prepend(q);

                articleDiv.prepend(artDiv);
            }
        });
    }
    // -------------------------------------
});