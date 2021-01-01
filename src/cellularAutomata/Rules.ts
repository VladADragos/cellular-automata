import eRules from "./eRules";
import RuleSets from "./RuleSets";


function compareStates(a: [number,number,number],b:[number,number,number]){
    return a[0] == b[0] &&  a[1] == b[1] &&  a[2] == b[2]; 
}
class Rules{

    static rule: eRules = eRules.rule_30;
    static matchCellState(input:[number,number,number],ruleSet: number[]): number{
        if(compareStates(input,[1,1,1])){
            return ruleSet[0];
        }
        else if(compareStates(input,[1,1,0])){
            return ruleSet[1];
        }
        else if(compareStates(input,[1,0,1])){
            return ruleSet[2];  
        }
        else if(compareStates(input,[1,0,0])){
            return ruleSet[3];
        }
        else if(compareStates(input,[0,1,1])){
            return ruleSet[4];
        }
        else if(compareStates(input,[0,1,0])){
            return ruleSet[5];
        }
        else if(compareStates(input,[0,0,1])){
            return ruleSet[6];
        }
        else if(compareStates(input,[0,0,0])){
            return ruleSet[7];
        }
        console.error("invalid cell states");
        return ruleSet[0];
    } 
    static getNewCellState(left:number,current: number,right:number):number{
        let ruleSet: number[] = RuleSets[Rules.rule];
        let cellState:[number,number,number] = [left,current,right];
        return Rules.matchCellState(cellState,ruleSet);
    }   
}




export default Rules;