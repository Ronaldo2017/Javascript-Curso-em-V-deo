function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        alert('[ERRO] Verifique os dados e  tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else{
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    }
}