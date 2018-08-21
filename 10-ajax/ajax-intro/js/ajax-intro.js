const ajaxRequest = function (method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("loadend", callback);
  xhr.open(method, url);
  xhr.send();
}

const getNewTrivia = function () {
  return ajaxRequest('get', 'http://numbersapi.com/random', function () {
    document.getElementById('result').innerText = this.responseText
  });
}

document.addEventListener('readystatechange', () => {
  console.log(document.readyState);
  
  if( document.readyState === 'complete' ) {
    getNewTrivia()

    document.getElementById('newfact').addEventListener('click', getNewTrivia);
  }
});