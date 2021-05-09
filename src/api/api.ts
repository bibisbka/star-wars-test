import axios from 'axios'
import {StarshipsResponseType} from "../types/types";

const instance = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export const getStarshipsList = (page: number) => {
  return instance.get<StarshipsResponseType>(`starships/`, {params: {page}}).then(response => response.data)
}
