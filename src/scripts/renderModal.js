export function renderModal(posts){

    let divModal = document.querySelector('.divModal');

    divModal.innerHTML='';

    let divBtnClose = document.createElement('div')
    let btnClose = document.createElement('button');
    let divHeader = document.createElement('div');
    let figure = document.createElement('figure');
    let imgUser = document.createElement('img');
    let sectionIdentification = document.createElement('section');
    let pName = document.createElement('p');
    let pOffice = document.createElement('p');
    let pTitle = document.createElement('p');
    let pPost = document.createElement('p');

    divBtnClose.className='divBtnClose'
    btnClose.className='btnClose';
    btnClose.innerText='X';
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
    pPost.innerText=posts.text;

    divModal.appendChild(divBtnClose)
    divBtnClose.appendChild(btnClose);
    divModal.appendChild(divHeader);
    divHeader.appendChild(figure);
    figure.appendChild(imgUser);
    divHeader.appendChild(sectionIdentification);
    sectionIdentification.appendChild(pName);
    sectionIdentification.appendChild(pOffice);
    divModal.appendChild(pTitle);
    divModal.appendChild(pPost);

    btnClose.addEventListener('click', function(event){
        event.preventDefault();
        const showModal = document.querySelector('.modalPost');
        showModal.close();
    })

}