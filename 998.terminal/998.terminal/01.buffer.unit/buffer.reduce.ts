import * as clone from "clone-deep";
import * as Act from "./buffer.action";
import { BufferModel } from "./buffer.model";
import * as Buzz from "./buffer.buzzer";
import State from "../99.core/state";

export function reducer(model: BufferModel = new BufferModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_BUFFER:
 return Buzz.updateBuffer(clone(model), act.bale, state);

 case Act.INIT_BUFFER:
 return Buzz.initBuffer(clone(model), act.bale, state);

 default:
 return model;
 }
}
