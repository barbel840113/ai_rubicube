export default class LoggerService {
    constructor() {
       this.arrayMatrix = [];
    }


    showCurrentMatrixAndSave(data)
    {
        this.arrayMatrix.push(data);
    }

    // iterate fr
    showAllMatrix()
    {
         this.arrayMatrix.forEach(element => console.log(element));
    }
}
