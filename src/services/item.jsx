import { api } from "../http-common";

// class ItemDataService {
//   findAll() {
//     return axios.get("/item");
//   }

//   findById(id) {
//     return axios.get(`/item/${id}`);
//   }

//   add(data) {
//     return axios.post("/item", data);
//   }

//   editById(id, data) {
//     return axios.put(`/item/${id}`, data);
//   }

//   removeById(id) {
//     return axios.delete(`/item/${id}`);
//   }
// }

// export default ItemDataService();

const add = (data) => api.post("/item", data);
const findAll = () => api.get("/item");
const findById = (id) => api.get(`/item/${id}`);
const editById = (id, data) => api.put(`/item/${id}`, data);
const removeById = (id) => api.delete(`/item/${id}`);
export { add, findAll, findById, editById, removeById };
