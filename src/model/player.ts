import { PersonalInfo } from "src/model/personalInfo";
import { Characteristic } from "src/model/characteristic";

export class Player{
    id :number;
    personalInfo : PersonalInfo;
    stats : Characteristic;
    background :string;
    xpToSpend:number;
    totalXp:number;
    treshHold:number;
    currentTreshHold:number;
}