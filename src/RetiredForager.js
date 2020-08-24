var RetiredForagerBee = function() {
  ForagerBee.call(this);

  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

// a forage method that returns "I am too old, let me play cards instead"
RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead';
}

// an always winning gamble method that allows the bee to add a treasure to the treasureChest
RetiredForagerBee.prototype.gamble = function(treasure) {
  this.treasureChest.push(treasure);
}


