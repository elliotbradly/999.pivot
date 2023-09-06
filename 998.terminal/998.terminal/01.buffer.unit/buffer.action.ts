import { Action } from "../99.core/interface/action.interface";
import  BufferBit  from "./fce/buffer.bit";

// Buffer actions

export const INIT_BUFFER = "[Buffer action] Init Buffer";
export class InitBuffer implements Action {
 readonly type = INIT_BUFFER;
 constructor(public bale: BufferBit) {}
}

export const UPDATE_BUFFER = "[Buffer action] Update Buffer";
export class UpdateBuffer implements Action {
 readonly type = UPDATE_BUFFER;
 constructor(public bale: BufferBit) {}
}

export type Actions = | InitBuffer | UpdateBuffer ;
