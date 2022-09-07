const text = 
{0: "This is the typical Kings Gambit start position. Assuming your opponent accepts the kings gambit attempts to open up the kingside as an attacking front against your opponent, however played wrong this just leads to you oppening yourself up for no benefit.",
1: "Number2"}

const moves = {
    0: "e4 <strong>e5</strong> f4",
    1: "e4 <strong>e5</strong> f4 <strong>exf4</strong> nf3"
}




const dots = document.getElementsByClassName("dot")

let width = 0

const resizer = () => {
    width = Number(document.getElementById("img").width)
}

resizer()
window.addEventListener("resize",() => {
    setTimeout(() => {
        console.log(21,width)
        resizer()
        console.log(width)
        update(which)
    }, 2000);
    
})

for (let index = 1; index < 9; index++) {
    const element = document.querySelector("img").cloneNode()
    element.src = `Pictures/${index}.png`
    document.querySelector(".allimages").appendChild(element)    
}

const update = function(index) {
    which = index
    document.getElementById("bottomText").innerText = text[index]
    document.getElementById("moves").innerHTML = moves[index]
    document.querySelector(".allimages").style.left = `${-1*(width*index)}px`
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        if (i == which) {element.classList.add("theone")
        }else element.classList.remove("theone")
    }    
}
    
let which = 1
update(which)


for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    if (index == which) {element.classList.add("theone")
    }else if ("theone" in element.classList) element.classList.remove("theone")

    element.addEventListener("click",() => {update(index)})
}


const movers = document.querySelectorAll(".movers")
movers[0].addEventListener("click",() => {which>0 && update(which-1)})
movers[1].addEventListener("click",() => {which<dots.length-1 && update(which+1)})

