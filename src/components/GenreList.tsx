
import useGenres, { Genre } from "../hooks/useGenres"
import {List,ListItem,HStack,Image,Text, Spinner, Button} from "@chakra-ui/react"

interface Props{
  onSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null
}

const GenreList = ({selectGenre, onSelectGenre }: Props) => {
    const {data, isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>

  return (
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY="5px">
            <HStack >
                <Image boxSize="32px" borderRadius={8} src={genre.image_background}/>
                <Button fontWeight={genre.id === selectGenre?.id ? 'bold' : "normal"} onClick={() => onSelectGenre(genre)} fontSize='lg' variant="link">{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
  )
}
 
export default GenreList