import { h, type VNode } from 'vue';
import type { ColorList, IAvatarProps } from '@/Types';
import Accessories from '@/parts/Accessories';
import Clothes from '@/parts/Clothes';
import Tops from '@/parts/Tops';
import FacialHair from '@/parts/FacialHair';
import GraphicShirt from '@/parts/GraphicShirt';
import Eyes from '@/parts/Eyes';
import Eyebrows from '@/parts/Eyebrows';
import Mouths from '@/parts/Mouths';

const makeCircle = (fill = '#6fb8e0'): VNode[] => [
  h('g', {
    id: 'Circle',
    'stroke-width': '1',
    'fill-rule': 'evenodd',
    transform: 'translate(12.000000, 40.000000)',
  }, [
    h('mask', {
      id: 'mask-1',
      fill: 'white',
    }, [
      h('use', {
        href: '#path-1',
      }),
    ]),
    h('use', {
      id: 'Circle-Background',
      fill: '#E6E6E6',
      href: '#path-1',
    }),
    h('g', {
      id: 'Color/Palette/Blue-01',
      mask: 'url(#mask-1)',
      fill,
    }, [
      h('rect', {
        id: 'Color',
        x: '0',
        y: '0',
        width: '240',
        height: '240',
      }),
    ]),
  ]),
  h('mask', {
    id: 'mask-2',
    fill: 'white',
  }, [
    h('use', {
      href: '#path-2',
    }),
  ]),
];

export default (props: IAvatarProps) => {
  const css: ColorList = {
    '--avataaar-hair-color': props.hairColor,
    '--avataaar-facial-hair-color': props.facialHairColor,
    '--avataaar-top-color': props.topColor,
    '--avataaar-shirt-color': props.clothesColor,
  };

  return h('svg', {
    viewBox: '0 0 264 280',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  }, [
    h('desc', 'vue3-avataaars'),
    h('defs', [
      h('circle', {
        id: 'path-1',
        cx: '120',
        cy: '120',
        r: '120',
      }),
      h('path', {
        id: 'path-2',
        d: 'M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z',
      }),
      h('path', {
        id: 'path-silhouette',
        d: 'M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z',
      }),
    ]),
    h('g', {
      id: 'Avataaar',
      stroke: 'none',
      'stroke-width': '1',
      fill: 'none',
      'fill-rule': 'evenodd',
    }, [
      h('g', {
        id: 'Avataaar/Circle',
        transform: 'translate(-825.000000, -1100.000000)',
      }, [
        h('g', {
          transform: 'translate(825.000000, 1100.000000)',
        }, [
          props.isCircle ? makeCircle(props.circleColor) : null,
          h('g', {
            id: 'Mask',
          }),
          h('g', {
            id: 'Avataaar',
            'stroke-width': '1',
            'fill-rule': 'evenodd',
            fill: 'black',
            mask: 'url(#mask-2)',
            style: css,
          }, [
            // Body
            h('g', {
              id: 'Body',
              transform: 'translate(32.000000, 36.000000)',
            }, [
              h('mask', {
                id: 'mask-silhouette',
                fill: 'white',
              }, [
                h('use', {
                  href: '#path-silhouette',
                }),
              ]),
              h('use', {
                fill: props.skinColor,
                href: '#path-silhouette',
              }),
              h('path', {
                id: 'Neck-Shadow',
                d: 'M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z',
                'fill-opacity': '0.100000001',
                fill: '#000000',
                mask: 'url(#mask-silhouette)',
              }),
            ]),
            h(Clothes[props.clothes]),
            props.clothes === 'GraphicShirt' ? h(GraphicShirt[props.graphicShirt]) : null,
            h(Eyes[props.eyes]),
            h(Eyebrows[props.eyebrows]),
            h(Mouths[props.mouth]),

            // Nose
            h('svg', [
              h('g', {
                fill: 'black',
                transform: 'translate(76.000000, 82.000000)',
              }, [
                h('g', {
                  id: 'Nose/Default',
                  transform: 'translate(28.000000, 40.000000)',
                  opacity: '0.16',
                }, [
                  h('path', {
                    id: 'Nose',
                    d: 'M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8',
                  }),
                ]),
              ]),
            ]),

            h(Tops[props.top]),
            h(FacialHair[props.facialHair]),
            h(Accessories[props.accessories]),
          ]),
        ]),
      ]),
    ]),
  ]);
};
