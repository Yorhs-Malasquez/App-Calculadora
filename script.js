const display = document.querySelector('#display-num');
const buttons = document.querySelectorAll('.btn-calc');


buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonPress = boton.textContent;
        console.log(botonPress);
        if (boton.id === "btn-reset") {
            display.textContent = "0";
            return;
        }

        if (boton.id === "btn-del") {
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            }else{
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }
        if (boton.id === "btn-igual") {
            //evaluando las funciones matematicas
            try {
                display.textContent = eval(display.textContent);
            
            } catch  {
                display.textContent = "Error!";
            }
            return;
        }
        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = botonPress;
        } else {
            display.textContent += botonPress
        }
    })
})
