import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player1 from "./Player1/Player1.js";
import Ball from "./Ball/Ball.js";
import Player2 from "./Player2/Player2.js";
import Border from "./Border/Border.js";
import SideBorder from "./SideBorder/SideBorder.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player1: new Player1({
    x: -205,
    y: -141,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Ball: new Ball({
    x: -198.144,
    y: 173.832,
    direction: -101.5369590328155,
    costumeNumber: 2,
    size: 60,
    visible: true,
    layerOrder: 5
  }),
  Player2: new Player2({
    x: 210.8615475274438,
    y: 137,
    direction: 0,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Border: new Border({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  SideBorder: new SideBorder({
    x: -4,
    y: -21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
