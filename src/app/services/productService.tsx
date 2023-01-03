import axios from "axios";

const API_URL = "http://localhost:5000/api/";

export class ProductService {

    static getAll() {
        return axios.get(API_URL + "products");
    }

    static get(id: number) {
        return axios.get(API_URL + "products/" + id);
    }

    static create(product: any) {
        return axios.post(API_URL + "products", product);
    }

    static update(id: number, product: any) {
        return axios.put(API_URL + "products/" + id, product);
    }

    static delete(id: number) {
        return axios.delete(API_URL + "products/" + id);
    }
}