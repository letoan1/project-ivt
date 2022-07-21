import { ACTION } from "../../constants/ActionType"

export const getAllProducts = (payload) => {
    return {
        type: ACTION.TYPE.GET,
        payload
    }
}

export const addNewProduct = (payload) => {
    return {
        type: ACTION.TYPE.POST,
        payload
    }
}

export const updateProduct = (payload) => {
    return {
        type: ACTION.TYPE.PUT,
        payload
    }
}

export const deleteProduct = (payload) => {
    return {
        type: ACTION.TYPE.DELETE,
        payload
    }
}