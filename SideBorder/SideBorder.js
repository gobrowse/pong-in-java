/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SideBorder extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./SideBorder/costumes/costume1.svg", {
        x: 262.38592242868106,
        y: 243.93842109352784
      })
    ];

    this.sounds = [new Sound("pop", "./SideBorder/sounds/pop.wav")];

    this.triggers = [];
  }
}
