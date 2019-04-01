export const addFavorite = name => ({
    type: 'ADD_FAVORITE',
    name
});

export const removeFavorite = name => ({
    type: 'REMOVE_FAVORITE',
    name
})