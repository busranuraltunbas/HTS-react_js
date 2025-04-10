import axios from "axios";

const ANIMAL_BASE_REST_API_URL = 'http://localhost:8080/animals';
const ANIMAL_REST_API_URL = 'http://localhost:8080/animal';
const ANIMAL_CREATE_BASE_REST_API_URL = 'http://localhost:8080/createAnimal';

class AnimalService{
    getAllAnimals(){
        return axios.get(ANIMAL_BASE_REST_API_URL)
    }

    createAnimal(animal){
        return axios.post(ANIMAL_CREATE_BASE_REST_API_URL, animal)
    }

    getAnimalById(animalId){
        return axios.get(ANIMAL_BASE_REST_API_URL + '/' + animalId)
    }

    updateAnimal(animalId, animal){
        return axios.put(ANIMAL_REST_API_URL + '/' + animalId, animal)
    }

    deleteAnimal(animalId){
        return axios.delete(ANIMAL_REST_API_URL + '/' + animalId)
    }

} 
export default new AnimalService()