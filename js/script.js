document.getElementById('buscar').addEventListener('click', async() =>{
const cep = document.getElementById('cep').value;
const resultDiv = document.getElementById('resultado');

if(cep.length === 8){
    try{
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(!response.ok){
            throw new Error('Falha na requisição'+ response.status);
        }

        if(!data.erro){
            resultDiv.innerHTML = `
            <p> Endereço: ${data.logradouro}</p>
            <p> Bairro: ${data.bairro}</p>
            <p> Cidade: ${data.localidade}</p>
            <p> Estado: ${data.uf}</p>
            `;

        } else {
            resultDiv.innerHTML = `<p> CEP não encontrado </p>`;
        }

    } catch(error){
    resultDiv.innerHTML = `<p> Erro ao buscar o CEP.</p>`;
    console.error('Erro:', error);
    }
}else {
    resultDiv.innerHTML = `<p> Por favor, digite um CEP válido. </p>`;
}


});

