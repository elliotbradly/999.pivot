
var termkit = require('terminal-kit');
var ScreenBuffer = termkit.ScreenBuffer;

export const initBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    var trmMod: TerminalModel = ste.value.terminal
    var term = trmMod.term

    cpy.view = new ScreenBuffer({
        dst: term,
        width: Math.min(term.width),
        height: Math.min(term.height - 1),
        y: 2
    });


    if (bal.slv != null) bal.slv({ idxBit: { idx: "init-buffer" } });
    return cpy;
};

export const updateBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {
    return cpy;
};


export const drawBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    cpy.bg.draw( { dst: cpy.view , tile: true } ) ;
	
    //sprites.spaceship.draw( { dst: cpy.view , blending: true , wrap: 'both' } ) ;
	cpy.view.draw( { delta: true } ) ;
    
    return cpy;
};


export const backgroundBuffer = (cpy: BufferModel, bal: BufferBit, ste: State) => {

    cpy.bg = new ScreenBuffer({
        width: cpy.view.width * 4,
        height: cpy.view.height,
        noFill: true
    });

    cpy.bg.fill({ attr: { color: 'white', bgColor: 'black' } });

    if (bal.slv != null) bal.slv({ bufBit: { idx: "background-buffer" } });
    return cpy;
};



export const readBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
export const writeBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
export const createBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
export const deleteBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
export const removeBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
export const listBuffer = (cpy: BufferModel, bal:BufferBit, ste: State) => {
 debugger
 return cpy;
 };
import { BufferModel } from "../buffer.model";
import BufferBit from "../fce/buffer.bit";
import State from "../../99.core/state";
import { TerminalModel } from "998.terminal/00.terminal.unit/terminal.model";
