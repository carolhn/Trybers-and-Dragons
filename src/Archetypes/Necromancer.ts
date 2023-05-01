import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static contador = 0;
  private _energyType: EnergyType = 'mana';

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    Necromancer.contador += 1;
    return Necromancer.contador;
  }
}

export default Necromancer;