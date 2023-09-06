import { Action } from "../99.core/interface/action.interface";
import  TerminalBit  from "./fce/terminal.bit";


export const INIT_TERMINAL = "[Terminal action] Init Terminal";
export class InitTerminal implements Action {
 readonly type = INIT_TERMINAL;
 constructor(public bale: TerminalBit) {}
}

export const UPDATE_TERMINAL = "[Terminal action] Update Terminal";
export class UpdateTerminal implements Action {
 readonly type = UPDATE_TERMINAL;
 constructor(public bale: TerminalBit) {}
}

export const OPEN_TERMINAL = "[Open action] Open Terminal";
 export class OpenTerminal implements Action {
 readonly type = OPEN_TERMINAL;
 constructor(public bale: TerminalBit) {}
 }
 
export const RUN_TERMINAL = "[Run action] Run Terminal";
 export class RunTerminal implements Action {
 readonly type = RUN_TERMINAL;
 constructor(public bale: TerminalBit) {}
 }
 
export const EDIT_TERMINAL = "[Edit action] Edit Terminal";
 export class EditTerminal implements Action {
 readonly type = EDIT_TERMINAL;
 constructor(public bale: TerminalBit) {}
 }
 
 
export const PRINT_TERMINAL = "[Print action] Print Terminal";
 export class PrintTerminal implements Action {
 readonly type = PRINT_TERMINAL;
 constructor(public bale: TerminalBit) {}
 }
 
export const CLOSE_TERMINAL = "[Close action] Close Terminal";
 export class CloseTerminal implements Action {
 readonly type = CLOSE_TERMINAL;
 constructor(public bale: TerminalBit) {}
 }
 
export type Actions = | InitTerminal | UpdateTerminal 
| OpenTerminal
| RunTerminal
| EditTerminal
| PrintTerminal
| CloseTerminal