import work from 'webworkify-webpack';

/**
 * Worker Service
 */
export default class WorkerService {


    constructor() {

        this.number = 0;
        this.isDisposedWorkerThread = false;

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
            // httpWorker.addEventListener('message', event => {
            //     console.log("Starting new Thread to Create Neural Network");
            //     httpWorker.postMessage({ command: testSend });
            // });

            // httpWorker.postMessage({ command: testSend });

            // setTimeout(() => {
            //     httpWorker.terminate();
            // }, 10000);


            //  add event listener
            w.addEventListener('message', event => {
                console.log(event.data.command);
                this.isDisposedWorkerThread = event.data.command;
                if (!this.isDisposedWorkerThread) {
                    w.postMessage({ command: this.isDisposedWorkerThread });
                } else {
                    w.terminate();
                }
            });

            w.postMessage({ command: this.isDisposedWorkerThread }); // send the worker a message
        }
    }
}