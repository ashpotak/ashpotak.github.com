const input = document.querySelector('#user-input');
const button = document.querySelector('.btn');
const name = document.querySelector('.name');
const repos = document.querySelector('.repos');
const username = document.querySelector('.username');
const url = document.querySelector('.url');

// Client ID: Iv1.d9f31fe6ceff940b
// Client secret: 89ada76fc785884595a4e4e8d5faa38279c06734

const clientID = "Iv1.d9f31fe6ceff940b";
const clientSecret = "89ada76fc785884595a4e4e8d5faa38279c06734";


const fetchUser = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${clientID}&
    client_secret=${clientSecret}`);

    const data = await api_call.json();
    return {data};
};

const showData = () => {
    fetchUser(input.value).then((res) => {
        name.innerHTML = `Name:  <span class="info-block__value">${res.data.name}</span>`;
        repos.innerHTML = `Repos:  <span class="info-block__value">${res.data.public_repos}</span>`;
        username.innerHTML = `Username:  <span class="info-block__value">${res.data.login}</span>`;
        url.innerHTML = `URL:  <span class="info-block__value">${res.data.html_url}</span>`;
    });
};

input.addEventListener('keydown', (e) => {
    if(e.keyCode == 13)
        showData();
});

button.addEventListener('click', () => {
    showData();
});
