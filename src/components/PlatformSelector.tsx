import { Menu,MenuButton,Button,MenuList,MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform"
import UseGameQueryStore from "../store"



const PlatformSelector = () => {
    const {data,error} = usePlatforms()
    const setSelectedPlatformId = UseGameQueryStore(s => s.setPlatformId)
    const selectedPlatformId = UseGameQueryStore(s => s.gameQuery.platformId)
    const selectedPlatform =usePlatform(selectedPlatformId)

  if (error) return null
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}  
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector