const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculatorKeys')
const display = document.querySelector('.calculatorDisplay')



keys.addEventListener('click', event => {
    const key = event.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
  if (event.target.matches('button')) {
    
     // Remove .is-depressed class from all keys
     
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        
        key.classList.add('is-depressed')
        calculator.dataset.previousKeyType = 'operator'
      }

      Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
      
      
    
      }
    
    //   If the key’s data-action is decimal, we know the user clicked on the decimal key.
        if (action === 'decimal') {
        console.log('decimal key!')
        display.textContent = displayedNum + '.'
        }


        if (action === 'clear') {
            console.log('clear key!')
            display.textContent = '0'
        }
        
        if (action === 'calculate') {
            console.log('equal key!')

            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            display.textContent = calculate(firstValue, operator, secondValue)
            

            

        }
    
  
  
  if (!action) {
    if (displayedNum === '0') {
      display.textContent = keyContent
    } else {
      display.textContent = displayedNum + keyContent
    }
  }


  
})


const calculate = (firstValue, operator, secondValue) => {
    const firstNum = parseFloat(firstValue)
    const secondNum = parseFloat(secondValue)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
}

