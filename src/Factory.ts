import type { IAvatarProps, IOptionalAvatarProps } from '@/Types';
import { getRandomKey } from '@/helpers';
import { HairColors, HatAndShirtColors, SkinColors } from '@/Colors';
import Accessories from '@/parts/Accessories';
import Tops from '@/parts/Tops';
import Clothes from '@/parts/Clothes';
import FacialHair from '@/parts/FacialHair';
import GraphicShirt from '@/parts/GraphicShirt';
import Eyes from '@/parts/Eyes';
import Eyebrows from '@/parts/Eyebrows';
import Mouths from '@/parts/Mouths';

// Takes props, fills in any missing values with randoms
export default (props: IOptionalAvatarProps = {}): IAvatarProps => ({
  isCircle: props.isCircle === undefined ? false : props.isCircle,
  circleColor: props.circleColor ?? undefined,
  skinColor: props.skinColor ?? getRandomKey(SkinColors),
  hairColor: props.hairColor ?? getRandomKey(HairColors),
  eyes: props.eyes ?? getRandomKey(Eyes),
  eyebrows: props.eyebrows ?? getRandomKey(Eyebrows),
  mouth: props.mouth ?? getRandomKey(Mouths),
  top: props.top ?? getRandomKey(Tops),
  topColor: props.topColor ?? getRandomKey(HatAndShirtColors),
  clothes: props.clothes ?? getRandomKey(Clothes),
  clothesColor: props.clothesColor ?? getRandomKey(HatAndShirtColors),
  graphicShirt: props.graphicShirt ?? getRandomKey(GraphicShirt),
  facialHairColor: props.facialHairColor ?? getRandomKey(HairColors),
  facialHair: props.facialHair ?? getRandomKey(FacialHair),
  accessories: props.accessories ?? getRandomKey(Accessories),
});
