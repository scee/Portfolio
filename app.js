const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function PageTransitions(){
    //button click active class
    for (let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        } )
    }
    

    //Sections Active class
    allSelections.addEventListener('click', (e) =>{
        const id= e.target.dataset.id;
        if(id){
            //remove the selected from the other buttons
            sectionBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide the other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }

    })

    //switch-themes
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element= document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();