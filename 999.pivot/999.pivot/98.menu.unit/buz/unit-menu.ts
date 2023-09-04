import * as ActMnu from "../menu.action";
//import * as ActLib from "../../act/library.action";
import * as ActRen from "../../act/renpy.action";
//import * as ActWrk from "../../act/work.action";

//import * as ActVrt from "../../00.vurt.unit/vurt.action";
import * as ActTrm from "../../01.terminal.unit/terminal.action";
//import * as ActDsk from "../../96.disk.unit/disk.action";
import * as ActUnt from "../../02.unit.unit/unit.action";
import * as ActCol from "../../97.collect.unit/collect.action";

var lst, bit, dat, src;

export const collectMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  var bit;

  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { src: "" });
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: "COLLECT MENU " });
  bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 5, src: "--------------" });

  //bit = await ste.hunt(ActDsk.INIT_DISK, {});

  var list = [ActCol.WRITE_COLLECT, ActCol.READ_COLLECT, ActCol.CREATE_COLLECT, ActCol.FORMAT_COLLECT];;

  bit = await ste.hunt(ActTrm.UPDATE_TERMINAL, { lst: list });

  bit = bit.trmBit;

  var idx = list[bit.val];
  switch (idx) {

    case ActCol.WRITE_COLLECT:

      //bit = await ste.hunt(ActTst.WRITE_TEST, {idx:"tst00", dat:{src:'src00'}})
      bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });

      break

    case ActCol.READ_COLLECT:

      //bit = await ste.hunt(ActTst.READ_TEST, {idx:'tst00'})
      bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });

      break
    
      case ActCol.FORMAT_COLLECT:

        bit = await ste.hunt(ActTrm.INPUT_TERMINAL, { lst: ["", "", "format collect..."] });
        src = bit.trmBit.src;
       
        bit = await ste.hunt(ActCol.FORMAT_COLLECT, {src})
        bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });
  
        break


    case ActCol.CREATE_COLLECT:

      //bit = await ste.hunt(ActTst.CREATE_TEST, {idx:'tst01', dat:{src:'alligator'}})
      bit = await ste.hunt(ActTrm.WRITE_TERMINAL, { val: 7, src: JSON.stringify(bit) });

      break

  }

  
  //if (bal.slv != null) bal.slv({ mnuBit: { idx: "test-menu" } });

  return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";

//import * as PIVOT from "../../val/pivot"
//import { BusModel } from "999.vurt/99.bus.unit/bus.model";
//import * as COLOR_SORT from "../../val/color-sort"
