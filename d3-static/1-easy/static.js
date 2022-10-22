class Character {
    constructor (name) {
        this.name = name
        this.xp = 1
        this.hp = 100
        this.mana = 50
        Character.totalCharacters++
    }

    static totalCharacters = 0
}





module.exports = {Character}