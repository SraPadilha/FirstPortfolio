function writeTitle() {
    function activeWorld(element) {
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        return new Promise((resolve) => {
            arrText.forEach((letra, i) => {
                setTimeout(() => {
                    element.innerHTML += letra;
                    if (i === arrText.length - 1) {
                        resolve();
                    }
                }, 75 * i);
            });
        });
    }

    const title = document.querySelector('.iniciop');
    return activeWorld(title);
}

function writeTitle2() {
    function activeWorld(element) {
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        return new Promise((resolve) => {
            arrText.forEach((letra, i) => {
                setTimeout(() => {
                    element.innerHTML += letra;
                    if (i === arrText.length - 1) {
                        resolve();
                    }
                }, 75 * i);
            });
        });
    }

    const title = document.querySelector('.inicios');
    const firstTitle = document.querySelector('.iniciop');

    title.classList.remove('hidden');
    activeWorld(title);
}
/* MEMU FUNCIONAL */
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.naveg-primaria a');

    links.forEach(link => {
        link.addEventListener('click', scrollSmooth);
    });

    function scrollSmooth(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
});


function startAnimations() {
    writeTitle().then(() => {
        writeTitle2();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    startAnimations();
});

  function aboutMe() {
    const divExperiencia = document.querySelectorAll('.xp_conteudo div');
    const liExperiencia = document.querySelectorAll('.xp_conteudo ul li');
    const divEducacao = document.querySelectorAll('.educ_conteudo div');
    const liEducacao = document.querySelectorAll('.educ_conteudo ul li');
  
    divExperiencia[0].classList.add('ativo');
    divEducacao[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    liEducacao[0].classList.add('ativo');
  
    let experienciaIndex = 0;
    let educacaoIndex = 0;
    let slideInterval; 
  
    function slideShow() {
      divExperiencia.forEach((div) => {
        div.classList.remove('ativo');
      });
      liExperiencia.forEach((botao) => {
        botao.classList.remove('ativo');
      });
      divExperiencia[experienciaIndex].classList.add('ativo');
      liExperiencia[experienciaIndex].classList.add('ativo');
      experienciaIndex = (experienciaIndex + 1) % divExperiencia.length;
    }
  
    function slideShow2() {
      divEducacao.forEach((div) => {
        div.classList.remove('ativo');
      });
      liEducacao.forEach((botao) => {
        botao.classList.remove('ativo');
      });
      divEducacao[educacaoIndex].classList.add('ativo');
      liEducacao[educacaoIndex].classList.add('ativo');
      educacaoIndex = (educacaoIndex + 1) % divEducacao.length;
  
      stopSlideInterval();
      startSlideInterval(); 
    }
  
    function startSlideInterval() {
      slideInterval = setInterval(slideShow, 5000);
      slideInterval2 = setInterval(slideShow2, 5000);
    }
  
    function stopSlideInterval() {
      clearInterval(slideInterval);
      clearInterval(slideInterval2);
    }
  
    liExperiencia.forEach((event, index) => {
      event.addEventListener('click', () => {
        slideShow(index);
        stopSlideInterval();
      });
    });
    liEducacao.forEach((event, index) => {
      event.addEventListener('click', () => {
        slideShow2(index);
      });
    });
    startSlideInterval();
  }
  
  window.addEventListener('load', aboutMe);
  aboutMe();

  document.addEventListener('DOMContentLoaded', () => {
    showList(listAll);
  });
  
const listAll = document.querySelectorAll('.projects_storage ul li');
const buttomGeral = document.querySelectorAll('.projects_models ul li');
const buttomAll = document.querySelectorAll('.projects_models .all');


function removeClick(index){
    buttomGeral.forEach((item)=>{
        item.classList.remove('active');
    });
    buttomGeral[index].classList.add('active')
}

buttomGeral.forEach((item, index)=>{
    item.addEventListener('click',()=>{
        removeClick(index);
    })
    
})

function showList(list, buttom = "all"){
    list.forEach((item) =>{
        item.classList.remove('active')
    });
    if(buttom == 'design'){
        list[0].classList.add('active');
        list[1].classList.add('active');       
        list[2].classList.add('active');
        
    }
    if(buttom == 'graphic'){
        list[3].classList.add('active');
        list[4].classList.add('active');
    }
    if(buttom == 'webSite'){
        list[5].classList.add('active');
        list[6].classList.add('active');

    }
    if(buttom == 'mobile') {
        list[7].classList.add('active');
        
    }  
    if(buttom == 'all'){
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


buttomGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButtom = e.target
        if(currentButtom.classList.contains('all')){
            showList(listAll)
        }
        if(currentButtom.classList.contains('design')){
            showList(listAll, "design")
        }
        if(currentButtom.classList.contains('graphic')){
            showList(listAll, "graphic")
        }
        if(currentButtom.classList.contains('webSite')){
            showList(listAll, "webSite")
        }
        if(currentButtom.classList.contains('all')){
            showList(listAll, "all")
        }
        if(currentButtom.classList.contains('mobile')){
            showList(listAll, "mobile")
        }

    })
})

/*TIMELINE*/ 
document.addEventListener('DOMContentLoaded', function() {
   
    var steps = document.querySelectorAll('.step');
    var lineProgress = document.getElementById('line-progress');
    var contents = document.querySelectorAll('.section-content');

 
    steps.forEach(function(step, index) {
        step.addEventListener('click', function() {
            
            steps.forEach(function(s, i) {
                if (i <= index) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });

            
            var width = (index + 1) * 25;
            lineProgress.style.width = width + '%';

            
            contents.forEach(function(content, i) {
                if (i === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});
