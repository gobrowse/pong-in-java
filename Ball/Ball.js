/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Boing", "./Ball/sounds/Boing.wav"),
      new Sound("Pop", "./Ball/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      this.stage.vars.timer += 0.5;
      yield* this.glide(
        0.5,
        this.x + this.toNumber(this.stage.vars.vx),
        this.y + this.toNumber(this.stage.vars.vy)
      );
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        this.touching(this.sprites["Player2"].andClones()) &&
        this.toNumber(this.stage.vars.paddle2) === 0
      ) {
        this.stage.vars.paddle2 = 1;
        this.stage.vars.vx = this.toNumber(this.stage.vars.vx) * -1;
        this.stage.vars.vy =
          this.toNumber(this.stage.vars.vy) + this.random(-10, 10);
      } else {
        if (!this.touching(this.sprites["Player2"].andClones())) {
          this.stage.vars.paddle2 = 0;
        }
      }
      if (
        this.touching(this.sprites["Player1"].andClones()) &&
        this.toNumber(this.stage.vars.paddle1) === 0
      ) {
        this.stage.vars.paddle1 = 1;
        this.stage.vars.vx = this.toNumber(this.stage.vars.vx) * -1;
        this.stage.vars.vy =
          this.toNumber(this.stage.vars.vy) + this.random(-10, 10);
      } else {
        if (!this.touching(this.sprites["Player1"].andClones())) {
          this.stage.vars.paddle1 = 0;
        }
      }
      if (
        this.touching(this.sprites["Border"].andClones()) &&
        this.toNumber(this.stage.vars.borders) === 0
      ) {
        this.stage.vars.borders = 1;
        this.stage.vars.vy = this.toNumber(this.stage.vars.vy) * -1;
      } else {
        if (!this.touching(this.sprites["Border"].andClones())) {
          this.stage.vars.borders = 0;
        }
      }
      if (
        this.touching(this.sprites["SideBorder"].andClones()) &&
        this.toNumber(this.stage.vars.sideBorders) === 0
      ) {
        this.goto(0, 0);
        this.stage.vars.sideBorders = 1;
        if (this.compare(0, this.stage.vars.xPososhion) < 0) {
          this.stage.vars.player1Score++;
        }
        if (this.compare(this.stage.vars.xPososhion, 0) < 0) {
          this.stage.vars.player2Score++;
        }
      } else {
        if (!this.touching(this.sprites["SideBorder"].andClones())) {
          this.stage.vars.sideBorders = 0;
        }
      }
      if (this.x === 241 || this.x === -240) {
        while (!(this.x === 0)) {
          this.goto(0, 0);
          yield;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.stage.vars.xPososhion = this.x;
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.vx = 96;
    this.stage.vars.vy = 64;
    this.stage.vars.timer = 0;
    this.stage.vars.player1Score = 0;
    this.stage.vars.player2Score = 0;
    this.stage.vars.borders = 0;
    this.stage.vars.paddle1 = 0;
    this.stage.vars.paddle2 = 0;
    this.stage.vars.sideBorders = 0;
  }
}
