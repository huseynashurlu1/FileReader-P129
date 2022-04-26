function SendRequest() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      document.getElementById('list').innerHTML = this.responseText;
    }
    else{
      document.getElementById('list').innerHTML = this.responseText;
    }
  }
  
  xhr.open('GET','product.html');
  xhr.send();

}



// // READYSTATE
// // 0 - sorgu baslamiyib
// // 1 - serverle connection
// // 2 - sorgu gonderildi
// // 3 - sorgu qebul edildi
// // 4 - sorgu bitdi return


// function SendRequest() {
//   fetch('mmessage.txt')
//   .then(response => response.text())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// }


function SendRequest() {
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let x  = `
    <div class="col-lg-3">
            <div class="card">
                <img src="${data.results[0].picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${data.results[0].name.first} ${data.results[0].name.last}</h5>
                  <p class="card-text">Email: ${data.results[0].email}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
           </div>
    `

    document.getElementById('list').innerHTML = x;
  })
  .catch(error => console.log(error));
}