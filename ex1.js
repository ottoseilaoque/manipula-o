//  ex1
//  let forma = document.getElementById('forma')
// forma.addEventListener('click',function(){
//     if(forma.style.backgroundColor == 'red'){
//         forma.style.backgroundColor = 'black'
//     } else {
//         forma.style.backgroundColor = 'red'
//     }
    
    
// })

// let forma2 = document.getElementById('forma2')
// forma2.addEventListener('click',function(){
//     if(forma2.style.backgroundColor == 'blue'){
//         forma2.style.backgroundColor = 'gray'
//     } else {
//         forma2.style.backgroundColor = 'blue'
//     }
    
// })
// let forma3 = document.getElementById('forma3')
// forma3.addEventListener('click',function(){
//     if(forma3.style.backgroundColor == 'green'){
//         forma3.style.backgroundColor = 'purple'
//     } else {
//         forma3.style.backgroundColor = 'green'
//     }
    
// })
//ex2
// let clicar = document.getElementById('clicar')
// let contador = document.getElementById('contador')
// let zerrar = document.getElementById('excluir')

// let contagem = 0

// clicar.addEventListener('click',function(){
//     contagem = contagem + 1
//     contador.innerText = contagem
// })
// zerrar.addEventListener('click',function(){
//    contagem = 0
//    contador.innerText = contagem
// }) 
//ex3
// let mensagem = document.getElementById('mensagem')
// let exibir = document.getElementById('exibir')
// let ocultar = document.getElementById('ocultar')
 
// mensagem.style.display = 'none'

 
// exibir.addEventListener('click', function(){
//     mensagem.style.display = 'inline'
// })
 
// ocultar.addEventListener('click', function(){
//     mensagem.style.display = 'none'
// })
//ex4
// let botao = document.getElementById("botao")
// let texto = document.getElementById("texto")

// botao.addEventListener('click',function(){
//     let textoNovo= prompt("Me diga uma frase nova: ")
    
//     texto.innerText = textoNovo
// })
// ex5
// let texto = document.getElementById('texto')
 
// document.addEventListener('keydown', function(event){
 
//     texto.innerText = `Você digitou a tecla: ${event.key}`
// })
//ex6
// let votar = document.getElementById("votar")
// let imagemG = document.getElementById("generico")

// document.addEventListener("click",function(){
//     let pergunta = Number(prompt("Em qual canidato você quer votar: \n(12)Vitugo \n(21)Otto\n(8)Arnold \n(24)Arthur Juwer"))
//    switch (pergunta) {
//         case 12:
//             let confirmar1 = prompt("Você deseja confirmar seu voto no candidato vitugo: (S/N)")
//             if (confirmar1 == 'S'){
//                 alert("Você votou no candidato vitugo")  
//                 imagemG.setAttribute('src', '/Imagens/Image (5).jpg') 
//             }
//             else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//         }
//         break
//         case 21:
//         let confirmar2 = prompt("Você deseja confirmar seu voto no candidato Otto: (S/N)")
//         if(confirmar2 == 'S'){
//             alert("Você votou no candidato Otto")
//             imagemG.setAttribute('src', '/Imagens/Image (6).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 8:
//         let confirmar3 = prompt("Você deseja confirmar seu voto no candidato Arnold: (S/N)")
//         if(confirmar3 == 'S'){
//             alert("Você votou no candidato Arnold")
//             imagemG.setAttribute('src', '/Imagens/Image (7).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 24:
//         let confirmar4 = prompt("Você deseja confirmar seu voto no candidato Arthur Juwer: (S/N)")
//         if(confirmar4 == 'S'){
//             alert("Você votou no candidato Arthur Juwer")
//             imagemG.setAttribute('src', '/Imagens/Image (8).jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//         break
//             case 69:
//                 alert("Você descobriu o candidato secreto Cidade")
//         let confirmar5 = prompt("Você deseja confirmar seu voto no candidato secreto Cidade: (S/N)")
//         if(confirmar5 == 'S'){
//             alert("Você votou no candidato secreto Cidade")
//             imagemG.setAttribute('src', '/Imagens/Cidade.jpg') 
//         }    
//         else{
//             alert("Reinicie a pagina e escolha outro candidato")    
//             }
//             break

//    }
    
    
// }) 