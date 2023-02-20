import { renderModal } from "./renderModal.js";

export function renderPosts(array){

    let ulPosts = document.querySelector('.ulPosts');

    ulPosts.innerHTML='';

    array.forEach(posts => {
        const card = createCard(posts);
        ulPosts.appendChild(card);
    });

}

function createCard(posts){

    let liPosts = document.createElement('li');
    let divCard = document.createElement('div');
    let divHeader = document.createElement('div');
    let figure = document.createElement('figure');
    let imgUser = document.createElement('img');
    let sectionIdentification = document.createElement('section');
    let pName = document.createElement('p');
    let pOffice = document.createElement('p');
    let pTitle = document.createElement('p');
    let pPost = document.createElement('p');
    let btnOpenModal = document.createElement('button');
    let icon = document.createElement('i');
    let span = document.createElement('span');

    liPosts.className='liPosts';
    divCard.className='divCard';
    divHeader.className='divHeader';
    imgUser.className='imgUser';
    imgUser.src=posts.img;
    imgUser.alt=posts.user;
    sectionIdentification.className='sectionIdentification';
    pName.className='pName';
    pName.innerText=posts.user;
    pOffice.className='pOffice';
    pOffice.innerText=posts.stack;
    pTitle.className='pTitle';
    pTitle.innerText=posts.title;
    pPost.className='pPost';
    pPost.innerText= `${posts.text.substring(0,182)}...`;
    btnOpenModal.className='btnOpenModal';
    btnOpenModal.innerText='Abrir Post';
    icon.className='fa-solid fa-heart';
    icon.style.color="rgb(134, 142, 150)";
    span.innerText=posts.likes;

    liPosts.appendChild(divCard);
    divCard.appendChild(divHeader);
    divHeader.appendChild(figure);
    figure.appendChild(imgUser);
    divHeader.appendChild(sectionIdentification);
    sectionIdentification.appendChild(pName);
    sectionIdentification.appendChild(pOffice);
    divCard.appendChild(pTitle);
    divCard.appendChild(pPost);
    divCard.appendChild(btnOpenModal);
    divCard.appendChild(icon);
    divCard.appendChild(span);

    btnOpenModal.addEventListener('click', function(event){

        event.preventDefault();

        renderModal(posts);

        const seeModal = document.querySelector('.modalPost');
        seeModal.showModal();

    })

    icon.addEventListener('click', function(){
        
        if(icon.style.color=='rgb(134, 142, 150)'){
            icon.style.color='#D7443E';
            span.innerText=posts.likes+1;
            posts.likes=posts.likes+1;
        }
        else{
            icon.style.color='rgb(134, 142, 150)';
            span.innerText=posts.likes-1;
            posts.likes=posts.likes-1;
        }  
    })
    
    return liPosts;
}