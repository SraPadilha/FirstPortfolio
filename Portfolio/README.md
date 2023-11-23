# Vamos a parte mais explicativa...ou muita leitura e chatisse para alguns. (não julgo porque em alguns casos essa sou eu).
Antes de me julgar sobre as edições de imagem as que eu fiz foi apenas utilizando o paint porque estou sem photoshop. É isto que 
tinha disponível. 
#MENU

    // Função para escrever o título na classe '.iniciop'
    function writeTitle() {
        // Função interna para animar as letras
        function activeWorld(element) {
            // Divide o texto em letras e armazena em um array
            const arrText = element.innerHTML.split('');
            // Limpa o conteúdo do elemento
            element.innerHTML = '';
            // Retorna uma Promise que resolve quando a animação está concluída
            return new Promise((resolve) => {
                arrText.forEach((letra, i) => {
                    // Adiciona cada letra com um atraso
                    setTimeout(() => {
                        element.innerHTML += letra;
                        // Verifica se é a última letra para resolver a Promise
                        if (i === arrText.length - 1) {
                            resolve();
                        }
                    }, 75 * i);
                });
            });
        }
      // Seleciona o elemento com a classe '.iniciop'
      const title = document.querySelector('.iniciop');
      // Chama a função de animação e retorna a Promise resultante
      return activeWorld(title);
      }
    
    // Função para escrever o título na classe '.inicios'
    function writeTitle2() {
        // Função interna para animar as letras
        function activeWorld(element) {
            // Divide o texto em letras e armazena em um array
            const arrText = element.innerHTML.split('');
            // Limpa o conteúdo do elemento
            element.innerHTML = '';
            // Retorna uma Promise que resolve quando a animação está concluída
            return new Promise((resolve) => {
                arrText.forEach((letra, i) => {
                    // Adiciona cada letra com um atraso
                    setTimeout(() => {
                        element.innerHTML += letra;
                        // Verifica se é a última letra para resolver a Promise
                        if (i === arrText.length - 1) {
                            resolve();
                        }
                    }, 75 * i);
                });
            });
        }

    // Seleciona os elementos com as classes '.inicios' e '.iniciop'
    const title = document.querySelector('.inicios');
    const firstTitle = document.querySelector('.iniciop');

    // Remove a classe 'hidden' do elemento com a classe '.inicios'
    title.classList.remove('hidden');
    // Chama a função de animação para '.inicios'
    activeWorld(title);
}

    /* MENU FUNCIONAL */
    document.addEventListener('DOMContentLoaded', function() {
        // Seleciona todos os links dentro de '.naveg-primaria'
        const links = document.querySelectorAll('.naveg-primaria a');

    // Adiciona um ouvinte de evento de clique a cada link
    links.forEach(link => {
        link.addEventListener('click', scrollSmooth);
    });

    // Função para rolar suavemente para a seção correspondente ao link clicado
    function scrollSmooth(e) {
        e.preventDefault();

        // Obtém o ID da seção alvo a partir do atributo 'href'
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Se a seção alvo existir, rola suavemente até ela
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
    });
  
    // Função para iniciar as animações
    function startAnimations() {
        // Chama a função de escrever título e, quando concluída, chama a função para '.inicios'
        writeTitle().then(() => {
            writeTitle2();
        });
    }
    
    // Adiciona um ouvinte de evento para iniciar as animações quando o conteúdo HTML estiver completamente carregado
    document.addEventListener('DOMContentLoaded', function() {
        startAnimations();
    });




![Captura de tela 2023-11-23 003052](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/d2b33dfc-a417-481f-8649-f48a1c487fcd)


#CARTA DE APRESENTAÇÃO

![Captura de tela 2023-11-23 004442](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/139dc589-2ec5-43b3-b452-5f475a08d853)

#CONTATOS
eu sei que não precisa colocar tanta informação, mas quis colocar mesmo assim. Fica de todo modo aqui registrado que tenho conhecimento dos meus
excessos.
![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/411a7fd7-dfbf-48bf-a61d-76fa55292061)

#QUALIFICAÇÕES 

![Captura de tela 2023-11-23 005535](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/210160eb-484c-4b18-b920-f741bd1b16e2)

#HISTORICO | TIME LINE
okay, isso deu trabalho. Eu não conseguia encontrar nenhum modelo que me agradava. Os que eu fazia não parecia estar suficiente, na net 
a maioria do pessoal ensina a fazer vertical. Mas após muitas mudanças achei que essa ficou okay e em detalhe essa decisão foi de última hora.
Aqui não foi só html e css, precisei colocar um pouco de javascript.

    // Para aguardar até que o  HTML esteja completamente carregado
     document.addEventListener('DOMContentLoaded', function() {
   
    // Seleciona todos os elementos com a classe 'step' e os armazena na variável 'steps'
    var steps = document.querySelectorAll('.step');

    // Seleciona o elemento com o ID 'line-progress' e o armazena na variável 'lineProgress'
    var lineProgress = document.getElementById('line-progress');

    // Seleciona todos os elementos com a classe 'section-content' e os armazena na variável 'contents'
    var contents = document.querySelectorAll('.section-content');

    // Itera sobre todos os elementos da classe 'step'
    steps.forEach(function(step, index) {

        // Adiciona um ouvinte de evento de clique a cada elemento 'step'
        step.addEventListener('click', function() {
            
            // Itera sobre todos os elementos 'step' novamente
            steps.forEach(function(s, i) {

                // Adiciona a classe 'active' a cada elemento 'step' anterior ou igual ao índice atual
                if (i <= index) {
                    s.classList.add('active');
                } else {

                    // Remove a classe 'active' dos elementos 'step' após o índice atual
                    s.classList.remove('active');
                }
            });

            // Calcula a largura da barra de progresso com base no índice do elemento 'step'
            var width = (index + 1) * 25;

            // Atualiza a largura da barra de progresso no DOM para refletir o progresso atual
            lineProgress.style.width = width + '%';

            // Itera sobre todos os elementos 'section-content'
            contents.forEach(function(content, i) {

                // Adiciona a classe 'active' ao conteúdo associado ao índice atual
                if (i === index) {
                    content.classList.add('active');
                } else {

                    // Remove a classe 'active' de outros conteúdos
                    content.classList.remove('active');
                }
            });
        });
    });
    });



![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/5c18c350-cb34-4097-ba79-c208247014b1)

#HISTORICO| FORMAÇÃO E XP
Animação basica para ficar passando a cada 5segundos. Nem parece que essa parte foi a que mais me tirou o sono.
A parte boa é que se um estivesse funcionando era só copiar igual no outro... teoricamente. BEM TEORICAMENTE.


    function aboutMe() {
        // Seleciona elementos HTML relevantes para experiência e educação
        const divExperiencia = document.querySelectorAll('.xp_conteudo div');
        const liExperiencia = document.querySelectorAll('.xp_conteudo ul li');
        const divEducacao = document.querySelectorAll('.educ_conteudo div');
        const liEducacao = document.querySelectorAll('.educ_conteudo ul li');
  
    // Adiciona a classe 'ativo' ao primeiro elemento de experiência e educação
    divExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');
  
    // Inicializa índices para controle de slides
    let experienciaIndex = 0;
    let educacaoIndex = 0;
    let slideInterval; 
  
    // Função para mostrar slides de experiência
    function slideShow() {
        // Remove a classe 'ativo' de todos os elementos
        divExperiencia.forEach((div) => {
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        // Adiciona a classe 'ativo' ao próximo elemento
        divExperiencia[experienciaIndex].classList.add('ativo');
        liExperiencia[experienciaIndex].classList.add('ativo');
        // Atualiza o índice para o próximo slide
        experienciaIndex = (experienciaIndex + 1) % divExperiencia.length;
    }
  
    // Função para mostrar slides de educação
    function slideShow2() {
        // Remove a classe 'ativo' de todos os elementos
        divEducacao.forEach((div) => {
            div.classList.remove('ativo');
        });
        liEducacao.forEach((botao) => {
            botao.classList.remove('ativo');
        });
        // Adiciona a classe 'ativo' ao próximo elemento
        divEducacao[educacaoIndex].classList.add('ativo');
        liEducacao[educacaoIndex].classList.add('ativo');
        // Atualiza o índice para o próximo slide
        educacaoIndex = (educacaoIndex + 1) % divEducacao.length;
  
        // Para o intervalo atual e inicia um novo
        stopSlideInterval();
        startSlideInterval(); 
    }
  
    // Função para iniciar o intervalo de slides
    function startSlideInterval() {
        slideInterval = setInterval(slideShow, 5000);
        slideInterval2 = setInterval(slideShow2, 5000);
    }
  
    // Função para parar o intervalo de slides
    function stopSlideInterval() {
        clearInterval(slideInterval);
        clearInterval(slideInterval2);
    }
  
    // Adiciona ouvintes de eventos aos botões de experiência
    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow(index);
            stopSlideInterval();
        });
    });
  
    // Adiciona ouvintes de eventos aos botões de educação
    liEducacao.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShow2(index);
        });
    });
  
    // Inicia o intervalo de slides
    startSlideInterval();
    }
    
    // Aguarda o carregamento completo da página e, em seguida, chama a função aboutMe
    window.addEventListener('load', aboutMe);
    // Chama a função aboutMe imediatamente após o carregamento do script
    aboutMe();
    
    // Adiciona um ouvinte de evento ao carregamento DOM e chama a função showList com o argumento 'listAll'
    document.addEventListener('DOMContentLoaded', () => {
        showList(listAll);
    });


![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/074c9b37-c836-4789-b061-b4f680e5650f)


#PROJETINS 
Agora que já chorei e minha mãe não viu, ta tudo certo. Adicionei os projetos que já tenho e algumas alternativas para aqueles que ainda
não finalizei.
Essa parte incluisve ficou bem mais ou menos, tive muita dificuldade no css e chegou um ponto que deixei nas mãos de Deus. Como é 
responsabilidade minha ficou mais ou menos mesmo. Muito trabalho, lagrimas, raiva e nenhuma solução. Antes que eu me esqueça,
o gatinho no final é da crunchyroll.

    // Seleciona todos os itens de projeto
    const listAll = document.querySelectorAll('.projects_storage ul li');
    
    // Seleciona todos os botões no modelo de projeto
    const buttomGeral = document.querySelectorAll('.projects_models ul li');
    
    // Função para remover a classe 'active' de todos os botões, exceto o botão no índice especificado
    function removeClick(index) {
        buttomGeral.forEach((item) => {
            item.classList.remove('active');
        });
        buttomGeral[index].classList.add('active');
    }
    
    // Adiciona um ouvinte de evento para cada botão no modelo de projeto
    buttomGeral.forEach((item) => {
        item.addEventListener('click', (e) => {
            // Obtém o botão clicado
            let currentButtom = e.target;

        // Remove a classe 'active' de todos os botões e adiciona ao botão clicado
        removeClick(Array.from(buttomGeral).indexOf(currentButtom));

        // Lógica para chamar a função 'showList' com base na classe do botão clicado
        if (currentButtom.classList.contains('all')) {
            showList(listAll);
        }
        if (currentButtom.classList.contains('design')) {
            showList(listAll, "design");
        }
        if (currentButtom.classList.contains('graphic')) {
            showList(listAll, "graphic");
        }
        if (currentButtom.classList.contains('webSite')) {
            showList(listAll, "webSite");
        }
        if (currentButtom.classList.contains('mobile')) {
            showList(listAll, "mobile");
        }
    });
    });
    
    // Função para exibir ou ocultar itens com base na classe especificada
    function showList(list, buttom = "all") {
        list.forEach((item) => {
            item.classList.remove('active');
        });

    // Lógica para adicionar a classe 'active' com base no valor de 'buttom'
    if (buttom == 'design') {
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
    }
    if (buttom == 'graphic') {
        list[3].classList.add('active');
        list[4].classList.add('active');
    }
    if (buttom == 'webSite') {
        list[5].classList.add('active');
        list[6].classList.add('active');
    }
    if (buttom == 'mobile') {
        list[7].classList.add('active');
    }
    if (buttom == 'all') {
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
    }



![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/0557330c-42e2-4dcb-aced-7e70f40ac5fd)

![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/a91ba159-8906-43ac-b15b-5f83b5bc2544)

#FINAL 
Coloquei alguns lembretes importantes e claro adicionando personalidade ao  meu portfolio.

![image](https://github.com/SraPadilha/FirstPortfolio/assets/110247189/dfb65ae8-3550-497f-a649-5a28ed127ae0)




