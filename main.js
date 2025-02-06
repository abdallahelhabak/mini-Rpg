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
        this.magicCount = 3; // Add a counter for magic attacks
    }
    
    
    // attackEnemy function to attack the enemy
    attackEnemy(enemy) {
        
        const damage = Math.max(1, this.attack - enemy.defense);
        enemy.hp -= damage;
        console.log(`%c${EMOJIS.attack} ${this.name} attacks ${enemy.name} for ${damage} damage!`, `color: red; font-weight: bold` );
        console.log(`${enemy.name} has ${enemy.hp} HP left`);
    }
    
    // cast Magic function to cast magic on the enemy
    castMagic(enemy) {
        if (this.magicCount > 0) {
            const damage = Math.max(4, this.magicAttack - enemy.defense);
            enemy.hp -= damage;
            this.magicCount--;
            console.log(`%c${EMOJIS.magic} ${this.name} casts Avada Kedavra ${EMOJIS.defeat}  on ${enemy.name} for ${damage} damage!`, `color: blue; font-weight: bold`);
            console.log(`${enemy.name} has ${enemy.hp} HP left`);
            console.log(`${this.name} can cast magic ${this.magicCount} more times`);
        } else {
            console.log(`%c${this.name} has no more magic attacks left!`, `color: blue; font-weight: bold`);
        }
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
    tryToEscape(enemy) {
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
// Create the enemy class
class Enemy {
    constructor(name,hp,escapePenalty) {
        this.name = name;
        this.hp = hp;
        this.attack = Math.floor(Math.random() * 15) + 10;
        this.defense = Math.floor(Math.random() * 10) + 5;
        this.escapePenalty = escapePenalty;
    }
    // attack function to attack the character
    attackCharacter(character) {
        const damage = Math.max(1,this.attack - character.defense);
        character.hp -= damage;
        console.log(`%c${this.name} attacks ${character.name} for ${damage} damage!`, `color: red; font-weight: bold`);
        console.log(`${character.name} has ${character.hp} HP left`);
    }
}

// Create Evil characters of Harry Potter world
function randomEnemy() {
    const enemies = [
        new Enemy("Bellatrix", 100, 20),
        new Enemy("Lord Voldemort", 100, 40),
        new Enemy("Peter Pettigrew", 65, 75),          
        new Enemy("Draco Malfoy", 60, 70),             
        new Enemy("Quirinus Quirrell", 70, 65),        
        new Enemy("Dolores Umbridge", 75, 65),        
        new Enemy("Lucius Malfoy", 70, 60)
    ];
    return enemies[Math.floor(Math.random() * enemies.length)];
}

// Create the  main function of the RPG to start the battle
function gameLoop() {
    const playerName = prompt("Enter the name of your character from Harry Potter world: ");
    const player = new Character(playerName); // Create a new character
    let enemy = randomEnemy();


    // when enemy appears
    console.log(`%cAn enemy ${enemy.name} has appeared!`, `color: red; font-weight: bold`);
    console.log(`%c${player.name} vs ${enemy.name}`, `color: green; font-weight: bold`);

    // Battle starts
    while (player.hp > 0 && enemy.hp > 0) {
        const action = prompt("Select the number of an action:\n 1. Attack\n 2. Magic\n 3. Heal\n 4. Escape");
        if (action === "1") {
            player.attackEnemy(enemy);
        } else if (action === "2") {
            player.castMagic(enemy);
        } else if (action === "3") {
            player.heal();
        } else if (action === "4") {
            if (player.tryToEscape(enemy)) {
                break;
            }
        } else {
            console.log("Invalid action. Please enter a number between 1 and 4.");
        }
    }
    
    // Enemy attacks
    if (enemy.hp > 0) {
        enemy.attackCharacter(player);
    }
    }
    // Check who won
    if (player.hp <= 0) {
        console.log(`%c${EMOJIS.defeat} ${player.name} has been defeated by ${enemy.name}!`, `color: red; font-weight: bold`);
    } else if (enemy.hp < 0) {
        console.log(`%c${EMOJIS.win} ${player.name} has defeated ${enemy.name}!`, `color: green; font-weight: bold`);
    }

