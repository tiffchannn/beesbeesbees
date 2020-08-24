var Bee = function() {
  // missing input for constructor function?
  /*
  call the Grub superclass
  set the prototype
  set the constructor
  an age property that is set to 5
  a color property that is set to yellow
  a food property that is inherited from grub
  an eat method that is inherited from grub
  a job property that is set to keep on growing
  */

  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';

};

// set the prototype - will delegate all failed lookups on Bee to Grub to find shared methods stored there
Bee.protoype= Object.create(Grub.prototype);

// set the constructor - creates a delegation relationship; all other bees will report to this constructor
Bee.prototype.constructor = Bee;
