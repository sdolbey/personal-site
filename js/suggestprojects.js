document.addEventListener("DOMContentLoaded", function() {
    var data = {
        "projects": [
            {
                "title": "Planet 9",
                "blurb": "Helping the public understand why Pluto was demoted to a dwarf planet so they can confidently add their name to our petition to change that.",
                "thumbnail": "../img/thumbs/planet-9.png",
                "url": "planet-9.html"
            },
            {
                "title": "Wheelies",
                "blurb": "Helping those with mobility issues know which places are accessible and accommodating so they can plan trips and live confidently.",
                "thumbnail": "../img/thumbs/wheelies.png",
                "url": "wheelies.html"
            },
            {
                "title": "Smash Bros. Posters",
                "blurb": "Vector posters of characters from Super Smash Bros. Ultimate.",
                "thumbnail": "../img/thumbs/kirby-thumb.png",
                "url": "smash-posters.html"
            }
        ]
    }
    
    function getCurrentProjectID() {
        var title = document.getElementsByClassName("section-title")[0].innerText;
        for (let i = 0; i < Object.keys(data.projects).length; i++) {
            if(data.projects[i].title == title) {
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
    
    var seeMore = document.getElementsByClassName("see-more row")[0];
    
    // first project
    firstProject = data.projects[projectIDs[0]];

    var first = seeMore.firstElementChild;

    first.href = firstProject.url;

    var firstImage = first.firstElementChild.firstElementChild;
    var newImage = document.createElement("img");
    newImage.setAttribute("src", firstProject.thumbnail);
    var altText = firstProject.title + ' thumbnail';
    newImage.setAttribute("alt", altText);
    firstImage.appendChild(newImage);

    firstImage.nextElementSibling.innerText = firstProject.title;

    firstImage.nextElementSibling.nextElementSibling.innerText = firstProject.blurb;
    
    // second project
    secondProject = data.projects[projectIDs[1]];

    var second = seeMore.firstElementChild.nextElementSibling;

    second.href = secondProject.url;

    var secondImage = second.firstElementChild.firstElementChild;
    newImage = document.createElement("img");
    newImage.setAttribute("src", secondProject.thumbnail);
    altText = secondProject.title + ' thumbnail';
    newImage.setAttribute("alt", altText);
    secondImage.appendChild(newImage);

    secondImage.nextElementSibling.innerText = secondProject.title;

    secondImage.nextElementSibling.nextElementSibling.innerText = secondProject.blurb;
    
    
});
