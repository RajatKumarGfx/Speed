const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get("s");

const videoSettings =
  "?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&enablejsapi=1&amp;";
let video = new Array();

//theraceee
video.push({
  video_id: "rhZRNmTkctc",
  video_name: "VTORNIK - Money Rain (Phonk Remix) [Lyrics]",
  id: "rhZRNmTkctc" + videoSettings + "start=0",
  note: "race",
  volume: 100,
});

let randVid =
  songId && songId >= 0 && songId < video.length
    ? songId
    : Math.floor(video.length * Math.random());
