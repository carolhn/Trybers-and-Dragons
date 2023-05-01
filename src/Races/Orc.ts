import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static contador = 0;
    
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Orc.contador += 1;
    return Orc.contador;
  }
}

export default Orc;