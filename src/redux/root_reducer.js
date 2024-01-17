import { combineReducers } from "redux";
// reducers
import portfolioReducer from "./portfolio/portfolio.reducer";

export default combineReducers({
    portfolioData: portfolioReducer
})