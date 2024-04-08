import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    // TODO : Compléter 'players' et 'monster'
    players: [
        { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
        { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
        { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
        { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
    ],
    monster: {
        pv :'800',
        pvMax :'800',
        bgType :'bg-danger',
        faType:'fa-heart',
        barName :' : pv'
    },
};

export const fightSlice = createSlice({
    name: "fight",
    initialState,
    reducers: {},
});

export default fightSlice.reducer;