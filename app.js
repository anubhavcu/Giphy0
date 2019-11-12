//Api key- c90WJKpKNwLt2auhsY25bgBzLyCJOxLl
//path - http://api.giphy.com/v1/gifs/search?q=cheese&api_key=c90WJKpKNwLt2auhsY25bgBzLyCJOxLl

// const api = 'http://api.giphy.com/v1/gifs/search?'; 


document.getElementById('button').addEventListener('click', getData);
document.getElementById('refresh').addEventListener('click', loadNewImage);
// document.getElementById('download').addEventListener('click',download);
document.getElementById('refresh').style.display = 'none';
document.getElementById('details').style.display = 'none';
document.getElementById('loader').style.display = 'none';
document.getElementById('download').style.display = 'none';

let key ='';
const api_key = 'c90WJKpKNwLt2auhsY25bgBzLyCJOxLl';

function getData(){
  document.getElementById('img').src ='';
  let search = document.getElementById('input').value;
  key = search;
  // console.log(search,key)
  document.getElementById('input').value = '';
  let number = Math.floor(Math.random() * 25) + 1;   
  // document.getElementById('refresh').
  fetch(`https://api.giphy.com/v1/gifs/search?&q=${search}&api_key=${api_key}`)
    .then(res => res.json())
      .then(json => {
        console.log(json.data)
        console.log(json.data[0].images.original.url)
        
        document.getElementById('loader').style.display = 'block';
        setTimeout(() => {
          document.getElementById('loader').style.display = 'none';
          document.getElementById('img').src = json.data[`${number}`].images.original.url;
          document.getElementById('refresh').style.display = 'block';
          document.getElementById('download').style.display = 'block';
        }, 1500);
        
        document.getElementById('details').style.display = 'block';

        document.getElementById('text').innerHTML = search;


      })
      .catch(err=>{
        document.getElementById('details').style.display = 'block';
        document.getElementById('text').innerHTML = `${search} - NOT Found!!!  Try something else ...`;
        document.getElementById('img').src = './404.jpg'
    })
}

function loadNewImage(){
  document.getElementById('img').src ='';
  document.getElementById('loader').style.display = 'block';
  let number1 = Math.floor(Math.random() * 25) + 1;  
  fetch(`http://api.giphy.com/v1/gifs/search?&q=${key}&api_key=${api_key}`)      .then(res =>res.json())
        .then(json => {
          setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('img').src = json.data[`${number1}`].images.original.url;
          }, 1500);
        })
        .catch(err => {
          document.getElementById('img').src = './404.jpg';
          console.log(err)
        })
}
