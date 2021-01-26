const form = document.querySelector('#tweetForm');

const nameInput = document.querySelector('#name');
const tweetInput = document.querySelector('#tweet');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = "username: " + nameInput.value + "<br>" + "tweet: " + tweetInput.value;
    ul.appendChild(li);
});