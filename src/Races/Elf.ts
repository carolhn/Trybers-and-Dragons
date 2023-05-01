import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static contador = 0;
    
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
  }
  
  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    Elf.contador += 1;
    return Elf.contador;
  }
}

export default Elf;