import { Menu,MenuButton,MenuList,MenuItem, Button} from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import UseGameQueryStore from "../store"



const SortSelector = () => {
    const sortOrders = [
        {value:'', label:'Relevance'},
        {value:'-added', label:'Date added'},
        {value:'name', label:'Name'},
        {value:'-released', label:'Release date'},
        {value:'-metacritic', label:'Popularity'},
        {value:'-rating', label:'Average rating'},
    ]
    const setSordOrder = UseGameQueryStore(s => s.setSortOrder);
    const sortOrder = UseGameQueryStore(s => s.gameQuery.sortOrder);
    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by: {currentSortOrder?.label || 'Relevance'}</MenuButton>
        <MenuList>
           {sortOrders.map(order => <MenuItem onClick={() => setSordOrder(order.value )} key={order.value}>{order.label}</MenuItem>)}  
        </MenuList>
    </Menu>
  )
}

export default SortSelector