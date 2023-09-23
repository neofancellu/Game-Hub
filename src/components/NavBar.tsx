import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';

interface Props{
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack  padding='10px'>
        <Image src={logo} boxSize='60px' borderRadius={10} />
        <SearchInput onSearch={onSearch} />
        <ColourModeSwitch/>
    </HStack>
  )
}

export default NavBar