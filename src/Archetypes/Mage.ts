import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
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
    Mage.contador += 1;
    return Mage.contador;
  }
}

export default Mage;