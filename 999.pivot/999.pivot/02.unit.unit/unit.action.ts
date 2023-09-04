import { Action } from "../99.core/interface/action.interface";
import  UnitBit  from "./fce/unit.bit";

// Unit actions
export const INIT_UNIT = "[Unit action] Init Unit";
export class InitUnit implements Action {
 readonly type = INIT_UNIT;
 constructor(public bale: UnitBit) {}
}

export const CREATE_UNIT = "[Unit action] Create Unit";
export class CreateUnit implements Action {
 readonly type = CREATE_UNIT;
 constructor(public bale: UnitBit) {}
}

export const UPDATE_UNIT = "[Unit action] Update Unit";
export class UpdateUnit implements Action {
 readonly type = UPDATE_UNIT;
 constructor(public bale: UnitBit) {}
}

export const CODE_UNIT = "[Code action] Code Unit";
 export class CodeUnit implements Action {
 readonly type = CODE_UNIT;
 constructor(public bale: UnitBit) {}
 }
 
export type Actions = | InitUnit | UpdateUnit | CreateUnit 
| CodeUnit