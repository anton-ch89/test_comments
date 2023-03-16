
'use strict';

import { getDay, getUsertDay, getTime } from "./dates";
import { randomId } from "./secondary";

const form = document.getElementById('form');
const formContainer = document.querySelector('.form__container');
const mistakeComment = document.querySelector('.mistake-text');
const mistakeName = document.querySelector('.mistake-name');
const commentName = document.getElementById('comment-name');
const commentText = document.getElementById('comment-text');
const commentDate = document.getElementById('comment-date');
const commentArea = document.getElementById('comment-area');




let comments = [];


//добавляет комментарий
form.addEventListener('submit', addComment)

function addComment(event) {
    event.preventDefault();

    let comment = {
        id: randomId(),
        name: commentName.value,
        text: commentText.value,
        date: commentDate.value.length ? getUsertDay(commentDate.value) : getDay(Date.now()) + ' ' + getTime(Date.now()),
        like: false,
    };

    getValidation(comment)

};


//обновляет комментарии на экране
function showComments() {
    let value = ''


    comments.forEach(e => {
        value += `<div class='comment-block'>`;
        value += `<div class='comment-block__header'><p>${e.name}</p>`;
        value += `<p><em>${e.date}</em></p></div>`;
        value += `<p class='comment-block__text'>${e.text}</p>`;
        value += `<div class='comment-block__footer'><img id="${e.id}" class='like' src="${!e.like ? './img/no_like.png' : './img/like.png'}" alt="heart">`;
        value += `<img id="${e.id}" class="delete" src="./img/bucket.png" alt=""></img></div>`;
        value += `</div>`
    })
    commentArea.innerHTML = value
}


// выполняет валидацию полей
function getValidation(comment) {

    const nameReg = /^.{1,15}$/
    const textReg = /^.{1,300}$/


    if (!nameReg.test(commentName.value.trim())) {
        mistakeName.hidden = false
    }
    else if (!textReg.test(commentText.value.trim())) {
        mistakeComment.hidden = false
    }
    else {

        comments = [...comments, comment]
        showComments()
        toLocalStorage();
        commentName.value = '';
        commentText.value = '';
        commentDate.value = '';

    }


    formContainer.addEventListener('input', (event) => {
        let target = event.target
        if (target.matches('.name')) {
            mistakeName.hidden = true
        }
        if (target.matches('.text')) {
            mistakeComment.hidden = true
        }
    });
}


// управление удалением и лайками
commentArea.addEventListener('click', (event) => {
    const target = event.target
    deleteComment(target);
    getLike(target);
    toLocalStorage();
    showComments()
})

//  ставит/убирает лайк
function getLike(target) {
    const likeButton = target.closest('.like')
    if (target.matches('.like')) {
        comments.forEach(e => e.id === likeButton.id ? e.like = !e.like : null)
    }
}


//удаляет комментарий
function deleteComment(target) {
    const deleteButton = target.closest('.delete')
    if (target.matches('.delete')) {
        comments = comments.filter(e => e.id !== deleteButton.id)
    }
}



//загружаем в LocalStorage
function toLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(comments))
}

//выгружаем из LocalStorage
function loadComments() {
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
}


loadComments(comments);


