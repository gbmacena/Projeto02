let tot = 0
let som = 0
let totQuant = 0
const price = document.getElementById('price')
const quant = document.getElementById('quant')
const allResuts = document.getElementById('all-results')
const newButton = document.getElementById('new-button')
const sucessText = document.getElementById('sucessText')
const newError = document.getElementById('error-text')
const newText = document.createElement('p')
const errorText = document.createElement('p')




const result1 = document.createElement('p')
const result2 = document.createElement('p')

allResuts.appendChild(result1)
allResuts.appendChild(result2)
result1.id = 'result1'
result2.id = 'result2'

document.getElementById('btn').addEventListener('click' , function(ev){
    ev.preventDefault
    newText.textContent = ''
    let som = (price.value) * (quant.value)
    tot += som
    totQuant += Number(quant.value) 
    if (totQuant == 0 || price.value == '') {
        errorText.textContent = 'Preencha os campos'
        errorText.id = 'errorText'
        newError.appendChild(errorText)
    } else{
        errorText.textContent = ''
        result1.textContent = 'Total: R$ ' + (tot.toFixed(2)) + (' Reais')
        result2.textContent = 'Produtos: ' + (totQuant)
        if(!document.getElementById('clean-button')) {
            const cleanButton = document.createElement('button')
            cleanButton.id = 'clean-button'
            cleanButton.innerText = "Limpar"
            newButton.appendChild(cleanButton)
        }
    }
    
    const cleanButton = document.getElementById('clean-button').addEventListener('click' , function(ev){
        ev.preventDefault
        newText.textContent = 'Compras limpas com sucesso!'
        newText.id = 'clean-text'
        sucessText.appendChild(newText)
        result1.textContent = ''
        result2.textContent = ''
        errorText.textContent = ''
        tot = 0
        totQuant = 0
        price.value = ''
        quant.value = ''
        
        })
        price.value = ''
        quant.value = ''
    })
try {
    sucessText.removeChild(newText)
} catch (error) {
}