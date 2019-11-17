/// message received from main.thread

module.exports = function worker(self) {
    self.addEventListener('message', (event) => {
        console.log(event.data.command);
        // setInterval(() => {
        //     self.postMessage({ command: event.data.command.number, result: event.data.command.number });
        //     console.log(event.data.command.number)
        // }, 500);
        if (!event.data.command) {
            event.data.command = true;
        }

        self.postMessage({ command: event.data.command });
    });
};