//queryElements
const board = document.querySelector('.board');
const loading = document.querySelector('.loading');
const enviar = document.querySelector('.enviar');
const enviadocomsucesso = document.querySelector('.enviadocomsucesso');
const avisoq = document.querySelector('.aviso');

//IdElements
const email = document.getElementById('email');
const nome = document.getElementById('nomebox1')
const aviso = document.getElementById('aviso');
const pass = document.getElementById('inputsenha');

const select = document.getElementById('selectholder');
const controle = false
//Func


/*  
minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10,
 pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }


*/
//consts




function validadoresemailnome() {
    if (validator.isEmail(email.value) && validator.contains(nome.value) && validator.isStrongPassword(pass.value) && validator.contains(select.value)) {
        sendemail()

    } else {
        alerta()
    }
}


function teste() {
    console.log(validadoresemailnome())
}










function alerta() {
    aviso.innerHTML = 'Um ou mais campos obrigatórios estão incorretos ou vazios!'
    avisoq.style.fontSize = '15px'
    avisoq.style.animation = 'blink 1s steps(2, start) infinite'
    avisoq.style.color = 'red'

    setTimeout(() => {
        aviso.innerHTML = 'As opções com <b class="asterisco">*</b> são obrigatórias'
        avisoq.style.fontSize = '10px'
        avisoq.style.color = 'black'
        avisoq.style.animation = 'none'
    }




        , 2900)

}

function sendemail() {

    enviar.style.display = 'none'
    loading.style.display = 'block'
    function posloading() {
        loading.style.display = 'none'
        board.style.display = 'none'
        enviadocomsucesso.style.display = 'block'
        enviar.style.display = 'block'

    }

    setTimeout(posloading, 2000)


}

function voltar() {
    enviadocomsucesso.style.display = 'none'
    board.style.display = 'block'

}