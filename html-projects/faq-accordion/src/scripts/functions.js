const answerToggle = () => {

    document.addEventListener('click', (e) => {

        let targetElement = e.target.classList.contains('question');

        if(targetElement) {

            // variable for the selected Element
            // Update this code to fix issue with event listener
            let selectedElement = e.target.parentElement.parentElement.children[1].classList;

            let selectedElementHeader = e.target.classList;

            let toggleArrows = e.target.nextElementSibling.classList;

            if(!toggleArrows.contains("fq-card__rotate--arrow-up") && !toggleArrows.contains("fq-card__rotate--arrow-down")) {
                
                toggleArrows.add('fq-card__rotate--arrow-up');
                selectedElement.toggle('fq-card__answer--hide');
                selectedElementHeader.toggle('fq-card__header--bold');


            } else if(toggleArrows.contains("fq-card__rotate--arrow-up") && !toggleArrows.contains("fq-card__rotate--arrow-down")) {
                toggleArrows.remove('fq-card__rotate--arrow-up');
                toggleArrows.add('fq-card__rotate--arrow-down');
                selectedElement.toggle('fq-card__answer--hide');
                selectedElementHeader.toggle('fq-card__header--bold');


            }else if(toggleArrows.contains("fq-card__rotate--arrow-down")) {
                toggleArrows.add('fq-card__rotate--arrow-up');
                toggleArrows.remove('fq-card__rotate--arrow-down');
                selectedElement.toggle('fq-card__answer--hide');
                selectedElementHeader.toggle('fq-card__header--bold');
            }

        }

    })

  
}

answerToggle();