const answerToggle = () => {

    document.addEventListener('click', (e) => {

        let targetElement = e.target.id === 'question';

        if(targetElement) {

            // variable for the selected Element
            let selectedElement = e.target.parentElement.children[2].classList.toggle('fq-card__answer--hide');

            let selectedElementHeader = e.target.classList.toggle('fq-card__header--bold');

            let toggleArrows = e.target.nextElementSibling.classList;

            if(!toggleArrows.contains("fq-card__rotate--arrow-up") && !toggleArrows.contains("fq-card__rotate--arrow-down")) {
                
                toggleArrows.add('fq-card__rotate--arrow-up');
                selectedElement
                selectedElementHeader


            } else if(toggleArrows.contains("fq-card__rotate--arrow-up") && !toggleArrows.contains("fq-card__rotate--arrow-down")) {
                toggleArrows.remove('fq-card__rotate--arrow-up');
                toggleArrows.add('fq-card__rotate--arrow-down');
                selectedElement
                selectedElementHeader


            }else if(toggleArrows.contains("fq-card__rotate--arrow-down")) {
                toggleArrows.add('fq-card__rotate--arrow-up');
                toggleArrows.remove('fq-card__rotate--arrow-down');
                selectedElement
                selectedElementHeader
            }

        }

    })

    
    




}

answerToggle();