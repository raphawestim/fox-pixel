const translations = {
  pt: {
    welcome: 'Home',
    about: 'Quem somos',
    solutions: 'Soluções',
    benefits: 'Vantagens',
    portfolio: 'Portfólio',
    FAQ: 'FAQ',
    // Adicione mais traduções aqui conforme necessário
  },
  en: {
    welcome: 'Welcome',
    about: 'About Us',
    solutions: 'Solutions',
    benefits: 'Benefits',
    portfolio: 'Portfolio',
    FAQ: 'FAQ',
    // Adicione mais traduções aqui conforme necessário
  },
  
};

// Função para atualizar o conteúdo do site com base no idioma selecionado
function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key];
  });
}

// Event listener para os botões de idioma
const languageButtons = document.querySelectorAll('.btn-language');
languageButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Obtenha o idioma do botão clicado
    const language = button.classList.contains('brazil') ? 'pt' : 'en';
    // Atualize o conteúdo do site
    updateContent(language);
  });
});

// Inicialize o conteúdo com um idioma padrão (por exemplo, inglês)
updateContent('pt');