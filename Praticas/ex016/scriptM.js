function contar() {
    var cont = document.getElementById('txtcont')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('#res')

    if (cont.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Impossível contar!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(cont.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }            
            
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }
}