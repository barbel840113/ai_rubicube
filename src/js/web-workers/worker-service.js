import work from 'webworkify-webpack';

/**
 * Worker Service
 */
export class WorkerService {
   constructor()
   {
         
   }


   init(){
        /// check support of browser for web worker
    if (window.Worker) {
        /// requires script name as input
        let w = work(require.resolve('./web-workers/web-worker.js'));
      
        /// add event listener
        w.addEventListener('message', event => {
            console.log(event.data);
            if(Object.getOwnPropertyNames("command")){
                 // increase the number
                number.number += 1;
               // console.log(number);
                event.data.command += 1;              
                if(number.number == 1000){
                   w.terminate();
                }else{
                  w.postMessage({command : number});
                }
            }
        });
        
        w.postMessage({command : number}); // send the worker a message
    }
}
}