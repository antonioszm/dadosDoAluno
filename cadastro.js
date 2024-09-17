document.getElementById('cep').addEventListener('blur', function() {
  let cep = this.value.replace(/\D/g, '');

  if (cep.length === 8) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(data => {
        if (!data.erro) {
          document.getElementById('rua').value = data.logradouro;
          document.getElementById('cidade').value = data.localidade;
          document.getElementById('estado').value = data.uf;
        } else {
          alert("CEP não encontrado!");
        }
      })
      .catch(error => console.error('Erro ao buscar o CEP:', error));
  } else {
    alert("CEP inválido!");
  }
});

document.querySelector('.confirmarCadastro').addEventListener('click', function() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const serie = document.getElementById('serie').value;
  const escola = document.getElementById('escola').value;
  const materia = document.getElementById('materia').value;
  const cep = document.getElementById('cep').value;
  const rua = document.getElementById('rua').value;
  const cidade = document.getElementById('cidade').value;
  const estado = document.getElementById('estado').value;

  const usuario = {
    nome,
    idade,
    serie,
    escola,
    materia,
    endereco: {
      cep,
      rua,
      cidade,
      estado
    }
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Conta criada com sucesso!');
});