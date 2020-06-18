export const setActionMainScreen = (page) => {
    return {
        type: 'SET_MAIN_SCREEN',
        page: page
    }
};
export const actionSetCamera = (camera) => {
    return {
        type: 'SET_CAMERA',
        camera: camera
    }
};
export const actionRemoveCamera = (remCamera) => {
    return {
        type: 'REMOVE_CAMERA',
        remCamera: remCamera
    }
};
export const actionOpenCloseAddModal = () => {
    return {
        type: 'OPEN_CLOSE_ADD_MODAL'
    }
};
export const actionOpenCloseRemoveModal = () => {
    return {
        type: 'OPEN_CLOSE_REMOVE_MODAL'
    }
};
