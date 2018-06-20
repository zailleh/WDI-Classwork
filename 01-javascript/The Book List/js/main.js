var books = [
  {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      img: 'everydaythings.jpg',
      alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    img: 'mosthuman.jpg',
    alreadyRead: true
  }
];

const h1 = document.getElementsByTagName( 'h1' )[0];
const body = document.body;

const bookList = document.createElement( 'ul' );

for (let i = 0; i < books.length; i++ ) {
  const book = document.createElement( 'li' );

  book.innerHTML = books[ i ].title + " by " + books[ i ].author + "<br />"

  if (books[ i ].alreadyRead) {
    book.className = "read";
  } else {
    book.className = "unread";
  }

  const img = document.createElement( 'img' );
  img.src = books[ i ].img;
  book.appendChild( img );

  bookList.appendChild( book );
}

h1.after( bookList );
