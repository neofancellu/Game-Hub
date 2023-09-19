import { Menu,MenuButton,MenuList,MenuItem, Button} from "@chakra-ui/react"
import usePlatforms from "../hooks/usePlatforms"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
    const {data,error} = usePlatforms()

  if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: Relevance</MenuButton>
        <MenuList>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average Rating</MenuItem>  
        </MenuList>
    </Menu>
  )
}

export default SortSelector