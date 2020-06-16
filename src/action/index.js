export const setActionMainScreen = (page) => {
    return {
        type: 'SET_MAIN_SCREEN',
        page: page
    }
};
export const setActionAddCamera = (camera) => {
    return {
        type: 'ADD_CAMERA',
        camera: camera
    }
};
export const setActionRemoveCamera = (camera) => {
    return {
        type: 'REMOVE_CAMERA',
        camera: camera
    }
};
