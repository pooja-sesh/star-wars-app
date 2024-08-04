import { getPictureApi } from "../apis/pictureApi"
import useGetCharacters from "../hooks/useGetCharacters"
import {
    useQueries
  } from '@tanstack/react-query'

export default function CharacterListPage() {
    const { data: characterNames, isLoading: charactersIsLoading } = useGetCharacters(3)

    const characterPicturesHook = useQueries({
        queries: characterNames
        ? characterNames.map((seed: any) => {
            return {
                queryKey: ['pictures', seed],
                queryFn: () => getPictureApi(seed)
            }
        }) 
        : [],
    })

    if (charactersIsLoading || characterPicturesHook.some((item) => item.isLoading)) {
        return <h1 className="text-amber-200 mb-12">Loading...</h1>
    }

    console.log(characterPicturesHook[0].data)

    return (
        <>
            <h1 className="text-amber-200 mb-12">Star Wars Characters</h1>
            <div className="flex max-w-[1000px] justify-center">
                
                <div className="flex flex-wrap gap-4 justify-center">
                    {characterNames!.map((characterName: any, i: number) => {
                        return (
                        <div key={characterName} className="p-2 mb-2.5 min-h-40 min-w-40 bg-white text-black rounded-md">
                            {characterName}
                            {/* <img src={characterPicturesHook[i].data.url}></img> */}
                        </div>)
                    })}
                </div>
                
            </div>
        </>
    )
}
