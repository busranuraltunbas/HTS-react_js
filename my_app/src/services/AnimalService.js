import axios from "axios";

const ANIMAL_API_BASE_URL = 'http://localhost:8080/animals';

class AnimalService{
    getAllAnimals(){
        return axios.get(ANIMAL_API_BASE_URL)
    }

    createAnimal(animal){
        return axios.post(ANIMAL_API_BASE_URL, animal)
    }

    getAnimalById(id) {
        return axios.get(`${ANIMAL_API_BASE_URL}/${id}`);
    }

    updateAnimal(id, animal) {
        return axios.put(`${ANIMAL_API_BASE_URL}/${id}`, animal);
    }

    deleteAnimal(id) {
        return axios.delete(`${ANIMAL_API_BASE_URL}/${id}`);
    }

} 
export default new AnimalService()