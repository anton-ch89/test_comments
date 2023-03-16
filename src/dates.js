
'use strict';

//работа с датами и временем

export function getDate(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    let year = a.getFullYear();
    let month = a.getMonth() + 1;
    if (month < 10) {
        month = '0' + month
    }

    let date = a.getDate();
    if (date < 10) {
        date = '0' + date
    }

    let time = year + '-' + month + '-' + date;
    return time;


};

//Получаем время

export function getTime(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp);
    let hour = a.getHours();
    if (hour < 10) {
        hour = '0' + hour
    }

    let min = a.getMinutes();
    if (min < 10) {
        min = '0' + min
    }
    let sec = a.getSeconds();
    if (sec < 10) {
        sec = '0' + sec
    }


    let time = ' ' + hour + ':' + min + ':' + sec;
    return time;

};
// получаес дату от пользователя. сегодня, вчера или пользовательскую
export function getUsertDay(commentDate) {
    let currentDate = getDate(Date.now());
    if (currentDate === commentDate) {
        return 'сегодня' + ' ' + getTime(Date.now())
    }
    else if (getDate(Date.now() - 86400000) === commentDate) {
        return 'вчера' + ' ' + getTime(Date.now())
    }
    else {
        return commentDate + ' ' + getTime(Date.now())
    }
};
export function getDay() {
    let a = new Date(Date.now());
    let year = a.getFullYear();
    let month = a.getMonth() + 1;
    if (month < 10) {
        month = '0' + month
    }

    let date = a.getDate();
    let day = a.getDate() - 1;
    if (date < 10) {
        day = '0' + day
        date = '0' + date
    }

    let today = year + '-' + month + '-' + date;
    let currentDate = getDate(Date.now())
    if (today === currentDate) {
        return 'сегодня'
    } else {
        return getDate(Date.now())
    }

};



