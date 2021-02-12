
function fetchData() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      return response.json()
    })
    .then(data => {
      let output = '';
      
      output += `<li>${data.value}</li>`
      
     document.querySelector('.output').innerHTML = output;
    })
    .catch(error => {
      console.log(error);
    });
}



