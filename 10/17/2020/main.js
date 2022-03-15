let toggleNavStatus = 0;

let toggleNav = function() {
    let getSidebar = document.querySelector(".aside-main");
    let getSidebarUl = document.querySelector(".aside-main ul");
    let getSidebarLi = document.querySelector(".aside-main ul li");
    let getSidebarA = document.querySelectorAll(".aside-main ul li a");

    if (toggleNavStatus === 0 ) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";

        for (let a = 0; a < getSidebarA.length; a++) { 
            getSidebarA[a].style.opacity = "1";
        }
        toggleNavStatus = 1;
    } else {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "50px";

        for (let a = 0; a < getSidebarA.length; a++) { 
            getSidebarA[a].style.opacity = "0";
        }

        toggleNavStatus = 0;
    }
}




