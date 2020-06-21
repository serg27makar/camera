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
export const actionSelectCamera = (selectCamera) => {
    return {
        type: 'SELECT_CAMERA',
        selectCamera: selectCamera
    }
};
export const actionSettingsChange = (settingsChange) => {
    return {
        type: 'SETTINGS_CHANGE',
        settingsChange: settingsChange
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
export const actionOpenCloseSaveChangeModal = () => {
    return {
        type: 'SAVE_CHANGE_MODAL'
    }
};
