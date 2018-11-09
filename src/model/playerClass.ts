import { Skill } from "src/model/skill";
import { ClassEvolution } from "src/model/classEvolution";

export class PlayerClass {
    
    public PlayerClassId: number;
    
    public ClassName: string;
    
    public Grades: ClassEvolution[];
    
    public SkillList: Skill[];
    
    public Role: string;
    
    public EliteAdvances: string;
    
    public Divination: string;
    
    public Notes: string;
    
    public Quirks: string;
}