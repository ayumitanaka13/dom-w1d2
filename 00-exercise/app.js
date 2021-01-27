const form = document.querySelector('#tweetForm');
const btn = document.querySelector('button');

btn.addEventListener('click', function(e){
    e.preventDefault();

    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = "<b>" + form.username.value + "</b>" + "-" + form.tweet.value;
    ul.appendChild(li);
});



// const tweetForm = document.querySelector('#tweetForm');
// const tweetContainer = document.querySelector('#tweets');

// tweetForm.addEventListener('submit', function(e){
//     e.preventDefault();
//     const userNameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(userNameInput.value, tweetInput.value);
//     userNameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username);
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`);
//     tweetContainer.appendChild(newTweet);
// }

// tweetContainer.addEventListener('click', function(e){
//     console.dir(e.target);
//     e.target.nodeName === 'LI' && e.target.remove();
// })