function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoForm = document.getElementById('txtAno')
    var res = document.querySelector('div#resultado')
    if (anoForm.value.length == 0 || anoForm.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var genero = ''
        var idade = ano - Number(anoForm.value)
        var sexo = document.getElementsByName('radioSexo')
        var img = document.createElement('img')
        //img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}   