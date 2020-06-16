const initialState = {
    cameras: [],
};

export default function cameraReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_CAMERA":
            return {
                ...state,
                cameras: action.camera
            };
        case "REMOVE_CAMERA":
            return {
                ...state,
                cameras: action.camera
            };
        default:
            return state;
    }
}