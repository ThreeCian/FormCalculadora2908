const number1 = document.getElementById('num1')

const number2 = document.getElementById('num2')

let resul = document.getElementById('resul')



function operador(ope) {

    switch (ope) {
        case "suma":
            resul.textContent = number1.valueAsNumber + number2.valueAsNumber

            break;

        case "resta":
            resul.textContent = number1.valueAsNumber - number2.valueAsNumber

            break;

        case "por":
            resul.textContent = number1.valueAsNumber * number2.valueAsNumber

            break;

        default:
            resul.textContent = number1.valueAsNumber / number2.valueAsNumber

            break;



    }
}