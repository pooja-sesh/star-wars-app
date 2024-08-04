import {
    useQuery
  } from '@tanstack/react-query'
import { CharacterDetail, getCharacterApi } from '../apis/characterApi'

export default function useGetCharacters(currentPage: number) {
    return useQuery({
        queryKey: ['characters', currentPage],
        queryFn: () => getCharacterApi(currentPage),
        select: (characters) => characters.results.map((character: CharacterDetail) => character.name)
    })
}
