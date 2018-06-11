import { THREE } from 'three';

// Base Class
var Job = function()
{
   this.pays = true;
}


Object.prototype.print = function()
{
    console.log(this.pays ? 'This is a master object' : ' No It is but no money');
}

//subclass
var TechJob = function(title, pays)
{
    //copy constructore
    // function(a){};
    //var x = new objectName(a);
    Job.call(this);

    this.title = title;
    this.pays = pays;
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

var SupTechJob = function(product)
{
    TechJob.call(this);
    this.product = product;
}

SupTechJob.prototype = Object.create(TechJob.prototype);
SupTechJob.prototype.constructor = SupTechJob;

export { TechJob, SupTechJob};
