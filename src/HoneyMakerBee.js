var HoneyMakerBee = function() {
  /*
  call the Bee superclass
  an age property that is set to 10
  a job property that is set to make honey
  a color property inherited from bee that is set to yellow
  a food property that is inherited from grub
  an eat method that is inherited from grub
  a honeyPot property that is set to 0
  */

 Bee.call(this);
 this.age = 10;
 this.job = 'make honey';
 this.color = 'yellow';
 this.honeyPot = 0;
};

// set the prototype
HoneyMakerBee.protoype= Object.create(Bee.prototype);
// set the constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// makeHoney method that adds 1 to that honeyBee\'s honeyPot
HoneyMakerBee.prototype.makeHoney = function(bee) {
 this.honeyPot++;
}

// giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
HoneyMakerBee.prototype.giveHoney = function(bee) {
 this.honeyPot--;
}
