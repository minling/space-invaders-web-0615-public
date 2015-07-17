function CrewMember(position){
  this.position = position
  this.currentShip = "Looking for a Rig";
};
// create as a prototype because these are functions you'd like to call on the instances.
CrewMember.prototype.engageWarpDrive = function(){
   if(this.position == "Pilot" && this.currentShip != "Looking for a Rig"){
    this.currentShip.warpDrive = 'engaged!';
  }
  else{
    return "had no effect"
  }
};

CrewMember.prototype.setsInvisibility = function(){
  if(this.position == "Defender" && this.currentShip != "Looking for a Rig"){
    this.currentShip.cloaked = true;
  }
  else{
    return "had no effect"
  }
};

CrewMember.prototype.chargePhasers = function(){
  // gunner and belong to ship, call this function
  if(this.position == "Gunner" && this.currentShip != "Looking for a Rig"){
    this.currentShip.phasersCharge = 'charged!';
  }
  else{
    return "had no effect"
  }

};