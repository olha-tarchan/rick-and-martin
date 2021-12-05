import { ADD_HERO } from './action';

export let heroes = [
    {
        id: 123,
        name: '1',
        email: "2",
        gender: "3",
        url: "4"
    }
    ]

export let reducer = (state = heroes, action) => {
    let newHeros;
    switch (action.type) {
        case ADD_HERO:
            newHeros = [...state];
            newHeros.push(action.payload);
            return newHeros;

    }
    return state;
}