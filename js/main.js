const menuMobile = document.querySelector('#menu-mobile');
console.log(menuMobile);

menuMobile.addEventListener('click', () => {
    const menu = document.querySelector('#nav-menu-site');
    
    // Verifica se a classe 'ativo' está presente no menu
    if (menu.classList.contains('ativo')) {
      // Se estiver presente, remove a classe para fechar o menu
      menu.classList.remove('ativo');
  } else {
      // Se não estiver presente, adiciona a classe para abrir o menu
      menu.classList.add('ativo');
  }

})

const whatsappButton = document.getElementById('whatsappButton');

        whatsappButton.addEventListener('click', () => {
            // Substitua 'SEU_NUMERO' pelo número de telefone internacional desejado
            const numeroTelefone = '+5511980614711';

            // Cria o link do WhatsApp com o número de telefone
            const linkWhatsApp = `https://wa.me//${numeroTelefone}?text=Olá%20gostaria%20de%20fazer%20um%20orçamento`;

            // Redireciona para o WhatsApp
            window.open(linkWhatsApp, '_blank');
        });