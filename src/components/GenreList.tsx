
import useGenres from "../hooks/useGenres"
import {List,ListItem,HStack,Image,Text, Spinner} from "@chakra-ui/react"

const GenreList = () => {
    const {data, isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>

  return (
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY="5px">
            <HStack >
                <Image boxSize="32px" borderRadius={8} src={genre.image_background}/>
                <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
        </ListItem>)}
    </List>
  )
}
 
export default GenreList