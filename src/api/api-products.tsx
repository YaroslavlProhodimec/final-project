import axios from "axios";

export const appAPI = {
    app() {
        return   axios.get('https://64542d14c18adbbdfeb0f6bc.mockapi.io/items')
    }
}
