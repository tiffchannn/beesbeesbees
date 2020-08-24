var ForagerBee = function() {
/*
 call the Bee superclass
 an age property that is set to 10
 a job property that is set to find pollen
 a color property inherited from bee that is set to yellow
 a food property that is inherited from grub
 an eat method that is inherited from grub
 a canFly property that is set true
 a treasureChest property that is set to an empty array []

*/

  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.treasureChest = [];

};

// set protoype
ForagerBee.prototype = Object.create(Bee.protoype);

// set constructor
ForagerBee.prototype.constructor = ForagerBee

// add forage method that allows the bee to add a treasure to the treasureChest
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
}

