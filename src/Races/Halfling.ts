import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static contador = 0;
    
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Halfling.contador += 1;
    return Halfling.contador;
  }
}

export default Halfling;