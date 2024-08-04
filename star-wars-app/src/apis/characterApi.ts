import axios from 'axios'

export interface CharacterDetail {
   name: string
}

export interface Characters {
   results: CharacterDetail[]
} 

export async function getCharacterApi(pageNumber: number): Promise<Characters> {
   const response = await axios.get(`https://swapi.dev/api/people/?page=${pageNumber}`)
   return response.data
}
