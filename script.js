const additem = document.getElementById('additem')
const iteminput = document.getElementById('itemcliente')
const itemlist = document.getElementById('listaitem')

function adicionar() {

    const item = iteminput.value.trim()

    if (iteminput.value === '') {
        alert("Insira os dados")
        return
    }



    const novoitem = document.createElement('li')
    novoitem.textContent = item

    itemlist.appendChild(novoitem)

    iteminput.value = ''

    const removeButton = document.createElement('button')
    removeButton.textContent = '🗑️'
    removeButton.className = 'remove'
    removeButton.onclick = function () {
        itemlist.removeChild(novoitem)
    }

    novoitem.appendChild(removeButton)


    iteminput.value = ''

}

additem.addEventListener('click', adicionar)

