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
    talkViaWhatsapp: `falar por whatsapp`,
    journeyOfCreation: 'Jornada de Criação',
    OurClients: 'Nossos Clientes',
    Depositions: 'Depoimentos',
    Benefits: 'Vantagens', 
    CommonQuestions: 'Perguntas frequentes',
    footer: 'Termos de Uso | Política de Privacidade 32.661.984/0001-48 – FOX PIXEL',
    design: 'Design por',
    Developed : 'Desenvolvido por',
    question1: 'O que faz uma empresa de renderização?',
    question2: 'Quanto custa o serviço da Fox Pixel?',
    question3: 'Quanto tempo leva pra produzir imagens ou vídeos 3D?',
    question4: 'Quais materiais preciso fornecer pra Fox Pixel criar uma imagem 3D?',
    question5: 'Vocês trabalham com pequenas empresas também?',
    question6: 'Por que a Fox Pixel é a melhor empresa de renderização?',
    by: 'por Rodrigo Premazzi',
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
    requestQuote: 'request quote',
    talkViaWhatsapp: 'Talk via Whatsapp',
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
    // Adicione mais traduções aqui conforme necessário
  },
  
};

const iconWhatsapp = document.querySelector('.icon-whatsapp');

//Função para atualizar o conteúdo do site com base no idioma selecionado
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