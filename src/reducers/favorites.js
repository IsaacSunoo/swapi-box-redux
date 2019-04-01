export const favorites = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.name];
        case 'REMOVE_FAVORITE':
            return state.filter(name => name !== action.name);
        default:
            return state;
    }
}