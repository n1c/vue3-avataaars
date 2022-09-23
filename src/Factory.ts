import type { IAvatarProps, IOptionalAvatarProps } from '@/Types';
import { getRandomElement, getRandomValue } from '@/helpers';
import * as Options from '@/Options';

// Takes props, fills in any missing values with randoms
export default (props: IOptionalAvatarProps = {}): IAvatarProps => ({
  isCircle: props.isCircle === undefined ? false : props.isCircle,

  circleColor: props.circleColor ?? undefined,
  skinColor: props.skinColor ?? getRandomValue(Options.SkinColors),
  hairColor: props.hairColor ?? getRandomValue(Options.HairColors),
  topColor: props.topColor ?? getRandomValue(Options.HatAndShirtColors),
  clothesColor: props.clothesColor ?? getRandomValue(Options.HatAndShirtColors),
  facialHairColor: props.facialHairColor ?? getRandomValue(Options.HairColors),

  accessories: props.accessories ?? getRandomElement(Options.AccessoriesOptions),
  eyes: props.eyes ?? getRandomElement(Options.EyesOptions),
  eyebrows: props.eyebrows ?? getRandomElement(Options.EyebrowsOptions),
  mouth: props.mouth ?? getRandomElement(Options.MouthsOptions),
  top: props.top ?? getRandomElement(Options.TopsOptions),
  clothes: props.clothes ?? getRandomElement(Options.ClothesOptions),
  graphicShirt: props.graphicShirt ?? getRandomElement(Options.GraphicShirtOptions),
  facialHair: props.facialHair ?? getRandomElement(Options.FacialHairOptions),
});
