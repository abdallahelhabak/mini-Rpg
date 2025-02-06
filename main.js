const EMOJIS = {
  attack: "⚡️",
  magic: "🔮",
  heal: "🩹",
  ultimate: "💥",
  win: "🏆",
  defeat: "💀",
  levelUp: "⬆️",
  escapE: "🏃‍♂️",
};
class Character {
    // Constructor function to create a new character
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.magicAttack = Math.floor(Math.random() * 20) + 5;
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
        const damage = Math.max(this.magicAttack - enemy.defense);
        enemy.hp -= damage;
        console.log(`%c${EMOJIS.magic} ${this.name} casts magic on ${enemy.name} for ${damage} damage!`, `color: blue; font-weight: bold`);
        console.log(`${enemy.name} has ${enemy.hp} HP left`);
    }
    // heal function to heal the character
    heal() {
        if (this.healcount > 0) {
            const healAmount = Math.floor(Math.random() * 20) + 10;
            this.hp += healAmount;
            this.healcount--;
            console.log(`%c${EMOJIS.heal} ${this.name} heals for ${healAmount} HP!`, `color: green; font-weight: bold`);
            console.log(`${this.name} has ${this.hp} HP left`);
        } else {
            console.log(`%c${this.name} has no more heals left!`, `color: green; font-weight: bold`);
        }
    }
    tryToScape(enemy) {
        const scapeChance = Math.floor(Math.random() * 100);
        const escapeHope = 50 - enemy.escapePenalty; 
        if (scapeChance > escapeHope) {
            console.log(`%c${EMOJIS.escapE} ${this.name} tries to escape but fails!`, `color: green; font-weight: bold`);
        } else {
            console.log(`%c${EMOJIS.escapE} ${this.name} successfully escapes!`, `color: green; font-weight: bold`);
            return true;
        }
        
    }
}
