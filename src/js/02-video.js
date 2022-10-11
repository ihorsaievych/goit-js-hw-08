import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import onLocalStorage from './local';

const iframe = document.querySelector('#vimeo-player');
const localStorageKey = 'videoplayer-current-time';
const throtledOnTimeUpdate = throttle(onTimeUpdate, 1000);
const player = new Player(iframe);

player.on('timeupdate',throtledOnTimeUpdate);

player.setCurrentTime(loadPosition());

function onTimeUpdate(event) {
  savePosition(event.seconds);
}

function savePosition(value) {
  onLocalStorage.save(localStorageKey, String(value));
  console.log(String(value));
}
 
function loadPosition() {
  return onLocalStorage.load(localStorageKey) || 0;
}