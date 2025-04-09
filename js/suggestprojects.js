document.addEventListener("DOMContentLoaded", function() {
    var data = {
        "projects": [
            {
                "id": "planet-9",
                "title": "Planet 9",
                "blurb": "Advocacy website for reinstating Pluto's planethood.",
                "thumbnail": "../img/thumbs/planet-9.png",
                "url": "planet-9.html",
                "style": "planet-9"
            },
            {
                "id": "wheelies",
                "title": "Wheelies",
                "blurb": "Helping wheelchair users and caretakers find accessible businesses.",
                "thumbnail": "../img/thumbs/wheelies.png",
                "url": "wheelies.html",
                "style": "wheelies"
            },
            {
                "id": "smash-posters",
                "title": "Smash Bros. Posters",
                "blurb": "Vector posters of characters from Super Smash Bros. Ultimate.",
                "thumbnail": "../img/thumbs/kirby-thumb.png",
                "url": "smash-posters.html",
                "style": "kirby"
            },
            {
                "id": "wildflowers",
                "title": "Wildflower Photos",
                "blurb": "The pretty things I see when I go outside.",
                "thumbnail": "../img/thumbs/wildflowers.jpg",
                "url": "wildflowers.html",
                "style": "wildflowers"
            },
            {
                "id": "fnps",
                "title": "Florida Native Plant Society",
                "blurb": "Making planting native easier than ever.",
                "thumbnail": "../img/thumbs/fnps.png",
                "url": "fnps.html",
                "style": "fnps"
            },
            {
                "id": "wom",
                "title": "Willys-Overland Motors",
                "blurb": "More than doubling leads with tactical copy adjustments.",
                "thumbnail": "../img/thumbs/willys-overland.png",
                "url": "willys-overland.html",
                "style": "wom"
            }
        ]
    }
    
    function getCurrentProjectID() {
        var currentID = document.getElementsByTagName("article")[0].id;
        for (let i = 0; i < Object.keys(data.projects).length; i++) {
            if(data.projects[i].id == currentID) {
                return i;
            }
        }
    }
    
    function twoRandomNumbers() {
        var current = getCurrentProjectID();
        var numbers = [];
        while(numbers.length < 1) {
            var first = Math.floor(Math.random() * (Object.keys(data.projects).length));
            if(first != current) {
                numbers[0] = first;
            }
        }
        while(numbers.length < 2) {
            var second = Math.floor(Math.random() * (Object.keys(data.projects).length));
            if(second != first && second != current) {
                numbers[1] = second;
            }
        }
        return numbers;
    }
    
    var projectIDs = twoRandomNumbers();
    
    var seeMore = document.getElementsByClassName("see-more")[0];
    
    // first project
    firstProject = data.projects[projectIDs[0]];

    var first = seeMore.firstElementChild;

    first.href = firstProject.url;

    // Set CSS class for visibility
    first.className = 'card-link';

    // Set CSS class for colors
    first.firstElementChild.className += ' ' + firstProject.style;

    // Insert image within div.project-image
    var firstImage = first.getElementsByClassName("project-image")[0];
    var newImage = document.createElement("img");
    newImage.setAttribute("loading", "lazy");
    newImage.setAttribute("src", firstProject.thumbnail);
    var altText = firstProject.title + ' thumbnail';
    newImage.setAttribute("alt", altText);
    firstImage.appendChild(newImage);

    // Set title
    first.getElementsByTagName("h4")[0].innerText = firstProject.title;

    // Set blurb
    first.getElementsByTagName("p")[0].innerText = firstProject.blurb;
    


    // second project
    secondProject = data.projects[projectIDs[1]];

    var second = seeMore.firstElementChild.nextElementSibling;

    second.href = secondProject.url;

    // Set CSS class for visibility
    second.className = 'card-link';

    // Set CSS class for colors
    second.firstElementChild.className += ' ' + secondProject.style;

    // Insert image within div.project-image
    var secondImage = second.getElementsByClassName("project-image")[0];
    newImage = document.createElement("img");
    newImage.setAttribute("loading", "lazy");
    newImage.setAttribute("src", secondProject.thumbnail);
    altText = secondProject.title + ' thumbnail';
    newImage.setAttribute("alt", altText);
    secondImage.appendChild(newImage);

    // Set title
    second.getElementsByTagName("h4")[0].innerText = secondProject.title;

    // Set blurb
    second.getElementsByTagName("p")[0].innerText = secondProject.blurb;
    
    
});
