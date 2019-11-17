/// message received from main.thread

module.exports = function worker(self) {
    self.addEventListener('message', (event) => {       
          self.postMessage({command: event.data.command })
    });
};