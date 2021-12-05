import { ADD_HERO } from './action';

export let reducer = (state = [], action) => {
    let newHeroes;
    switch (action.type) {
        case ADD_HERO:
            newHeroes = [...state];
            newHeroes.push(action.payload);
            return newHeroes;
        default:
            return state
    }
}