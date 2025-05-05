//Fechar/Abrir Loja
document.addEventListener('DOMContentLoaded', function () {
    const botaoFechar = document.getElementById('btnFecharLoja');
    const statusLoja = document.getElementById('statusLoja');
    const textoBotao = document.getElementById('textoBotao');
    const iconeCadeado = document.getElementById('iconeCadeado');

    function atualizarBotao() {
        if (statusLoja && textoBotao && iconeCadeado) {
            const lojaAberta = statusLoja.classList.contains('aberto');

            textoBotao.textContent = lojaAberta ? 'Fechar Loja' : 'Abrir Loja';
            iconeCadeado.src = lojaAberta
                ? '../../Imagens/icone_cadeado_fechado.png'
                : '../../Imagens/icone_cadeado_aberto.png';
            iconeCadeado.alt = lojaAberta ? 'Cadeado Fechado' : 'Cadeado Aberto';
        }
    }

    if (botaoFechar) {
        atualizarBotao(); // Atualiza ao carregar

        botaoFechar.addEventListener('click', function (event) {
            event.preventDefault();

            const lojaAberta = statusLoja.classList.contains('aberto');
            const titulo = lojaAberta ? 'Fechar Loja?' : 'Abrir Loja?';
            const texto = lojaAberta
                ? 'Tem certeza de que deseja encerrar o expediente?'
                : 'Deseja abrir a loja para novos pedidos?';
            const confirmBtnText = lojaAberta ? 'Sim, fechar loja' : 'Sim, abrir loja';
            const confirmIcon = lojaAberta ? 'success' : 'info';
            const novoStatusTexto = lojaAberta ? 'Fechado' : 'Aberto';
            const novaClasse = lojaAberta ? 'fechado' : 'aberto';

            Swal.fire({
                title: titulo,
                text: texto,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#c05600',
                cancelButtonColor: '#6c757d',
                confirmButtonText: confirmBtnText,
                cancelButtonText: 'Cancelar',
                background: '#fff',
                color: '#333',
                customClass: {
                    popup: 'swal2-rounded'
                }
            }).then((result) => {
                if (result.isConfirmed && statusLoja) {
                    // Atualiza status visualmente
                    statusLoja.textContent = novoStatusTexto;
                    statusLoja.classList.remove('aberto', 'fechado');
                    statusLoja.classList.add(novaClasse);

                    // Atualiza botão
                    atualizarBotao();

                    Swal.fire({
                        title: lojaAberta ? 'Loja Fechada!' : 'Loja Aberta!',
                        text: lojaAberta
                            ? 'O expediente foi encerrado com sucesso.'
                            : 'A loja está aberta para novos pedidos.',
                        icon: confirmIcon,
                        showConfirmButton: false,
                        timer: 2040,
                        background: '#fff',
                        color: '#333',
                        customClass: {
                            popup: 'swal2-rounded'
                        }
                    });
                }
            });
        });
    }
});






//Adicionar imagem no cadastro produto
const imageInput = document.getElementById("image-input");
const uploadBtn = document.getElementById("upload-btn");
const productImage = document.getElementById("product-image");

uploadBtn.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];

    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
        alert("Formato de imagem não suportado. Use JPG, PNG, GIF ou WebP.");
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        productImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
});


