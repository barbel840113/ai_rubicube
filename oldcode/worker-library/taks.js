self.addEventListener('messge', function(e) {
   var data = e.data;
   
   switch(data)
   {
      case 'start':
        self.postMessage('Worker Started: '  + data.msg);       
        break;

      case 'stop':
        self.postMessage('Worker Stopped: ' + data.msg + self.close());       
        break;

      default:
        break;
   }
}, false);