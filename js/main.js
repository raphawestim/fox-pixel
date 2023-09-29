function scrollVisibleWeb(){
  const sections = document.querySelectorAll(".item-conteudo");
  console.log(sections);

  if(sections.length){
      const windowMetade = window.innerHeight * 0.7;
      console.log(sections);

      function animaScroll(){
          sections.forEach((section) => {
              const sectionTop = section.getBoundingClientRect().top;
              const isSectionVisible = sectionTop - windowMetade < 0;
              //console.log(sectionTop)
              
              if(isSectionVisible){
                  section.classList.add('ativo');
              }else{
                  section.classList.remove('ativo');
              }
          });
      }

      animaScroll();

      window.addEventListener('scroll', animaScroll)
  }
};

const menuMobile = document.querySelector('#menu-mobile');

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

// const email = document.getElementById('botaoEmail');
// console.log(email);

// email.addEventListener('click', () => {

//   const email  = 'contato@foxpixel.com.br';
//   const assunto = 'Solicitar Orçamento';
//   const corpo = 'Olá, gostaria de fazer um orçamento';

//   const linkEmail = `mailto:${email}?subject=${assunto}&body=${corpo}`;

//   window.location.href = linkEmail;
// });



// Função para verificar se uma seção está visível na janela de visualização
function isSectionVisible(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }
    return false;
  }
  
  // Função para atualizar a classe "active-menu" com base na posição da página
  function updateActiveMenuItem() {
    const menuItems = document.querySelectorAll('#nav-menu-site li');
    menuItems.forEach((menuItem) => {
      const sectionId = menuItem.querySelector('a').getAttribute('href');
      if (isSectionVisible(sectionId)) {
        menuItem.classList.add('active-menu');
      } else {
        menuItem.classList.remove('active-menu');
      }
    });
  }
  
  // Adicione um ouvinte de evento de rolagem para atualizar o menu ativo
  window.addEventListener('scroll', updateActiveMenuItem);
  
  // Chame a função inicialmente para definir o menu ativo na carga da página
  updateActiveMenuItem();

  // Função para adicionar a classe "hover-active" quando o item de menu estiver em estado "hover"
function addHoverActiveClass() {
    const menuItems = document.querySelectorAll('#nav-menu-site li');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('mouseenter', () => {
        menuItem.classList.add('hover-active');
      });
  
      menuItem.addEventListener('mouseleave', () => {
        menuItem.classList.remove('hover-active');
      });
    });
  }
  
  // Chame a função para adicionar a classe "hover-active"
  addHoverActiveClass();

// Função para verificar se uma seção está visível na janela de visualização
  scrollVisibleWeb();