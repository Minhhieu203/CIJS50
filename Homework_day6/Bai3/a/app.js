for(let i = 0; i < 20; i++)
{
    fetch('https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR2tgE5Cg-mrsCFKbnyW5F-Ad8xM8NiPVVJdgGzArQJG18ffyn_Psbd4HJ8')
    .then(response => response.json())
    .then(data => console.log(data[i].id));
    fetch('https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR2tgE5Cg-mrsCFKbnyW5F-Ad8xM8NiPVVJdgGzArQJG18ffyn_Psbd4HJ8')
    .then(response => response.json())
    .then(data => console.log(data[i].title));
    fetch('https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR2tgE5Cg-mrsCFKbnyW5F-Ad8xM8NiPVVJdgGzArQJG18ffyn_Psbd4HJ8')
    .then(response => response.json())
    .then(data => console.log(data[i].content));
    fetch('https://news-ncov-api.herokuapp.com/news?_page=1&_limit=20&fbclid=IwAR2tgE5Cg-mrsCFKbnyW5F-Ad8xM8NiPVVJdgGzArQJG18ffyn_Psbd4HJ8')
    .then(response => response.json())
    .then(data => console.log(data[i].datetime));
}