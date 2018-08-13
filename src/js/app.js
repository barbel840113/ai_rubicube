import Main from './library/main.component';
import Config from './data/config';
import Detector from './help-library/Detector';
import WorkerService from './web-workers/worker-service';

// check environment
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! --------');

  Config.isDev = true;
}

var number = { number: 20 };

Config.isDev = true;
function init() {

  var result = "";

  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  }
  else {
    var container = document.getElementById('appContainer');
    new Main(container);
  }
}


init();