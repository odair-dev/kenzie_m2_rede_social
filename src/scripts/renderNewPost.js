import { posts } from "./database.js";
import { renderPosts } from "./renderPosts.js";

export function renderNewPost(user){

    let divPost = document.querySelector('.divPost');

    divPost.innerHTML='';

    let divHeader = document.createElement('div');
    let figure = document.createElement('figure');
    let imgUser = document.createElement('img');
    let sectionIdentification = document.createElement('section');
    let pName = document.createElement('p');
    let pOffice = document.createElement('p');
    let form = document.createElement('form');
    let titleNewPost = document.createElement('input');
    let textNewPost = document.createElement('textarea');
    let btnNewPost = document.createElement('button');

    divHeader.className='divHeader';
    imgUser.className='imgUser';
    imgUser.src=user.img;
    imgUser.alt=user.user;
    sectionIdentification.className='sectionIdentification';
    pName.className='pName';
    pName.innerText=user.user;
    pOffice.className='pOffice';
    pOffice.innerText=user.stack;
    titleNewPost.id='titleNewPost';
    titleNewPost.placeholder="Digitar título do post";
    textNewPost.id='textNewPost';
    textNewPost.placeholder="Digitar descrição do post";
    btnNewPost.id='btnNewPost';
    btnNewPost.innerText='Postar';

    divPost.appendChild(divHeader);
    divHeader.appendChild(figure);
    figure.appendChild(imgUser);
    divHeader.appendChild(sectionIdentification);
    sectionIdentification.appendChild(pName);
    sectionIdentification.appendChild(pOffice);
    divPost.appendChild(form);
    form.appendChild(titleNewPost);
    form.appendChild(textNewPost);
    form.appendChild(btnNewPost);

    btnNewPost.addEventListener('click', function(event){

        event.preventDefault();

        if(titleNewPost.value==''||textNewPost.value==''){

            const showModalAlert = document.querySelector('.modalAlert');
            showModalAlert.showModal();
            
            setTimeout(() => {
                showModalAlert.close()
            }, 2500);

        }
        else{

            let newPost = {
                id: posts.length+1,
                title: titleNewPost.value,
                text: textNewPost.value,
                user: pName.textContent,
                stack: pOffice.textContent,
                img: imgUser.src,
                likes: 0
            }

            titleNewPost.value='';
            textNewPost.value='';

            posts.unshift(newPost);
            renderPosts(posts);

        }
    })
    checkInputs();
}

function checkInputs(){
    setInterval(checkEmpty, 250);
}

function checkEmpty(){
    let title = document.querySelector('#titleNewPost');
    let text = document.querySelector('#textNewPost');
    let btn = document.querySelector('#btnNewPost');

    if(title.value!='' && text.value!=''){
        btn.style.background='#4263EB'
        btn.style.color='#FFFFFF';
        btn.style.border='2px solid #4263EB'
    }
    else{
        btn.style.background='#DEE2E6';
        btn.style.color='#868E96';
        btn.style.border='2px solid #DEE2E6'
    }
}