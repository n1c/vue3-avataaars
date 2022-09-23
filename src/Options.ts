/* eslint-disable global-require */
import type { ColorList } from '@/Types';
import { Options as Accessories } from '@/parts/Accessories';
import { Options as Eyes } from '@/parts/Eyes';
import { Options as Eyebrows } from '@/parts/Eyebrows';
import { Options as FacialHair } from '@/parts/FacialHair';
import { Options as Mouths } from '@/parts/Mouths';
import { Options as Tops } from '@/parts/Tops';
import { Options as Clothes } from '@/parts/Clothes';
import { Options as GraphicShirt } from '@/parts/GraphicShirt';

export const AccessoriesOptions = Accessories;
export const EyesOptions = Eyes;
export const EyebrowsOptions = Eyebrows;
export const FacialHairOptions = FacialHair;
export const MouthsOptions = Mouths;
export const TopsOptions = Tops;
export const ClothesOptions = Clothes;
export const GraphicShirtOptions = GraphicShirt;

export const HatAndShirtColors: ColorList = {
  Black: '#262E33',
  Blue01: '#65C9FF',
  Blue02: '#5199E4',
  Blue03: '#25557C',
  Gray01: '#E6E6E6',
  Gray02: '#929598',
  Heather: '#3C4F5C',
  PastelBlue: '#B1E2FF',
  PastelGreen: '#A7FFC4',
  PastelOrange: '#FFBC69',
  PastelRed: '#FFAFB9',
  PastelYellow: '#FFFFB1',
  Pink: '#FF488E',
  Red: '#FF5C5C',
  White: '#FFFFFF',
};

export const HairColors: ColorList = {
  Auburn: '#A55728',
  Black: '#2C1B18',
  Blonde: '#B58143',
  BlondeGolden: '#D6B370',
  Brown: '#724133',
  BrownDark: '#4A312C',
  PastelPink: '#F59797',
  Platinum: '#ECDCBF',
  Red: '#C93305',
  SilverGray: '#E8E1E1',
};

export const SkinColors: ColorList = {
  Tanned: '#FD9841',
  Yellow: '#F8D25C',
  Pale: '#FFDBB4',
  Light: '#EDB98A',
  Brown: '#D08B5B',
  DarkBrown: '#AE5D29',
  Black: '#614335',
};
