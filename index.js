const xhr = new XMLHttpRequest();
xhr.open('GET','https://users-api-id.herokuapp.com/users' );
xhr.send();
xhr.onload = () => {
    const answer = JSON.parse (xhr.response);
    answer.forEach(render);
};
const list = document.querySelector('ul');
function render ({name, photo, position }) {
    const listItem = document.createElement ('li');

    listItem.innerHTML = `
    <h2>${name}</h2>
    <img src=${photo}>
    <p>${position}</p>
    `;
    list.append(listItem);
};

