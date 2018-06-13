import Main from './library/main.component';
import Config from './data/config';
import Detector from './help-library/Detector';

Config.isDev = true;
function init() {
  var container = document.getElementById('appContainer');
  new Main(container);
}

init();