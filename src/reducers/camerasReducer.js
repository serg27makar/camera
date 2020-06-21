const initialState = {
    cameras: [],
    remCamera: {},
    selectCamera: {},
    settingsChange: {},
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
        case "SELECT_CAMERA":
            return {
                ...state,
                selectCamera: action.selectCamera
            };
        case "SETTINGS_CHANGE":
            return {
                ...state,
                settingsChange: action.settingsChange
            };
        default:
            return state;
    }
}
