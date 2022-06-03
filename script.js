const  c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

cakeJson.map((item, index) =>{

    let cakeItem = document.querySelector('.models .cake-item').cloneNode(true)

    cakeItem.setAttribute('data-key',index)

    //pegando o NOME do bolo
    cakeItem.querySelector('.cake-item--name').innerHTML = item.name

    //DESCRIÇÃO
    cakeItem.querySelector('.cake-item--desc').innerHTML = item.description

    //Preço
    cakeItem.querySelector('.cake-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`

    //IMAGEM
    cakeItem.querySelector('.cake-item--img img').src = item.img

    c('.cake-area').append(cakeItem)

    //FAZR A JANELINHA APARECER

    cakeItem.querySelector('a').addEventListener('click',(e) =>{
        e.preventDefault()

        let key = e.target.closest('.cake-item').getAttribute('data-key')
       
        //PEGAR O NOME DO BOLO
        c('.cakeInfo h1').innerHTML = cakeJson[key].name
        //FAZER A IMAGEM,DESCRIÇÃO E PREÇO
        c('.cakeInfo--desc').innerHTML = cakeJson[key].description
        c('.cakeInfo--actualPrice').innerHTML = `R$ ${cakeJson[key].price.toFixed(2)}`
        c('.cakeBig img').src = cakeJson[key].img

        //FAZER OS TAMANHOS DOS BOLOS
        cs('.cakeInfo--size').forEach((size,sizeIndex)=>{

         size.querySelector('span').innerHTML = cakeJson[key].sizes[sizeIndex]
        
        })     


        c('.cakeWindowArea').style.opacity = 0
    
        c('.cakeWindowArea').style.display = 'flex'

        setTimeout(()=>{
            c('.cakeWindowArea').style.opacity = 1
        },200 )
    })
})
function closeModal() {
    c('.cakeWindowArea').style.opacity = 0
    setTimeout(()=>{
        c('.cakeWindowArea').style.display = 'none'
    }, 500)
}

cs('.cakeInfo--cancelButton, .cakeInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal)
})

//FAZER A QUANTIDADE
c('.cakeInfo--qtmenos').addEventListener('click',()=>{
    if(Qt > 1){
        Qt--
        c('.cakeInfo--qt').innerHTML = Qt
    }
})

c('.cakeInfo--qtmais').addEventListener('click',()=>{
    Qt++
    c('.cakeInfo--qt').innerHTML = Qt
})