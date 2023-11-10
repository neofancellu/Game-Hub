import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius={10} />
        <SearchInput  />
        <ColourModeSwitch/>
    </HStack>
  )
}

export default NavBar