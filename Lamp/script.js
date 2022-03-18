let body=document.getElementById(`body`)
let divtudo=document.createElement('div')
let divbotao=document.createElement('div')
let chave=document.createElement('img')
chave.setAttribute('src','Imagens/inte.png' )
chave.setAttribute('id','chave')
let lamp=document.createElement('img')
lamp.setAttribute('src', 'Imagens/desligada.png')
let divL=document.createElement('div')
divL.append(lamp)
divbotao.append(chave)
divtudo.append(divL)
divtudo.append(divbotao)
body.append(divtudo)
chave.style.height=`120px`
body.style.backgroundColor="black"
body.style.margin=`40px`
divL.style.display=`flex`
divL.style.justifyContent=`center`
divbotao.style.display=`flex`
divbotao.style.justifyContent=`left`
document.getElementById('chave').onclick=function(){
    if(lamp.src.match('Imagens/desligada.png')){
        lamp.src='Imagens/ligada.png'
        chave.src='Imagens/inte2.png'
        body.style.backgroundColor="white"
    }
    else{
        lamp.src='Imagens/desligada.png'
        chave.src='Imagens/inte.png'
        body.style.backgroundColor="black"
    }
}