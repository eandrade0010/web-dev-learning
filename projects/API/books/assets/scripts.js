
var request = new XMLHttpRequest();

request.open('GET', 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=707776a59e7e4bdd84cac7c460965e92', true);

request.onload = function() {

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.results.forEach( book => {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const col13 = document.createElement('div');
      col13.setAttribute('class', 'col-1-3');

      const col23 = document.createElement('div');
      col23.setAttribute('class', 'col-2-3');

      const h1 = document.createElement('h1');
      h1.textContent = book.title;

      const p = document.createElement('p');
      if (book.description) {
        book.description = book.description.substring(0,300);
      };
      p.textContent = book.description
      p.setAttribute('class', 'col-2-3')


      container.appendChild(card);

      card.appendChild(col13);
      card.appendChild(col23);

      col13.appendChild(h1);
      col23.appendChild(p);

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
