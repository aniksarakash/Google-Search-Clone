export const initialState = {
    term:null
}

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}
        
const reducer = (state, action) => {
    console.log("reducer function was called");
    // console.log(action.type);

    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:

            const newState = {
                ...state, 
                term : action.term
            };
            return newState;
        
        default:
            return state;
    }
};      

export default reducer;