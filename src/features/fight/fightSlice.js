import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, isDead: false, hasPlayed: false },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, isDead: false, hasPlayed: false },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, isDead: false, hasPlayed: false },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, isDead: false, hasPlayed: false },
    ],
    monster: {
        pv: '800',
        pvMax: '800',
        bgType: 'bg-danger',
        faType: 'fa-heart',
        barName: ' : pv'
    },
    checkDeads: 0,
    checkPlayed: 0
};

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const currentPlayer = state.players.find(player => player.id === action.payload.playerId)

            state.monster.pv -= action.payload.hit

            currentPlayer.hasPlayed = true;
            state.checkPlayed += 1;

            if (action.payload.specialAbility) {

            }
            if (state.monster.pv <= 0) {
                alert('Boss is dead')
            }

            action.payload.specialAbility && (currentPlayer.mana -= action.payload.manaCost);
            EndTurn(state)

        },

        hitBack: (state, action) => {

            const currentPlayer = state.players.find(player => player.id === action.payload.playerId)

            let monsterHitValue = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

            currentPlayer.pv -= monsterHitValue

            if (currentPlayer.pv - monsterHitValue <= 0) {
                currentPlayer.pv = 0
                
                
                currentPlayer.isDead = true
                
            }

            gameOver(state)

        },

        heal: (state, action) => {
            const currentPlayer = state.players.find(player => player.id === action.payload.playerId);
            if (currentPlayer.mana > 10) {

                currentPlayer.mana -= 10;
                currentPlayer.pv = 100;
                currentPlayer.hasPlayed = true;
                state.checkPlayed += 1;
                EndTurn(state)

            } else {
                alert('Not enough Mana')
            }
        },

        regenMana:(state, action) =>{
            const currentPlayer = state.players.find(player => player.id === action.payload.playerId);

            if (currentPlayer.pv - 10 <= 0) {
                currentPlayer.pv = 0
                state.checkDeads += 1;
                currentPlayer.isDead = true
                console.log(state.checkDeads);
            } else {
                currentPlayer.pv -= 10;
                currentPlayer.hasPlayed = true;
                state.checkPlayed += 1;
                EndTurn(state)

            }

            gameOver(state)
        }
    },
});

export const { hitMonster, hitBack, heal, regenMana } = fightSlice.actions

export default fightSlice.reducer;


function EndTurn(state){
    if(state.checkPlayed === 4){
        state.players.map(player => player.hasPlayed = false )
        state.checkPlayed = 0
    }
}


function gameOver(state){
    if (state.checkDeads === 4) {
        alert('You lose')
    }
}