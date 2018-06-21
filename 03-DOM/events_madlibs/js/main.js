const storyDiv = document.getElementById( 'story' );

const libIt = function () {
  const noun = document.getElementById( 'noun' ).value;
  const adjective = document.getElementById( 'adjective' ).value;
  const person = document.getElementById( 'person' ).value;

  storyDiv.innerHTML = `${ person } really likes ${ adjective } ${ noun }.`
}

document.getElementById( 'lib-button' ).addEventListener( 'click', libIt );
