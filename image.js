const text = 
{0: "This is the typical Kings Gambit start position. Assuming your opponent accepts the kings gambit attempts to open up the kingside as an attacking front against your opponent, however played wrong this just leads to you oppening yourself up for no benefit.",
1: "Number2"}

const moves = {
    0: "e4 <strong>e5</strong> f4",
    1: "e4 <strong>e5</strong> f4 <strong>exf4</strong> nf3"
}

const dots = (document.getElementsByClassName("dot"))
const width = document.getElementById("img").width;

const update = function(index) {
    which = index
    console.log(index)
    document.getElementById("bottomText").innerText = text[index]
    document.getElementById("moves").innerHTML = moves[index]
    document.getElementById("img").src = `Pictures/${index}.png`
    if (index < dots.length-1) document.getElementById("next").src = `Pictures/${index+1}.png`
    if (index > 0) document.getElementById("prev").src = `Pictures/${index-1}.png`
    for (let i = 0; i < dots.length; i++) {
        const element = dots[i];
        if (i != which) {element.classList.remove("theone")
     }else element.classList.add("theone")}
    
}

let which = 0
update(which)


for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    console.log(element.classList)
    if (index == which) {element.classList.add("theone")
    }else if ("theone" in element.classList) element.classList.remove("theone")

    element.addEventListener("click",() => {update(index)})
}


const movers = document.querySelectorAll(".movers")
movers[0].addEventListener("click",() => {which>0 && update(which-1)})
movers[1].addEventListener("click",() => {which<dots.length-1 && update(which+1)})

