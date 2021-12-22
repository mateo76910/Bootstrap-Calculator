let trenutni = document.querySelector("#trenutni");
let rjesenje = document.querySelector("#rjesenje");
let buttons = document.querySelectorAll("button");
let backspace = document.querySelector("#backspace");
let clear = document.querySelector("#clear")
let jednako = document.querySelector("#jednako");
let display = [];
let operacije = [".","+","-","/","*"]
let minus = "-"
console.log(display);

buttons.forEach((btn) =>{
    btn.addEventListener("click", () => {
 
        if (!btn.id.match('backspace')) {
            if(btn.classList.contains('a') && display.length > 0){
                if(operacije.includes(display.at(-1))){

                    if(btn.value == minus && !(minus.includes(display.at(-1)))){
                        display.push(btn.value)
                        trenutni.innerHTML = display.join('');
                    }
                    
                    display.pop()
                    display.push(btn.value)
                    trenutni.innerHTML = display.join('');
                }

                else {
                    display.push(btn.value)
                    trenutni.innerHTML = display.join('');
                     }
            }

            if (btn.classList.contains('b')) {
                display.push(btn.value)
                trenutni.innerHTML = display.join('');
                rjesenje.innerHTML = eval(display.join(''));
            }
        }

        if (btn.id.match('backspace')) {
            display.pop();
            trenutni.innerHTML = display.join('');
            rjesenje.innerHTML = display.join('');
        }

        if (btn.id.match('jednako')) {
            trenutni.innerHTML = rjesenje.innerHTML;
            let text = rjesenje.innerHTML;
            display = text.split("");
        }
    })
})
clear.addEventListener("click", () => {
    display = [];
    rjesenje.innerHTML = "";
    trenutni.innerHTML = "";
})
