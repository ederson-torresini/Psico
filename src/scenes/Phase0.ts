import { Scene } from "phaser";

export class Phase0 extends Scene {
  clarinha: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor() {
    super({ key: "Phase0" });
  }

  preload() {
    this.load.spritesheet("clarinha", "assets/clarinha.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.clarinha = this.physics.add.sprite(400, 225, "clarinha");

    this.anims.create({
      key: "andar-direita",
      frames: this.anims.generateFrameNumbers("clarinha", {
        start: 87,
        end: 95,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.clarinha.play("andar-direita");
    this.clarinha.setVelocityX(100);
  }
}
