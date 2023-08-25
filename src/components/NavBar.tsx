import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
        <Image src={logo} boxSize='60px' />
        <ColourModeSwitch/>
    </HStack>
  )
}

export default NavBar