const {Character, Party} = require('../../../d3-static/2-medium/party')

describe('Party Class', () => {
    const player1 = new Character('Alex')
    const player2 = new Character('Banusha')
    const player3 = new Character('Cillian')
    const party1 = new Party(player3)
    const toThrowErrorFn1 = () => {
        new Party()
    }
    const toThrowErrorFn2 = () => {
        new Party(player3)
    }
    it('creates a new party object', () => {
        expect(party1).toEqual({leader: 'Cillian', members: [{name: 'Cillian', hp: 100, xp: 1, mana: 50}]})
        expect(party1.members.length).toBe(1)
    })
    it('pushes new leader to Party static property array', () => {

        expect(Party.currentLeaders).toEqual(['Cillian'])
    })
    it('throws the error "A party needs a leader!" if no leader is provided as argument', () => {
        expect(toThrowErrorFn1).toThrow("A party needs a leader!")
    })
    it('throws the error "${leader} is already leading a party!" if no leader is provided as argument', () => {
        expect(toThrowErrorFn2).toThrow("Cillian is already leading a party.")
    })
    it('keeps a tally of created parties', () => {
        expect(Party.totalParties).toBe(1)
    })
    it('keeps a list of the names of party leaders', () => {
        expect(Party.currentLeaders).toEqual(['Cillian'])
    })
})