function solve() {

    let createHero = {

        mage: function (name) {
            let mageHero = {
                name,
                health: 100,
                mana: 100,
                cast: function(spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell} `)
                }
            }
            return mageHero;
        },

        fighter: function (name) {
            let fighterHero =  {
                name,
                health: 100,
                stamina: 100,
                fight: function() {
                    this.stamina--;
                    console.log(`${this.name} slashes at foe!`);
                }
            }
            return fighterHero;
        }
    }
    return createHero;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);

