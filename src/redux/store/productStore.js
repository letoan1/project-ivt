import { createStore } from 'redux'
import productReducer from '../Reducers/productReducer';

function saveToLocalStorage(state) {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem("products", serialisedState);
    } catch (e) {
        console.warn(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("products");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}

const productStore = createStore(productReducer, loadFromLocalStorage());
productStore.subscribe(() => saveToLocalStorage(productStore.getState()));

export default productStore
