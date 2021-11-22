//Função para impedir que o usuário digite um valor indesejado.
//Para usar, basta importar este arquivo no Html e adicionar um "onKeypress = return limitcarc(event, TIPO)" ao input desejado.
//O parâmetro TIPO deve ser preenchido com:

//letr_acent - Para letras com acentos
//num - Para números
//letr - Para letras sem acentos

function limitcarc(e, tipo) {
    var chr = String.fromCharCode(e.which);
    if (tipo == 'letr_acent'){
        if ("áéíóúâêîôûãõ qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
          return false;
    }else if (tipo == 'num') {
        if ("0123456789".indexOf(chr) < 0)
          return false;
    }else if (tipo == 'letr'){
        if ("qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM".indexOf(chr) < 0)
          return false;
    }
}
