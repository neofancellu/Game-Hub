import target from '../assets/target.png';
import thumbsUp from '../assets/thumbs_up.png';
import meh from '../assets/meh.png';
import { Image, ImageProps } from '@chakra-ui/react';


interface Props{
    rating: number;
}

const Emoji = ({rating}: Props) => {
 if (rating < 3) return null;

 const emojiMap: {[key: number]: ImageProps} = {
    3: {src: meh, alt: 'meh', boxSize:"25px"},
    4: {src: thumbsUp, alt: 'recommended', boxSize:"25px"},
    5: {src: target, alt: 'exceptional', boxSize:"25px"},
 }

  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji