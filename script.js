const hamburger = document.querySelector('.hamburger');
const ulCont = document.querySelector('.ul-cont');

function myFunction(){
    hamburger.classList.add("hamburger-disappear")
    ulCont.classList.add("ul-cont-appear")
}

ulCont.addEventListener("click",((e)=>{
    if (e.target.classList[0] === "closeIcon"){
        hamburger.classList.remove("hamburger-disappear")
        ulCont.classList.remove("ul-cont-appear")

    } else if (e.target.classList[0] === "nav-link"){
        hamburger.classList.remove("hamburger-disappear")
        ulCont.classList.remove("ul-cont-appear")
    }
}))
console.log(hamburger);
