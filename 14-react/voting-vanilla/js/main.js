const upVote = document.querySelector('#up');
const votes = document.querySelector('#votes');
const downVote = document.querySelector('#down');

const state = {
  votes: 0,
  voted: 0
};

upVote.addEventListener('click', () => {
  if (state.voted == 0) {
    state.voted = 1;
    votes.innerText = ++state.votes;
  } else if (state.voted == 1) {
    state.voted = 0;
    votes.innerText = --state.votes;
  } else if (state.voted == -1) {
    state.voted = 1;
    state.votes += 2;
    votes.innerText = state.votes;
  }
})

downVote.addEventListener('click', () => {
  if (state.voted == 0) {
    state.voted = -1;
    votes.innerText = --state.votes;
  } else if (state.voted == -1) {
    state.voted = 0;
    votes.innerText = ++state.votes;
  } else if (state.voted = 1) {
    state.voted = -1;
    state.votes -= 2
    votes.innerText = state.votes;
  }
})