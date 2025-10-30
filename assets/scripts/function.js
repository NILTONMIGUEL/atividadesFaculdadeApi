const btn = document.getElementById('cadastrar');
btn.addEventListener('click',function(e){
    e.preventDefault();

    const cepInput= document.getElementById('cep').value;
    const cep = cepInput.value;
    console.log(cep);
})