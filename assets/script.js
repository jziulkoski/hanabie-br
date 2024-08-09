// ONCLICK MENU
let linkIntegrantes = document.getElementById("members");
let linkBanda = document.getElementById("about-band");
let linkDiscografia = document.getElementById("discography");

let navbar = document.getElementById("navbar");

navbar.style.width = '0%';

function openDiv() {
   navbar.style.width = '100%';
}

function closeDiv() {
    navbar.style.width = '0%'; 
}

const closeNavbarWhenClick = () => {
    if (navbar == '100%' & onclick.linkIntegrantes || onclick.linkBanda || onclick.linkDiscografia) {
        closeDiv()
    }
}

// SHOW LYRICS
document.querySelectorAll('.song-title-name').forEach(function(songTitle) {
    songTitle.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const songDetails = document.querySelector(`.song-details[data-id='${id}']`);

        if (songDetails.classList.contains('show')) {
            songDetails.classList.remove('show');
        } else {
            document.querySelectorAll('.song-details').forEach(function(detail) {
                detail.classList.remove('show');
            });
            songDetails.classList.add('show');
        }
    });
});

// SLIDER
let counter = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage()
}, 10000)

function nextImage() {
    counter++;
    if(counter > 6) {
        counter = 1
    }
    document.getElementById("radio"+counter).checked = true;
}