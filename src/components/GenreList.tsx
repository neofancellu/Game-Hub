
import useGenres from "../hooks/useGenres"
import { Genre } from '../entities/Genre';
import {List,ListItem,HStack,Image,Text, Spinner, Button, Heading} from "@chakra-ui/react"
import UseGameQueryStore from "../store";



const GenreList = () => {
    const {data, isLoading, error} = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner/>

  const selectGenreId = UseGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = UseGameQueryStore(s => s.setGenreId);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
          {data?.results.map(genre => 
          <ListItem key={genre.id} paddingY="10px">
              <HStack >
                  <Image boxSize="32px" borderRadius={8} objectFit="cover" src={genre.image_background}/>
                  <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectGenreId ? 'bold' : "normal"} onClick={() => setSelectedGenreId(genre.id)} fontSize='lg' variant="link">{genre.name}</Button>
              </HStack>
          </ListItem>)}
      </List>
    </>
  )
}
 
export default GenreList