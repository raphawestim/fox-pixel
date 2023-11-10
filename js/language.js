// const whats = document.getElementById('icon-whats');
// console.log(whats);

const translations = {
  pt: {
    welcome: 'Home',
    about: 'Quem somos',
    solutions: 'Soluções',
    benefits: 'Vantagens',
    portfolio: 'Portfólio',
    FAQ: 'FAQ',
    ourSolutions: 'Nossas Soluções',
    MissionVisionValues: 'Missao, Visao & valores',
    requestQuote: 'Solicitar orçamento por email',
    talkViaWhatsapp: '<i class="fa-brands fa-whatsapp margin-right-spacing-nano"></i>Contato por Whatsapp',
    journeyOfCreation: 'Jornada de Criação',
    OurClients: 'Nossos Clientes',
    Depositions: 'Depoimentos',
    Benefits: 'Vantagens', 
    CommonQuestions: 'Perguntas frequentes',
    footer: 'Termos de Uso | Política de Privacidade 32.661.984/0001-48 – FOX PIXEL',
    design: 'Design por',
    Developed : 'Desenvolvido por',
    question1: 'oi tudo bem? como vai voce?',
    question2: 'Quanto custa o serviço da Fox Pixel?',
    question3: 'Quanto tempo leva pra produzir imagens ou vídeos 3D?',
    question4: 'Quais materiais preciso fornecer pra Fox Pixel criar uma imagem 3D?',
    question5: 'Vocês trabalham com pequenas empresas também?',
    question6: 'Por que a Fox Pixel é a melhor empresa de renderização?',
    by: 'por Rodrigo Premazzi',
    teste01: 'teste01',
    tituloSite: 'Fox Pixel - Renderização 3D',
    concept: 'Conceito por',
    number: '03.',
    // Adicione mais traduções aqui conforme necessário
  },
  en: {
    welcome: 'Welcome',
    about: 'About Us',
    solutions: 'Solutions',
    benefits: 'Benefits',
    portfolio: 'Portfolio',
    FAQ: 'FAQ',
    ourSolutions: 'Our Solutions',
    MissionVisionValues: 'Mission, Vision & Values',
    requestQuote: 'request e-mail quote',
    talkViaWhatsapp: '<i class="fa-brands fa-whatsapp margin-right-spacing-nano"></i>Contact via Whatsapp',
    journeyOfCreation: 'journey of creation',
    OurClients: 'Our clients',
    Depositions: 'Depositions',
    Benefits: 'Benefits',
    CommonQuestions: 'Common Questions',
    footer: 'Terms of Use | Privacy Policy 32.661.984/0001-48 – FOX PIXEL',
    design: 'Design by',
    Developed : 'Developed by',
    question1: 'What does a rendering company do?',
    question2: 'How much does the Fox Pixel service cost?',
    question3: 'How long does it take to produce 3D images or videos?',
    question4: 'What materials do I need to provide for Fox Pixel to create a 3D image?',
    question5: 'Do you work with small businesses too?',
    question6: 'Why is Fox Pixel the best rendering company?',
    by: 'by Rodrigo Premazzi',
    tituloSite: 'Fox Pixel - 3D Rendering',
    concept: 'Concept by',
    number: '03.',
    // Adicione mais traduções aqui conforme necessário
  },
  
};

// Função para atualizar o conteúdo do site com base no idioma selecionado
function updateContent(language) {
  const elements = document.querySelectorAll('[data-translate]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    const translation = translations[language][key];

    const numberSpan = element.querySelector('.number'); // Obtém o span com a classe "number"
    if (numberSpan) {
      numberSpan.innerHTML = translations[language]['number']; // Atualiza o número (caso esteja traduzível)
    }

    const text = (numberSpan ? numberSpan.outerHTML : '') + ' ' + translation; // Texto com número e tradução
    element.innerHTML = text; // Atualiza o conteúdo do elemento
  });
}

// Função para atualizar a imagem com base no idioma selecionado
function changeImageLanguage(language) {
  const imageElement = document.getElementById('imagemId');
  const newImageSrc = imageElement.getAttribute(`data-translate-${language}`);

  if (newImageSrc) {
    imageElement.src = newImageSrc;
  }
}



// Event listener para os botões de idioma
const languageButtons = document.querySelectorAll('.btn-language');
languageButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Obtenha o idioma do botão clicado
    const language = button.classList.contains('brazil') ? 'pt' : 'en';
    // Atualize o conteúdo do site
    changeImageLanguage(language);
    updateContent(language);
  });
});

// Inicialize o conteúdo com um idioma padrão (por exemplo, inglês)
updateContent('pt');
