import { PlayerClass } from "src/model/playerClass";
import { Amelioration } from "src/model/amelioration";

export class ClassEvolution {
    
    public ClassEvolutionId: number;
    
    public ClassEvolutionName: string;
    
    ClassRelated: PlayerClass;
    
    Ameliorations: Amelioration[];
}