import * as ActMnu from "../../98.menu.unit/menu.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActTrm from "../terminal.action";

import * as ActVrt from "../../act/vurt.action";
import * as ActDsk from "../../act/disk.action";

var bit, val, idx, dex, lst, dat;

export const initTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

 if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActTrm], dat: bal.dat, src: bal.src })

 cpy.term = require("terminal-kit").terminal;

 if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);


 if (bal.slv != null) bal.slv({ intBit: { idx: "init-terminal" } });

 return cpy;
};

export const updateTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

 const { exec } = require('child_process');

 exec('tsc -b 998.terminal', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../999.vurt");
 bit = await ste.bus(ActVrt.BUNDLE_VURT, { src: "998.terminal" });
 process.chdir("../998.terminal");

 bit = await ste.bus(ActDsk.READ_DISK, { src: './work/998.terminal.js' })
 var terminal = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/998.terminal.js', dat: terminal })

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.html' })
 var html = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.READ_DISK, { src: './index.js' })
 var index = bit.dskBit.dat;

 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/public/jsx/index.js', dat: index })
 bit = await ste.bus(ActDsk.WRITE_DISK, { src: '../gillisse/index.html', dat: html })

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ trmBit: { idx: "update-terminal" } });
 }, 3);

 });

 return cpy;
};


export const openTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

 bit = await ste.bus(ActDsk.COPY_DISK, { src: './vue', idx: '../gillisse/src' })

 bit = await ste.hunt(ActTrm.RUN_TERMINAL, {})

 const open = require('open')

 var loc = './vrt.opn.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ trmBit: { idx: "open-terminal" } });
 }, 33)


 return cpy;
};
export const runTerminal = async (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

 const open = require('open')

 var loc = './vrt.gil.bat'
 bit = await open(loc)

 setTimeout(() => {
 if (bal.slv != null) bal.slv({ trmBit: { idx: "run-terminal" } });
 })

 return cpy;
};
export const editTerminal = (cpy: TerminalModel, bal: TerminalBit, ste: State) => {

 const { exec } = require('child_process');

 process.chdir("../../studio/");

 exec('start Code.exe ../packages/gillisse', async (err, stdout, stderr) => {
 if (err) {
 console.error(`exec error: ${err}`);
 }

 process.chdir("../packages/998.terminal");

 if (bal.slv != null) bal.slv({ trmBit: { idx: "edit-terminal", dat: {} } });
 });

 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

export const patchTerminal = (cpy: TerminalModel, bal:TerminalBit, ste: State) => {
 debugger
 return cpy;
 };

import { TerminalModel } from "../terminal.model";
import TerminalBit from "../fce/terminal.bit";
import State from "../../99.core/state";

