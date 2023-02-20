export function rendersuggestUsers(array){

    let ulSuggest = document.querySelector('.ulSuggest');

    ulSuggest.innerHTML='';

    array.forEach(suggest => {
        const card = createCardsuggestUsers(suggest);
        ulSuggest.appendChild(card);
    });
}

function createCardsuggestUsers(suggest){

    let liSuggest = document.createElement('li')
    let miniCard = document.createElement('div');
    let divHeader = document.createElement('div');
    let figure = document.createElement('figure');
    let imgUser = document.createElement('img');
    let sectionIdentification = document.createElement('section');
    let pName = document.createElement('p');
    let pOffice = document.createElement('p');
    let btnFollow = document.createElement('button');

    liSuggest.className='liSuggest';
    miniCard.className='miniCard';
    divHeader.className='divHeader';
    imgUser.className='imgUser';
    imgUser.src=suggest.img;
    imgUser.alt=suggest.user;
    sectionIdentification.className='sectionIdentification';
    pName.className='pName';
    pName.innerText=suggest.user;
    pOffice.className='pOffice';
    pOffice.innerText=suggest.stack;
    btnFollow.innerText='Seguir';
    btnFollow.className='btnFollow';

    liSuggest.appendChild(miniCard);
    miniCard.appendChild(divHeader);
    divHeader.appendChild(figure);
    figure.appendChild(imgUser);
    divHeader.appendChild(sectionIdentification);
    sectionIdentification.appendChild(pName);
    sectionIdentification.appendChild(pOffice);
    miniCard.appendChild(btnFollow);

    btnFollow.addEventListener('click', function(event){
        event.preventDefault();
        if(btnFollow.classList=='clicked'){
            btnFollow.classList.remove('clicked');
            btnFollow.innerText='Seguir';
            btnFollow.classList.toggle("btnFollow");
        }
        else{
            btnFollow.classList.add('clicked');
            btnFollow.innerText='Seguindo';
            btnFollow.classList.toggle("btnFollow");
        }
    });

    return liSuggest;
}