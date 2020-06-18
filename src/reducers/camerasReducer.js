const initialState = {
    cameras: [],
    remCamera: {},
};

export default function cameraReducer(state = initialState, action) {

    switch (action.type) {
        case "SET_CAMERA":
            return {
                ...state,
                cameras: action.camera
            };
        case "REMOVE_CAMERA":
            return {
                ...state,
                remCamera: action.remCamera
            };
        default:
            return state;
    }
}
