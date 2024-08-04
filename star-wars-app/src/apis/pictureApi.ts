import axios from 'axios'

export async function getPictureApi(seed: number) {
   return await axios.get(`https://picsum.photos/seed/${seed}/info`)
   .then(response => response.data)
   .catch(error => error)
}
