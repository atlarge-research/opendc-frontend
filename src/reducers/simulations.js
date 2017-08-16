import {
    ADD_SIMULATION_SUCCEEDED,
    CLOSE_NEW_SIMULATION_MODAL,
    DELETE_SIMULATION,
    OPEN_NEW_SIMULATION_MODAL,
    SET_AUTH_VISIBILITY_FILTER
} from "../actions/simulations";
import {FETCH_AUTHORIZATIONS_OF_CURRENT_USER_SUCCEEDED} from "../actions/users";

export function authorizationsOfCurrentUser(state = [], action) {
    switch (action.type) {
        case FETCH_AUTHORIZATIONS_OF_CURRENT_USER_SUCCEEDED:
            return action.authorizationsOfCurrentUser;
        case ADD_SIMULATION_SUCCEEDED:
            return [
                ...state,
                action.authorization
            ];
        case DELETE_SIMULATION:
            return [];
        default:
            return state;
    }
}

export function newSimulationModalVisible(state = false, action) {
    switch (action.type) {
        case OPEN_NEW_SIMULATION_MODAL:
            return true;
        case CLOSE_NEW_SIMULATION_MODAL:
            return false;
        default:
            return state;
    }
}

export function authVisibilityFilter(state = "SHOW_ALL", action) {
    switch (action.type) {
        case SET_AUTH_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}