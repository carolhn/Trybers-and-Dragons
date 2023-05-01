import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static contador = 0;
    
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Dwarf.contador += 1;
    return Dwarf.contador;
  }
}

export default Dwarf;