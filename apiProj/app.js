var submitVal = document.getElementById('form').addEventListener('submit', myFunc);

function myFunc(e) {
    e.preventDefault();
    var val = document.getElementById('inputText').value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://www.omdbapi.com/?s=' + val + '&apikey=d1d35864&');
        

    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
          
            
        }
    }
    xhr.send();
}

