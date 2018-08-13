/// message received from main.thread

module.exports = function worker(self) {
    self.addEventListener('message', (event) => {       
        console.log(event.data.command.number);
        // setInterval(() => {
        //     self.postMessage({ command: event.data.command.number, result: event.data.command.number });
        //     console.log(event.data.command.number)
        // }, 500);

        self.postMessage({command:event.data.command.number })
    });
};