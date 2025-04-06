import axios from "axios";

const ANIMAL_BASE_REST_API_URL = 'http://localhost:8080/animals';
const ANIMAL_REST_API_URL = 'http://localhost:8080/animal';
const ANIMAL_CREATE_BASE_REST_API_URL = 'http://localhost:8080/createAnimal';

class AnimalService{
    getAllAnimals(){
        return axios.get(ANIMAL_BASE_REST_API_URL)
    }

} 
export default new AnimalService()