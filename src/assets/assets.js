import bell_icon from "./icons/bell.png";
import home_icon from "./icons/home.png";
import like_icon from "./icons/like.png";
import loop_icon from "./icons/loop.png";
import mic_icon from "./icons/mic.png";
import next_icon from "./icons/next.png";
import play_icon from "./icons/play.png";
import pause_icon from "./icons/pause.png";
import plays_icon from "./icons/plays.png";
import prev_icon from "./icons/prev.png";
import search_icon from "./icons/search.png";
import shuffle_icon from "./icons/shuffle.png";
import speaker_icon from "./icons/speaker.png";
import stack_icon from "./icons/stack.png";
import zoom_icon from "./icons/zoom.png";
import plus_icon from "./icons/plus.png";
import arrow_icon from "./icons/arrow.png";
import mini_player_icon from "./icons/mini-player.png";
import queue_icon from "./icons/queue.png";
import volume_icon from "./icons/volume.png";
import arrow_right from "./icons/right_arrow.png";
import arrow_left from "./icons/left_arrow.png";
import spotify_logo from "./icons/spotify_logo.png";
import clock_icon from "./icons/clock_icon.png";
import aajkiraat from "./song Image/aajkiraat.webp";
import aayehaaye from "./song Image/aaye haaye.jpeg";
import aayinai from "./song Image/aayi nai.jpeg";
import chumma from "./song Image/chumma.jpeg";
import Marjaaneya from "./song Image/Marjaaneya.webp";
import Raanjhan from "./song Image/Raanjhan.jpg";
import Thehre from "./song Image/Thehre.webp";
import Tension from "./song Image/Tension.webp";
import Don from "./song Image/Don.webp";
import NamyaDaChaa from "./song Image/NamyaDaChaa.webp";
import Surrey from "./song Image/Surrey.webp";
import Runway from "./song Image/Runway.webp";
import Knife_Brows from "./song Image/Knife Brows.webp";
import Russian_Bandana from "./song Image/Russian Bandana.webp";
import img8 from "./album image/img8.jpg";
import img9 from "./album image/img9.jpg";
import img10 from "./album image/img10.jpg";
import img11 from "./album image/img11.jpg";
import img12 from "./album image/img12.jpg";
import img13 from "./album image/img13.jpg";
import img14 from "./album image/img14.jpg";
import img15 from "./album image/img15.jpg";
import img16 from "./album image/img16.jpg";
import aajkiraat_song from "./song/song1.mp3";
import aayehaaye_song from "./song/song2.mp3";
import aayinai_song from "./song/song3.mp3";
import chumma_song from "./song/song4.mp3";
import Marjaaneya_song from "./song/song5.mp3";
import Raanjhan_song from "./song/song6.mp3";
import Thehre_song from "./song/song7.mp3";
import Tension_song from "./song/Tension.mp3";
import Don_song from "./song/Don.mp3";
import NamyaDaChaa_song from "./song/NamyaDaChaa.mp3";
import Surrey_song from "./song/Surrey.mp3";
import Runway_song from "./song/Runway.mp3";
import Knife_Brows_song from "./song/Knife Brows.mp3";
import Russian_Bandana_song from "./song/Russian Bandana.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: img8,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365",
  },
  {
    id: 1,
    name: "Top 50 India",
    image: img9,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#22543d",
  },
  {
    id: 2,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
  },
  {
    id: 3,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a",
  },
  {
    id: 4,
    name: "Mega Hits,",
    image: img11,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  },
  {
    id: 5,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Aaj Ki Raat",
    image: aajkiraat,
    file: aajkiraat_song,
    desc: "Madhubanti Bagchi, Amitabh Bhattacharya",
    duration: "3:47",
  },
  {
    id: 1,
    name: "Aaye Haaye",
    image: aayehaaye,
    file: aayehaaye_song,
    desc: "Karan Aujla",
    duration: "3:15",
  },
  {
    id: 2,
    name: "Aayi nai",
    image: aayinai,
    file: aayinai_song,
    desc: "Pawan Singh , Simran Choudhary",
    duration: "3:42",
  },
  {
    id: 3,
    name: "Chumma",
    image: chumma,
    file: chumma_song,
    desc: "Pawan Singh ,Rupali Jaga",
    duration: "3:26",
  },
  {
    id: 4,
    name: "Marjaaneya",
    image: Marjaaneya,
    file: Marjaaneya_song,
    desc: "Varun Jain and Sachin Jigar",
    duration: "2:46",
  },
  {
    id: 5,
    name: "Raanjhan",
    image: Raanjhan,
    file: Raanjhan_song,
    desc: "Sachet-Parampara, Parampara Tandon",
    duration: "3:24",
  },
  {
    id: 6,
    name: "Thehre Rahen",
    image: Thehre,
    file: Thehre_song,
    desc: "Jubin Nautiyal , Payal Dev",
    duration: "3:48",
  },
  {
    id: 7,
    name: "Tension",
    image: Tension,
    file: Tension_song,
    desc: "R Nait",
    duration: "3:48",
  },
  {
    id: 8,
    name: "Don ",
    image: Don,
    file: Don_song,
    desc: "R Nait",
    duration: "3:48",
  },
  {
    id: 9,
    name: "Namya Da Chaa",
    image: NamyaDaChaa,
    file: NamyaDaChaa_song,
    desc: "R Nait",
    duration: "3:48",
  },
  {
    id: 10,
    name: "Surrey",
    image: Surrey,
    file: Surrey_song,
    desc: "R Nait",
    duration: "3:48",
  },
  {
    id: 11,
    name: "Runway",
    image: Runway,
    file: Runway_song,
    desc: "R Nait",
    duration: "3:48",
  },
  {
    id: 12,
    name: "Knife Brows",
    image: Knife_Brows,
    file: Knife_Brows_song,
    desc: "Dhanda Nyoliwala",
    duration: "3:48",
  },
  {
    id: 13,
    name: "Russian Bandana",
    image: Russian_Bandana,
    file: Russian_Bandana_song,
    desc: "Dhanda Nyoliwala",
    duration: "3:48",
  },
];
