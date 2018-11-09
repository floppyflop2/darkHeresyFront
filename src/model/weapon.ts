import { ItemAvailibility } from "src/model/itemAvailability";
import { WeaponClass } from "src/model/weaponClass";

export class Weapon {
    
    public WeaponId: number;
    
    public WeaponName: string;
    
    public class: WeaponClass;
    
    public Range: number;
    
    public Rof: string;
    
    public Damage: number;
    
    public Clip: number;
    
    public Special: string;
    
    public Weight: number;
    
    Rarity: ItemAvailibility;
}