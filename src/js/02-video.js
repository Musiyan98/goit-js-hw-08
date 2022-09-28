import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function startPlayVideo() {
  if (videoplayerCurrentTime === undefined) {
    return;
  }
  player.setCurrentTime(videoplayerCurrentTime);
}

let videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', function (timeupdate) {
  videoplayerCurrentTime = timeupdate.seconds;
  throttle(
    localStorage.setItem(
      'videoplayer-current-time',
      `${videoplayerCurrentTime}`
    ),
    1000
  );
});

player.on('play', startPlayVideo);
