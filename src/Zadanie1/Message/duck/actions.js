import types from "./types"

export const showMessage = (data) => ({
    type: types.SHOW_MESSAGE,
    payload: data
})