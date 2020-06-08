const initialState = {
    page: "",
};

export default function mainScreenInfo(state = initialState, action) {

    switch (action.type) {
        case "SET_MAIN_SCREEN":
            return {
                ...state,
                page: action.page
            };
        default:
            return state;
    }
}