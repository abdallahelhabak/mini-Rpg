const EMOJIS = {
  attack: "⚡️",
  magic: "🔮",
  heal: "🩹",
  ultimate: "💥",
  win: "🏆",
  defeat: "💀",
  levelUp: "⬆️",
};
class Character {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.attack = Math.floor(Math.random() * 15) + 10;
        this.defense = Math.floor(Math.random() * 10) + 5;
        this.healcount = 3;
    }
}

