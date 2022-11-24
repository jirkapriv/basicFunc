const divos = document.getElementById("divos");
const divos2 = document.getElementById("divos2");
const myp = document.getElementById("myp");
const myp2 = document.getElementById("myp2");

const changecolor = (div, color) => {
  div.style.backgroundColor = color;
};

divos.onclick = () => {
  changecolor(divos, "green");
};

divos2.onclick = () => {
  changecolor(divos2, "green");
};


const pchange = (p, color) =>{


p.style.color = color;


}



myp.onclick = () =>{

pchange(myp, "green");


}

myp2.onclick = () =>{

    pchange(myp2, "green");

    
}

