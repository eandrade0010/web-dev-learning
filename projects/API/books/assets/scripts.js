
var request = new XMLHttpRequest();

request.open('GET', 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=707776a59e7e4bdd84cac7c460965e92', true);

request.onload = function() {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.results.forEach( book => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const header = document.createElement('div');
      header.setAttribute('class', 'header');

      const h1 = document.createElement('h1');
      h1.textContent = book.title;

      const h3 = document.createElement('h3');
      h3.textContent = 'Author: ' + book.author;

      const p = document.createElement('p');

      p.textContent = book.description
      p.setAttribute('class', 'col-2-3')


      container.appendChild(card);

      header.appendChild(h1);
      header.appendChild(h3);
      card.appendChild(header);
      card.appendChild(p);

    });
  } else {
    console.log('error');
  }
}

request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');
app.appendChild(container);
