import type { IAvatarProps, IOptionalAvatarProps } from '@/Types';
import { getRandomElement, getRandomValue } from '@/helpers';
import { HairColors, HatAndShirtColors, SkinColors } from '@/Colors';
import * as Options from '@/Options';

// Takes props, fills in any missing values with randoms
export default (props: IOptionalAvatarProps = {}): IAvatarProps => ({
  isCircle: props.isCircle === undefined ? false : props.isCircle,

  circleColor: props.circleColor ?? undefined,
  skinColor: props.skinColor ?? getRandomValue(SkinColors),
  hairColor: props.hairColor ?? getRandomValue(HairColors),
  topColor: props.topColor ?? getRandomValue(HatAndShirtColors),
  clothesColor: props.clothesColor ?? getRandomValue(HatAndShirtColors),
  facialHairColor: props.facialHairColor ?? getRandomValue(HairColors),

  accessories: props.accessories ?? getRandomElement(Options.Accessories),
  eyes: props.eyes ?? getRandomElement(Options.Eyes),
  eyebrows: props.eyebrows ?? getRandomElement(Options.Eyebrows),
  mouth: props.mouth ?? getRandomElement(Options.Mouths),
  top: props.top ?? getRandomElement(Options.Tops),
  clothes: props.clothes ?? getRandomElement(Options.Clothes),
  graphicShirt: props.graphicShirt ?? getRandomElement(Options.GraphicShirt),
  facialHair: props.facialHair ?? getRandomElement(Options.FacialHair),
});
