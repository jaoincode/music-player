const musicImage = document.querySelector('.audio-img');
const playBtn = document.querySelector('.play-btn');
const backwardBtn = document.querySelector('.backward-btn');
const forwardBtn = document.querySelector('.forward-btn');
const audio = document.querySelector('#audio');

let isPlaying = false; // variavel de controle

const audios = ['allmine', 'ghosttown', 'earfquake', 'praisegod', 'seeyouagain'];
const images = ['allmine', 'ghosttown', 'earfquake', 'praisegod', 'seeyouagain'];

let id = 0; // variavel para indicar qual a musica atual

// definindo imagem e música de inicio
audio.src = `./musics/${audios[id]}.mp3`;
musicImage.src = `./images/${images[id]}.jpg`;

// botões de controle
playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying; // valor inverte sempre que for chamado (0 - 1)
  playSong(isPlaying); // passa o valor se está tocando ou não
});

forwardBtn.addEventListener('click', () => {
  if(id == audios.length -1) {
    id = -1;
  }
  id++;
  imgBackground(id);
  changeAudio(id);
})

backwardBtn.addEventListener('click', () => {
  if(id == 0) {
    id = audios.length;
  }
  id--;
  imgBackground(id);
  changeAudio(id);
})


// funções de controle das músicas

// função para tocar música
const playSong = (isPlaying) => {
  if(isPlaying) {
    playBtn.firstChild.classList.remove('fa-play');
    playBtn.firstChild.classList.add('fa-pause');
    audio.play();
    musicImage.style = `animation: rotationImg 5s infinite linear`;
    return;
  }

  playBtn.firstChild.classList.remove('fa-pause');
  playBtn.firstChild.classList.add('fa-play');
  audio.pause();
  musicImage.style = `animation: none`;
  return;
}

// função para ir para a proxima musica ou voltar
const changeAudio = (id) => {
  audio.src = `./musics/${audios[id]}.mp3`;
  isPlaying = true;
  playSong(isPlaying);
}

// função para trocar background
const imgBackground = (id) => {
   musicImage.src = `./images/${images[id]}.jpg`;
}

// resetar quando acabar
audio.onended = () => {
  if(id == audios.length -1) {
    id = -1;
  }

  id++;
  imgBackground(id)
  nextAudio(id);
}

