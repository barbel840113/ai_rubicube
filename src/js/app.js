import Main from './library/main.component';
import Config from './data/config';
import Detector from './help-library/Detector';

if (__ENV__ === 'dev') {
  Config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  }
  else{
    const container = document.getElementById('appContainer');
    new Main(container);
  }
}

init();