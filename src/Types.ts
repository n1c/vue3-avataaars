/* eslint-disable no-multiple-empty-lines */
import type { VNode } from 'vue';
import type { HairColors, HatAndShirtColors, SkinColors } from '@/Colors';
import type Accessories from '@/parts/Accessories';
import type Clothes from '@/parts/Clothes';
import type Tops from '@/parts/Tops';
import type FacialHair from '@/parts/FacialHair';
import type GraphicShirt from '@/parts/GraphicShirt';
import type Eyes from '@/parts/Eyes';
import type Eyebrows from '@/parts/Eyebrows';
import type Mouths from '@/parts/Mouths';

export type Hex = `#${string}`;
export type ColorList = Record<string, Hex>;

export type ComponentList = Record<string, VNode>;

export interface IAvatarProps {
  isCircle: boolean,
  circleColor?: Hex,
  skinColor: keyof typeof SkinColors,
  clothes: keyof typeof Clothes,
  clothesColor: keyof typeof HatAndShirtColors,
  graphicShirt: keyof typeof GraphicShirt,
  hairColor: keyof typeof HairColors,
  top: keyof typeof Tops,
  topColor: keyof typeof HatAndShirtColors,
  facialHairColor: keyof typeof HairColors,
  accessories: keyof typeof Accessories,
  facialHair: keyof typeof FacialHair,
  eyes: keyof typeof Eyes,
  eyebrows: keyof typeof Eyebrows,
  mouth: keyof typeof Mouths,
}

export type IOptionalAvatarProps = Partial<IAvatarProps>;
