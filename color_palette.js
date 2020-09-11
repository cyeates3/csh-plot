// Color Palette 
function getColor(albumIn) {
    // for reference, here is the album names with the corresponding idx
    var colors = [
        "#01ffff",
        "#624752",
        "#ececec",
        "#ba7a4c",
        "#dddddd",
        "#2b2b2b",
        "#b5b3b4",
        "#555a3c",
        "#9e5535",
        "#72355e",
        "#6a7177",
        "#f9fb80",
        "#000000",
        "#804e29",
        "#ffffcb",
        "#eab9d7",
        "#caa980",
        "#b4483c",
        "#71bea9",
        "#909090",
        "#000000",
        "#97000c",
        "#8f89ff" // last color is for non-albums
    ]

    var albums = [
        "The Bell Jar",
        // "I Need Money, Not Friends",
        "Boxing Day",
        "Fangface",
        "Katzenjammer",
        "The Loudness War",
        "Nervous Young Men",
        "1",
        "2",
        "3",
        "4",
        // "5",
        "Little Pieces Of Paper With 'No' Written On Them",
        "My Back Is Killing Me Baby",
        "Twin Fantasy (Mirror to Mirror)",
        "Monomania",
        "Living While Starving",
        "Disjecta Membra",
        "Nervous Young Man",
        "How To Leave Town",
        "Teens of Style",
        "Teens of Denial",
        "Twin Fantasy (Face to Face)",
        "Making a Door Less Open"
    ]
    var colorOut = ""
    for (var m = 0; m < albums.length; m++) {
        if (albumIn.toLowerCase().substring(0,16) == albums[m].toLowerCase().substring(0,16)) { // just comparing first 15 letters and lower case to avoid dealing with 'no'
            colorOut = colors[m];
        }
    }
    if (!colorOut) { // if input album does not match those listed, then use last color for extra, non-album materials such as singles
        colorOut = colors[albums.length];
    }

    return colorOut
}

exports.getColor = getColor;


// var test = getColor("Does It Feel Good");
// console.log(test);