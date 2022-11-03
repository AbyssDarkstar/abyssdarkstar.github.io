let itemList = null;
$.getJSON(itemListURL, function (data) {
    var options = {
        valueNames: ['abr', 'price'],
        item: '<tr><td class="abr" scope="row"></td><td class="price"></td></tr>'
    };

    var itemData = [];
    $.each(data, function (index, value) {
        if (value[0] > 0) {
            itemData.push({ "abr": index, "price": value[0] });
        }
    });

    itemList = new List('items', options, itemData);
});

let weatherList = null;
$.getJSON(weatherListURL, function (data) {
    var options = {
        valueNames: ['abr', 'price'],
        item: '<tr><td class="abr" scope="row"></td><td class="price"></td></tr>'
    };

    var weatherData = [];
    $.each(data, function (index, value) {
        if (value[0] > 0) {
            weatherData.push({ "abr": index, "price": value[0] });
        }
    });

    weatherList = new List('weather', options, weatherData);
});

let spawnsList = null;
$.getJSON(spawnsListURL, function (data) {
    var options = {
        valueNames: ['abr', 'price', 'qty', 'outside'],
        item: '<tr><td class="abr" scope="row"></td><td class="price"></td><td class="qty"></td><td class="outside"></rd></tr>'
    };

    var spawnData = [];
    $.each(data, function (index, value) {
        if (value[0] > 0) {
            spawnData.push({ "abr": index, "price": value[0], "qty": value[2], "outside": value[3] ? "No" : "Yes" });
        }
    });

    spawnsList = new List('spawns', options, spawnData);
});

let miscList = null;
$.getJSON(miscListURL, function (data) {
    var options = {
        valueNames: ['abr', 'price'],
        item: '<tr><td class="abr" scope="row"></td><td class="price"></td></tr>'
    };

    var miscData = [];
    $.each(data, function (index, value) {
        if (value[0] > 0) {
            miscData.push({ "abr": index, "price": value[0] });
        }
    });

    miscList = new List('misc', options, miscData);
});

$("#item-price-min").keyup(function () {
    updateItemFilter();
});

$("#item-price-max").keyup(function () {
    updateItemFilter();
});

function updateItemFilter() {
    var minPrice = $("#item-price-min").val();
    var maxPrice = $("#item-price-max").val();
    itemList.filter(function (item) {
        var allow = true;
        if (minPrice != "" && parseInt(item.values().price) < minPrice) {
            allow = false;
        }
        if (maxPrice != "" && parseInt(item.values().price) > maxPrice) {
            allow = false;
        }
        return allow;
    });
    weatherList.filter(function (item) {
        var allow = true;
        if (minPrice != "" && parseInt(item.values().price) < minPrice) {
            allow = false;
        }
        if (maxPrice != "" && parseInt(item.values().price) > maxPrice) {
            allow = false;
        }
        return allow;
    });
    spawnsList.filter(function (item) {
        var allow = true;
        if (minPrice != "" && parseInt(item.values().price) < minPrice) {
            allow = false;
        }
        if (maxPrice != "" && parseInt(item.values().price) > maxPrice) {
            allow = false;
        }
        return allow;
    });
    miscList.filter(function (item) {
        var allow = true;
        if (minPrice != "" && parseInt(item.values().price) < minPrice) {
            allow = false;
        }
        if (maxPrice != "" && parseInt(item.values().price) > maxPrice) {
            allow = false;
        }
        return allow;
    });
}