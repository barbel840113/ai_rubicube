import Main from './library/main.component';
import Config from './data/config';
import Detector from './help-library/Detector';


// check environment
if (__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! --------');

  Config.isDev = true;
}

var number = { number: 20 };

Config.isDev = true;

// Init method
function init() {

  var result = "";

  if (!Detector.webgl) {
    Detector.addGetWebGLMessage();
  }
  else {

    if(!window.indexedDB)
    {
      window.alert("Your browser doesn't support a stable version of IndexDB.");
      throw "No IndexDB";
    }
    var container = document.getElementById('appContainer');
    new Main(container);

  }
}


init();