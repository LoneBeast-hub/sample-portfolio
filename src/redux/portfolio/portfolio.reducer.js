const INITIAL_STATE = {
    portfolio: null
}

const portfolioReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_PORTFOLIO_DATA':
            return({
                ...state,
                portfolio: action.payload
            })
        default:
            return state;
    }
}

export default portfolioReducer;