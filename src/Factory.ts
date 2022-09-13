import type { IAvatarProps, IOptionalAvatarProps } from '@/Types';
import { getRandomKey, getRandomValue } from '@/helpers';
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
  skinColor: props.skinColor ?? getRandomValue(SkinColors),
  hairColor: props.hairColor ?? getRandomValue(HairColors),
  topColor: props.topColor ?? getRandomValue(HatAndShirtColors),
  clothesColor: props.clothesColor ?? getRandomValue(HatAndShirtColors),
  facialHairColor: props.facialHairColor ?? getRandomValue(HairColors),

  eyes: props.eyes ?? getRandomKey(Eyes),
  eyebrows: props.eyebrows ?? getRandomKey(Eyebrows),
  mouth: props.mouth ?? getRandomKey(Mouths),
  top: props.top ?? getRandomKey(Tops),
  clothes: props.clothes ?? getRandomKey(Clothes),
  graphicShirt: props.graphicShirt ?? getRandomKey(GraphicShirt),
  facialHair: props.facialHair ?? getRandomKey(FacialHair),
  accessories: props.accessories ?? getRandomKey(Accessories),
});
