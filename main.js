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
    // Constructor function to create a new character
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.attack = Math.floor(Math.random() * 15) + 10;
        this.defense = Math.floor(Math.random() * 10) + 5;
        this.healcount = 3;
    }
    
    // attackEnemy function to attack the enemy
    attackEnemy(enemy) {
        const damage = Math.max(this.attack - enemy.defense);
        enemy.hp -= damage;
        console.log(`%c${EMOJIS.attack} ${this.name} attacks ${enemy.name} for ${damage} damage!`, `color: red; font-weight: bold` );
        console.log(`${enemy.name} has ${enemy.hp} HP left`);
    }
    // cast Magic function to cast magic on the enemy
    castMagic(enemy) {
        const damage = Math.max(this.attack - enemy.defense);
        enemy.hp -= damage;
        console.log(`%c${EMOJIS.magic} ${this.name} casts magic on ${enemy.name} for ${damage} damage!`, `color: blue; font-weight: bold`);
        console.log(`${enemy.name} has ${enemy.hp} HP left`);
    }



}
