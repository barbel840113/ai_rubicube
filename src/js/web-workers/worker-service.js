import work from 'webworkify-webpack';

/**
 * Worker Service
 */
export default class WorkerService {
 

    constructor() {

        this.number = 0;

        this.init();
    }

    init() {
        /// check support of browser for web worker
        if (window.Worker) {
            /// requires script name as input
            let w = work(require.resolve('./web-worker.js'));
            let httpWorker = work(require.resolve('./http-worker.js'));

            let testSend = "Welcome to Thread";
            // add listener for http web worker
            httpWorker.addEventListener('message', event => {
                console.log("Starting new Thread to Create Neural Network");
                httpWorker.postMessage({command : testSend});
            });

            httpWorker.postMessage({command : testSend});

            setTimeout(() => {
                httpWorker.terminate();
            }, 10000);
            /// add event listener
            // w.addEventListener('message', event => {
            //     console.log(event.data);
            //     if (Object.getOwnPropertyNames("command")) {
            //         // increase the number
            //         this.number += 1;
            //         // console.log(number);
            //         event.data.command += 1;
            //         if (this.number == 1000) {
            //             w.terminate();
            //         } else {
            //             w.postMessage({ command: this.number });
            //         }
            //     }
            // });

            //w.postMessage({ command: this.number }); // send the worker a message
        }
    }
}