// formulario.js

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const cnpjError = document.getElementById('cnpj-error');
    const telefoneError = document.getElementById('telefone-error');
    const mensagemError = document.getElementById('mensagem-error');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio do formulário para validar

        // Limpa mensagens de erro e de sucesso anteriores
        cnpjError.textContent = '';
        telefoneError.textContent = '';
        mensagemError.textContent = '';
        successMessage.textContent = '';

        // Valida CNPJ
        const cnpj = document.getElementById('cnpj').value;
        if (!validarCNPJ(cnpj)) {
            cnpjError.textContent = 'CNPJ inválido.';
            return;
        }

        // Valida Telefone
        const telefone = document.getElementById('telefone').value;
        if (!validarTelefone(telefone)) {
            telefoneError.textContent = 'Telefone inválido.';
            return;
        }

        // Valida Mensagem
        const mensagem = document.getElementById('mensagem').value;
        if (mensagem.trim() === '') {
            mensagemError.textContent = 'Mensagem não pode estar vazia.';
            return;
        }

        // Se todas as validações passarem
        successMessage.textContent = 'Formulário enviado com sucesso!';
        successMessage.style.color = 'green';
        form.reset(); // Opcional: Limpa o formulário após o envio
    });

    // Função de validação de CNPJ (exemplo básico)
    function validarCNPJ(cnpj) {
        // Implementar validação real de CNPJ aqui
        return cnpj.length === 14; // Exemplo simplificado
    }

    // Função de validação de Telefone (exemplo básico)
    function validarTelefone(telefone) {
        // Implementar validação real de telefone aqui
        return telefone.length >= 10; // Exemplo simplificado
    }
});
