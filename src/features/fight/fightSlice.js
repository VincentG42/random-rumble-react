import { createSlice } from "@reduxjs/toolkit";
import cloudAvatar from '../../assets/images/cloud.png'
import aerithAvatar from '../../assets/images/aerith.png'
import vincentAvatar from '../../assets/images/vincent.png'
import redxiiiAvatar from '../../assets/images/red-xiii.png'


const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "Cloud Strife", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, isDead: false, hasPlayed: false, avatar: cloudAvatar },
        { name: "Aerith Gainsborough", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, isDead: false, hasPlayed: false, avatar: aerithAvatar },
        { name: "Vincent Valentine", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, isDead: false, hasPlayed: false, avatar: vincentAvatar },
        { name: "Red XIII", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, isDead: false, hasPlayed: false, avatar: redxiiiAvatar },
    ],
    monster: {
        pv: '800',
        pvMax: '800',
        bgType: 'bg-danger',
        faType: 'fa-heart',
        barName: ' : pv'
    },
    checkDeads: 0,
   
};

export const fightSlice = createSlice({
    name: 'fight',
    initialState,
    reducers: {
        hitMonster: (state, action) => {
            const currentPlayer = state.players.find(player => player.id === action.payload.playerId)

            state.monster.pv -= action.payload.hit

            currentPlayer.hasPlayed = true;


            if (action.payload.specialAbility) {

            }

            action.payload.specialAbility && (currentPlayer.mana -= action.payload.manaCost);
            endTurn(state)

        },

        hitBack: (state, action) => {

            const currentPlayer = state.players.find(player => player.id === action.payload.playerId)

            let monsterHitValue = Math.floor(Math.random() * (50 - 25 + 1)) + 25;

            currentPlayer.pv -= monsterHitValue

            if (currentPlayer.pv - monsterHitValue <= 0) {
                currentPlayer.pv = 0

                state.checkDeads += 1
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
               
                endTurn(state)

            } else {
                alert('Not enough Mana')
            }
        },

        regenMana: (state, action) => {
            const currentPlayer = state.players.find(player => player.id === action.payload.playerId);


            if(currentPlayer.mana +10 >= currentPlayer.manaMax){
                currentPlayer.mana = currentPlayer.manaMax
            } else {

                currentPlayer.mana += 10;
            }
                endTurn(state)

        }
    },
});

export const { hitMonster, hitBack, heal, regenMana } = fightSlice.actions

export default fightSlice.reducer;


function endTurn(state) {
    const playersAlive = state.players.filter((player) => player.isDead === false)
    const allPlayersPlayed = playersAlive.every(player => player.hasPlayed === true);
    console.log(allPlayersPlayed);

    if(allPlayersPlayed) {
        playersAlive.map(player => {
            player.hasPlayed = false;
        });
    }


 


}


function gameOver(state) {
    if (state.checkDeads === 4) {
        alert('Game over')
    }
}