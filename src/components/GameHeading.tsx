import { Heading } from "@chakra-ui/react"
import usePlatform from "../hooks/usePlatform"
import useGenre from "../hooks/useGenre"
import UseGameQueryStore from "../store"



const GameHeading = () => {

    const genreId = UseGameQueryStore(s => s.gameQuery.genreId)
    const genre = useGenre(genreId)

    const platformId = UseGameQueryStore(s => s.gameQuery.platformId)
    const platform = usePlatform(platformId)
   
    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
  )
}

export default GameHeading