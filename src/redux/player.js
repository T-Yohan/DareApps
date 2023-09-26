import { createSlice } from "@reduxjs/toolkit"

const initState = {
                players:[],
                position : 0,
}

export const player = createSlice({
    name:'player',
    initialState:initState,
    reducers:{
        addPlayer:(state,action)=>{//ajouter un joueur
            // console.log('action.payload :',action.payload);
            //ajoute un élément à la fin d'un tableau et retourne la nouvelle valeur
            state.players.push(action.payload);
            return state;
        },
        delPlayer:(state,action)=>{//supprimer un joueur
            const newPlayers = state.players.filter(item=>item.id !=action.payload.id);//filtrer les éléments à supprimer
            // console.log(newPlayers);
            //supprimer un joueur de la liste
            const newState = {
                players : newPlayers,
            position: state.position,
            }
            
            return newState;
        },
        resetPlayer:(state,action)=>{//vide la liste des joueurs
            console.log('vider');
            return initState ;
        },
    }
})

export const {addPlayer,delPlayer,resetPlayer} = player.actions;
export default player.reducer;