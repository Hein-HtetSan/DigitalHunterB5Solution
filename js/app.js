var links = document.querySelectorAll(".links a")
links.forEach(a => {
    a.addEventListener('click', () => {
        resetLink();
        a.classList.add("activeClass")
    })
})
function resetLink() {
    links.forEach(a => {
        a.classList.remove("activeClass")
    })
}


const toDark = () => {
    document.documentElement.setAttribute("theme", "dark")
    localStorage.setItem("theme", "dark")
}
const toLight = () => {
    document.documentElement.setAttribute("theme", "light")
    localStorage.setItem("theme", "light")
}

const changeMode = document.querySelector(".change-theme")

changeMode.addEventListener("click", function() {
    const color = localStorage.getItem("theme")
    if (color === 'dark'){
        toLight()
    } else {
        toDark()
    }
})

const color = localStorage.getItem("theme")
if(color === 'dark'){
    toDark()
    changeMode.setAttribute('checked', 'checked')
} else {
    toLight()
    changeMode.removeAttribute('checked', 'checked')
}
