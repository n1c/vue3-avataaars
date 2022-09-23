import type { ComponentList } from '@/Types';

import BeardMajestic from '@/parts/facialHair/BeardMajestic.vue';
import BeartLight from '@/parts/facialHair/BeartLight.vue';
import MoustacheFancy from '@/parts/facialHair/MoustacheFancy.vue';
import BeardMedium from '@/parts/facialHair/BeardMedium.vue';
import Blank from '@/parts/facialHair/Blank.vue';
import MoustacheMagnum from '@/parts/facialHair/MoustacheMagnum.vue';

const FacialHair: ComponentList = {
  BeardMajestic,
  BeartLight,
  MoustacheFancy,
  BeardMedium,
  Blank,
  MoustacheMagnum,
};

export const Options = Object.keys(FacialHair);
export default FacialHair;
