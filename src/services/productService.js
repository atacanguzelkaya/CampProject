import axios from "axios";

export default class ProductService{
    getProducts() {
        return axios.get("https://localhost:3001/api/products/getall")
    }

}