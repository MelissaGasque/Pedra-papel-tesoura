let res = document.getElementById(`resultado`)
let vd = document.getElementById(`vd`)
let imagem = document.getElementById(`foto`)
    function papel(){
        var n =Math.random()*(3)
        if(n<1){
            res.innerHTML=(`Voce escolheu Papel e o adversário escolheu Pedra!`)
            vd.innerHTML=(`😍GANHOU!💃 🕺`)
            imagem.innerHTML= "<img src='pedra.jpg'/>"  
        }    
        if(n>1 & n<2){
            res.innerHTML=(`Voce escolheu Papel e o adversário escolheu Papel!`)
            vd.innerHTML=(`Empate!💅`)
            imagem.innerHTML= "<img src='papel.jpg'/>"  
        }
        if(n>2 & n<3){
            res.innerHTML=(`Voce escolheu Papel e o adversário escolheu Tesoura!`)
            vd.innerHTML=( `Perdeu 💩` )
            imagem.innerHTML= "<img src='tesoura.jpg'/>" 
        }
    }
    function tesoura(){
        var n =Math.random()*(3)
        if(n<1){
            res.innerHTML=(`Voce escolheu Tesoura e o adversário escolheu Pedra!`)
            vd.innerHTML=( `Perdeu 💩`)
            imagem.innerHTML= "<img src='pedra.jpg'/>" 
        }    
        if(n>1 & n<2){
            res.innerHTML=(`Voce escolheu Tesoura e o adversário escolheu Papel!`)
            vd.innerHTML=(`😍GANHOU!💃 🕺`)
            imagem.innerHTML= "<img src='papel.jpg'/>" 
        }
        if(n>2 & n<3){
            res.innerHTML=(`Voce escolheu Tesoura e o adversário escolheu Tesoura!`)
            vd.innerHTML=( `Empate!💅` )
            imagem.innerHTML= "<img src='tesoura.jpg'/>" 
        }
        
    }
    function pedra(){
        var n =Math.random()*(3)
        if(n<1){
            res.innerHTML=(`Voce escolheu Pedra e o adversário escolheu Pedra!`)
            vd.innerHTML=(`Empate!💅`)
            imagem.innerHTML= "<img src='pedra.jpg'/>" 
        }    
        if(n>1 & n<2){
            res.innerHTML=(`Voce escolheu Pedra e o adversário escolheu Papel!`)
            vd.innerHTML=(`Perdeu 💩`)
            imagem.innerHTML= "<img src='papel.jpg'/>" 
        }
        if(n>2 & n<3){
            res.innerHTML=(`Voce escolheu Pedra e o adversário escolheu Tesoura!`)
            vd.innerHTML=( `😍GANHOU!💃 🕺`)
            imagem.innerHTML= "<img src='tesoura.jpg'/>" 
            }
    }
