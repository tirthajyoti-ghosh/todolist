import comp from './comp';
import List from './List';

const showAssignments = (title) => {
  localStorage.setItem('user', title);
  const temp = document.getElementById('temp');
  if (temp !== null) {
    temp.parentNode.removeChild(temp);
  }

  const ul = comp('ul', 'list-group list-group-flush', 'temp');
  let data = JSON.parse(localStorage.getItem(title));
  data = data.sort((a, b) => b.priority - a.priority);
  const divlist = document.querySelector('#lists');
  data.forEach(element => {
    ul.appendChild(List(element));
  });
  divlist.appendChild(ul);
};

const Card = (title) => {
  const card = comp('div', 'card m-3 cursor');
  const cardBody = card.appendChild(comp('div', 'card-body'));
  cardBody.appendChild(comp('h5', 'card-title', '', title));
  const btn = comp('button', 'btn btn-info btn-lg', title, 'new');
  let att = document.createAttribute('data-toggle');
  att.value = 'modal';
  btn.setAttributeNode(att);
  att = document.createAttribute('data-target');
  att.value = '#model2';
  btn.setAttributeNode(att);
  cardBody.appendChild(btn);
  card.addEventListener('click', () => showAssignments(title));
  return card;
};

export default Card;
