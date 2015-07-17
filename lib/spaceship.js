function Spaceship(name, crewmembers, phasers, shields){
  this.name = name
  this.phasers = phasers
  this.shields = shields
  this.crewmembers = crewmembers
  var spaceship = this

  this.crewmembers.forEach(function(crewmember){
    crewmember.currentShip = spaceship
  })

  if(crewmembers[0] == undefined){
    Spaceship.prototype.docked = true;
  }
  else {
    Spaceship.prototype.docked = false;
  }
};

Spaceship.prototype.cloaked = false;
Spaceship.prototype.warpDrive = 'disengaged';
Spaceship.prototype.phasersCharge = 'uncharged';

