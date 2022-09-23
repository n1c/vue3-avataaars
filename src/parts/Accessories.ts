import type { ComponentList } from '@/Types';

import Blank from '@/parts/accessories/Blank.vue';
import Prescription01 from '@/parts/accessories/Prescription01.vue';
import Round from '@/parts/accessories/Round.vue';
import Wayfarers from '@/parts/accessories/Wayfarers.vue';
import Kurt from '@/parts/accessories/Kurt.vue';
import Prescription02 from '@/parts/accessories/Prescription02.vue';
import Sunglasses from '@/parts/accessories/Sunglasses.vue';

const Accessories: ComponentList = {
  Blank,
  Prescription01,
  Round,
  Wayfarers,
  Kurt,
  Prescription02,
  Sunglasses,
};

export default Accessories;
export const Options = Object.keys(Accessories);
