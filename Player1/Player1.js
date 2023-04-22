/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("paddle", "./Player1/costumes/paddle.svg", { x: 44, y: 7 })
    ];

    this.sounds = [new Sound("boing", "./Player1/sounds/boing.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.player1Score = 0;
    while (true) {
      if (this.keyPressed("a")) {
        this.move(this.toNumber(this.stage.vars.paddleFastnessPlayer1));
      }
      if (this.keyPressed("z")) {
        this.move(this.toNumber(this.stage.vars.paddleFastnessPlayer1) * -1);
      }
      yield;
    }
  }
}
