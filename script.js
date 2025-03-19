// animation
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("show");
            }else {
                el.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});
// toggle menu
function toggleMenu() {
    const navList = document.getElementById("mynav-list");
    navList.classList.toggle("responsive");
}

// theme switcher
let toggleBtn = document.querySelector("#toggleBtn");
let body = document.querySelector("body");

let darkmode = false;

toggleBtn.addEventListener('change',
 (event) => {
    lightmode = event.target.checked;
    if(lightmode){
        body.classList.add("lightmode");
    } else {
        body.classList.remove("lightmode");
    }
});

// explore button
document.querySelector('.button').addEventListener('click', function () {
    document.querySelector('#first-container-sr').scrollIntoView({
        behavior: 'smooth'
    });
});

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};


// table
let tableArray = [];

let tableTitlesArray = [];

let objectTable;

const sharedLinkFetch = "https://www.dropbox.com/scl/fi/1e2ytav07ml1riekgs71d/table.json?rlkey=thelsora1zrtsah5qzjyz9fch&st=yhp1wcxc&dl=0";

const directLink = sharedLinkFetch.replace("www.dropbox.com", "dl.dropboxusercontent.com");

fetch(directLink)
    .then(table => table.json())
    .then((table) => {
        for (let i = 0; i < table.table.length; i++) {
            tableTitlesArray.push(table.table[i].name)
            for (element of table.table[i].content) {
                tableArray.push(element[0])
            }
            for (element of table.table[i].content) {
                tableArray.push(element[1])
            }
        }
        console.log(tableTitlesArray)
        console.log(tableArray)

        objectTable = { ...table };

        let numberTitle = 0;

        document.querySelectorAll('.table-element-title-ym').forEach((element) => {

            element.innerHTML = tableTitlesArray[numberTitle];

            numberTitle++;

        });

        let number = 0;

        document.querySelectorAll('.table-data-ym').forEach((element) => {

            element.innerHTML = tableArray[number];

            number++;
            /*
            element.addEventListener('input', (event) => {
                console.log(`Value changed to: ${event.target.value}`);
            });
            */
        });
    });