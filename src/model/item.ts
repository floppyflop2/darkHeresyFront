import { ItemAvailibility } from "src/model/itemAvailability";

export class Item {
    
    public ItemId: number;
    
    public ItemName: string;
    
    Rarity: ItemAvailibility;
    
    public Cost: number;
}