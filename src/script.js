window.onscroll = function() {
    changeHeaderColor();
    moveNameOnScroll();
};

function changeHeaderColor() {
    const header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = "#161B22";
        header.style.color = "#161B22";
        header.style.opacity = "0.7";
    } else {
        header.style.backgroundColor = "#0D1117";
        header.style.color = "#0D1117";
    }
}


function moveNameOnScroll() {
    const nameElement = document.getElementById("name");
    const scrollValue = window.scrollY; 
    if (scrollValue > 50) {
        nameElement.style.transform = `translateX(${scrollValue}px)`;
    } else {
        nameElement.style.transform = `translateX(0px)`; 
    }
}

