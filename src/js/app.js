import Main from './library/main.component';
import Config from './data/config';
import Detector from './help-library/Detector';

// check environment
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! --------');

  Config.isDev = true;
}
Config.isDev = true;
function init() {
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  }
  else {
    var container = document.getElementById('appContainer');
    new Main(container);
  }

}

init();