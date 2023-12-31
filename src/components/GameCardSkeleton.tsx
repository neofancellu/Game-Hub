import {Card, Skeleton, CardBody, SkeletonText} from "@chakra-ui/react"


const GameCardSkeleton = () => {
  return (
   <Card width="400px">
      <Skeleton height="450px" />
      <CardBody>
        <SkeletonText/>
      </CardBody>
   </Card>
  )
}

export default GameCardSkeleton