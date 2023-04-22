/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 242.5,
        y: 172.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.vx = -96;
    this.vars.vy = -112;
    this.vars.timer = 130;
    this.vars.paddle1 = 0;
    this.vars.paddle2 = 0;
    this.vars.borders = 1;
    this.vars.xPososhion = -198.144;
    this.vars.paddleFastnessPlayer1 = 16;
    this.vars.paddleFastnessPlayer2 = 17;
    this.vars.sideBorders = 0;
    this.vars.player1Score = 11;
    this.vars.player2Score = 3;

    this.watchers.paddleFastnessPlayer1 = new Watcher({
      label: "Paddle fastness Player 1",
      style: "slider",
      visible: true,
      value: () => this.vars.paddleFastnessPlayer1,
      setValue: value => {
        this.vars.paddleFastnessPlayer1 = value;
      },
      step: 1,
      min: 10,
      max: 50,
      x: 264,
      y: -144
    });
    this.watchers.paddleFastnessPlayer2 = new Watcher({
      label: "Paddle fastness Player 2",
      style: "slider",
      visible: true,
      value: () => this.vars.paddleFastnessPlayer2,
      setValue: value => {
        this.vars.paddleFastnessPlayer2 = value;
      },
      step: 1,
      min: 10,
      max: 50,
      x: 490,
      y: -144
    });
    this.watchers.player1Score = new Watcher({
      label: "PLayer 1 score",
      style: "large",
      visible: true,
      value: () => this.vars.player1Score,
      x: 358,
      y: 117
    });
    this.watchers.player2Score = new Watcher({
      label: "player 2 score",
      style: "large",
      visible: true,
      value: () => this.vars.player2Score,
      x: 565,
      y: 110
    });
  }
}
