import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius={10} />
        <ColourModeSwitch/>
    </HStack>
  )
}

export default NavBar