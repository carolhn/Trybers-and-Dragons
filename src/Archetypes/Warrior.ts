import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static contador = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Warrior.contador += 1;
    return Warrior.contador;
  }
}

export default Warrior;