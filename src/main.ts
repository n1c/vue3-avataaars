import Avatar from '@/Avatar';
import Factory from '@/Factory';
import type { IAvatarProps, IOptionalAvatarProps } from '@/Types';
import { HatAndShirtColors, HairColors, SkinColors } from '@/Colors';
import Accessories from './parts/Accessories';
import Clothes from './parts/Clothes';
import Eyebrows from './parts/Eyebrows';
import Eyes from './parts/Eyes';
import FacialHair from './parts/FacialHair';
import GraphicShirt from './parts/GraphicShirt';
import Mouths from './parts/Mouths';
import Tops from './parts/Tops';

const Options = {
  Accessories: Object.keys(Accessories),
  HatAndShirtColors: Object.keys(HatAndShirtColors),
  HairColors: Object.keys(HairColors),
  SkinColors: Object.keys(SkinColors),
  Clothes: Object.keys(Clothes),
  Eyebrows: Object.keys(Eyebrows),
  Eyes: Object.keys(Eyes),
  FacialHair: Object.keys(FacialHair),
  GraphicShirt: Object.keys(GraphicShirt),
  Mouths: Object.keys(Mouths),
  Tops: Object.keys(Tops),
};

export {
  Avatar,
  Factory,
  Options,
  IAvatarProps,
  IOptionalAvatarProps,
};
