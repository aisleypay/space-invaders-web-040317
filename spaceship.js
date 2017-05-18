class Spaceship {
  constructor(name, crew, phasers, shields, cloaked=false, phasersCharge='uncharged', warpDrive='disengaged', docked=true) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.phasersCharge = phasersCharge
    this.warpDrive = warpDrive
    this.docked = docked
    this.assign()
  }
    assign() {
      if (this.crew.length > 0) {
        for(var i=0, l = this.crew.length; i < l; i++) {
          this.crew[i].currentShip = this
        }

        this.docked = false
      }
    }



}
