const resultScreen = document.getElementById('input');
const allBtn = document.querySelectorAll('.btn');
const removeOne = document.querySelector('.removeOneBtn');
const clearBtn = document.querySelector('.clearBtn');
const equalBtn = document.querySelector('.equalBtn');

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', () => {
        resultScreen.value += allBtn[i].innerHTML;
    })
}

removeOne.addEventListener('click', () => {
    resultScreen.value = resultScreen.value.slice(0, (resultScreen.value.length - 1))
})

clearBtn.addEventListener('click', () => {
    resultScreen.value = ''
})

equalBtn.addEventListener('click', () => {
    const result = eval(resultScreen.value);
    resultScreen.value = result;
})


