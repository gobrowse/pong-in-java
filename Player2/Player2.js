/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./Player2/costumes/paddle.svg", { x: 44, y: 7 })
    ];

    this.sounds = [new Sound("boing", "./Player2/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        this.move(this.toNumber(this.stage.vars.paddleFastnessPlayer2));
      }
      if (this.keyPressed("down arrow")) {
        this.move(this.toNumber(this.stage.vars.paddleFastnessPlayer2) * -1);
      }
      yield;
    }
  }
}
