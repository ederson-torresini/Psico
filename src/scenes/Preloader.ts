import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super({ key: "Preloader" });
  }

  create() {
    this.scene.stop();
    this.scene.start("Phase0");
  }
}
