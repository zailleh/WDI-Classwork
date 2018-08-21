const GoogleAPIURL = 'https://www.googleapis.com/books/v1/volumes?q='

const updateDOM = function (data) {
  // get data from response
  let volumeInfo = data.items[0].volumeInfo;

  // create new elements
  let $book = $('<div>')
  let $title = $('<h3>').text(volumeInfo.title);
  let $cover = $('<img>').attr('src', volumeInfo.imageLinks.thumbnail);
  let $link = $('<a>').attr('href', volumeInfo.infoLink);

  // append elements
  $link.append($cover)
  $book.append($title);
  $book.append($link)

  // add book to document
  $('#output').append($book);
};

const getNewBook = function () {
  query = $('#searchinput').val();
  if (query !== "") {
    $.get(GoogleAPIURL + query, updateDOM)
    //return ajaxRequest('get', GoogleAPIURL + query, updateDOM);
  } else {
    return null;
  }
}

$(document).ready(() => {
  $('#search').on('submit', (e) => {
    e.preventDefault(); // stop form from submitting and changing page
    getNewBook();
  });
})