const initialState = {
    addModal: false,
    removeModal: false,
    saveChangeModal: false
};

export default function modalReducer(state = initialState, action) {

    switch (action.type) {
        case "OPEN_CLOSE_ADD_MODAL":
            return {
                ...state,
                addModal: !state.addModal
            };
        case "OPEN_CLOSE_REMOVE_MODAL":
            return {
                ...state,
                removeModal: !state.removeModal
            };
        case "SAVE_CHANGE_MODAL":
            return {
                ...state,
                saveChangeModal: !state.saveChangeModal
            };
        default:
            return state;
    }
}
