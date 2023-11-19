const musix = new Audio("audio/18.mp3");
// musix.play();

const songs = [
  {
    id: '1',
    song_name: 'Teri_ore.. <br /> <div class="artist">Shreya Ghoshal</div>',
    poster: "img/1.jpg",
  },
  {
    id: '2',
    song_name:
      'Tera_rasta.. <br /> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/2.jpg",
  },
  {
    id: '3',
    song_name: 'Teri_Galliyan.. <br/> <div class="artist">Arjit Singh</div>',
    poster: "img/3.jpg",
  },
  {
    id: '4',
    song_name:
      'Meri Aashiqui..<br> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/4.jpg",
  },
  {
    id: '5',
    song_name:
      'Akhiyaan-Milavanga..<br> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/5.jpg",
  },
  {
    id: '6',
    song_name:
      'srivalli.. <br /> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/6.jpg",
  },
  {
    id: '7',
    song_name: 'O saathi..<br> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/7.jpg",
  },
  {
    id: '8',
    song_name: 'Soch-Na-Sake.. <br /> <div class="artist">Amitabh Bhattacharya</div>',
    poster: "img/8.jpg",
  },
  {
    id: '9',
    song_name: 'Malang-sajna.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/9.jpg",
  },
  {
    id: '10',
    song_name: 'Chaleya.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/10.jpg",
  },
  {
    id: '11',
    song_name: 'Tum_kya_mile.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/11.jpg",
  },
  {
    id: '12',
    song_name:
      'Dil-Diyan-Gallan.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/12.jpg",
  },
  {
    id: '13',
    song_name: 'Fikar-Not.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/13.jpg",
  },
  {
    id: '14',
    song_name: 'window_taley.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/14.jpg",
  },
  {
    id: '15',
    song_name: 'Heeriye.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/15.jpg",
  },
  {
    id: '16',
    song_name: 'Itni-Si-Baat.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/16.jpg",
  },
  {
    id: '17',
    song_name: 'kesariya.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/17.jpg",
  },
  {
    id: '18',
    song_name: 'Maan-meri-jaan.. <br /> <div class="artist">Arjit Singh</div>',
    poster: "img/18.jpg",
  },
];


Array.from(document.getElementsByClassName("song-item")).forEach((e, i)=>{
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].song_name;
});

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (musix.paused || musix.currentTime <= 0) {
    musix.play();
    wave.classList.add("active1");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  } else {
    musix.pause();
    wave.classList.remove("active1");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  }
});



let index = 0;
let post_master_play = document.getElementById('post_master_play')
let title1 = document.getElementById('title')


Array.from(document.getElementsByClassName('playListPlay')).forEach((e) =>{
  e.addEventListener("click", (ele)=> {
    index = ele.target.id;
    musix.src = `audio/${index}.mp3`;
    // post_master_play.src = `img/${index}.jpg`;
    musix.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");



    let songTitles = songs.filter(function(ele1){
      return ele1.id ==index;

    })

    songTitles.forEach(function(elem2){
      let {song_name, poster} = elem2;
      title1.innerHTML = song_name;
      post_master_play.src = poster;
    })

  });

});






let pop_song_left = document.getElementById("pop-song-left");
let pop_song_right = document.getElementById("pop-song-right");
let pop_song = document.getElementsByClassName("pop-song")[0];

pop_song_right.addEventListener("click", function () {
  pop_song.scrollLeft += 300;
});

pop_song_left.addEventListener("click", function () {
  pop_song.scrollLeft -= 300;
});

let pop_art_left = document.getElementById("pop-art-left");
let pop_art_right = document.getElementById("pop-art-right");
let item = document.getElementsByClassName("item")[0];

pop_art_right.addEventListener("click", function () {
  item.scrollLeft += 300;
});

pop_art_left.addEventListener("click", function () {
  item.scrollLeft -= 300;
});
