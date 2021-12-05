export const ADD_HERO = "ADD_HERO";

export function addHeroNew(hero) {
    return {
        type:ADD_HERO,
        payload: hero,
    }
}

