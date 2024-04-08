import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, isDead: false },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, isDead: false },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, isDead: false },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, isDead: false },
    ],
    monster: {
        pv: '800',
        pvMax: '800',
        bgType: 'bg-danger',
        faType: 'fa-heart',
        barName: ' : pv'
    },
    checkDeads : 0,
};

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {

            state.monster.pv -= action.payload.hit


            if(action.payload.specialAbility){

            }
            if (state.monster.pv <= 0) {
                alert('Boss is dead')
            }
        },

        hitBack: (state, action) => {

            const currentPlayer = state.players[action.payload.playerId - 1]

            let monsterHitValue = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

            currentPlayer.pv  -= monsterHitValue

            if(currentPlayer.pv -monsterHitValue <= 0){
                currentPlayer.pv = 0
                state.checkDeads += 1;
                currentPlayer.isDead =true
                console.log(state.checkDeads);
            } 

            if( state.checkDeads === 4){
                alert('You lose')
            }

        }
    },
});

export const { hitMonster, hitBack } = fightSlice.actions

export default fightSlice.reducer;