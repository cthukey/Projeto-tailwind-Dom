let form = document.querySelector('form')
let ul = document.querySelector('ul')


form.onsubmit = (e)=>{
    e.preventDefault()
    let myValue = document.querySelector('input')
    let res = myValue.value

    if(res == " ") return

    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 
    hover:text-sky-900 border-b last:border-none border-gray-200 
    transition-all duration-300 ease-in-out flex justify-between">
    <span>${res}</span><button class="text-red-700 delete">ⅹ</button></li>`


    myValue.value = " "
}

ul.onclick = (e)=>{
    if(e.target.classList.contains('delete')){
        if(confirm('Deseja deletar esse item')){
            e.target.parentElement.remove()
        }
    }
}