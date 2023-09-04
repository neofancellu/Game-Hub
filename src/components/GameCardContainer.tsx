import {Box} from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children:ReactNode
}

const GameCardContainer = ({children}: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden" height="450px">
        {children}
    </Box>
  )
}

export default GameCardContainer