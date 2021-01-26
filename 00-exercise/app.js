const form = document.querySelector('#tweetForm');
const btn = document.querySelector('button');
// const nameInput = document.querySelector('#name');
// const tweetInput = document.querySelector('#tweet');

btn.addEventListener('click', function(e){
    e.preventDefault();

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = "<b>" + form.username.value + "</b>" + "-" + form.tweet.value;
    ul.appendChild(li);
});