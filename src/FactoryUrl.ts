import Factory from '@/Factory';
import type { IOptionalAvatarProps } from '@/Types';

const cleanProps = (props: IOptionalAvatarProps): IOptionalAvatarProps => {
  const p = { ...props };

  Object.keys(p).forEach((e) => {
    if (p[e as keyof IOptionalAvatarProps] === undefined) {
      delete p[e as keyof IOptionalAvatarProps];
    }
  });

  return p;
};

export default (props: IOptionalAvatarProps = {}): string => {
  const fullProps = cleanProps(Factory(props)) as unknown as Record<string, string>;

  const query = new URLSearchParams(fullProps)
    .toString()
    .replaceAll('%23', ''); // Remove # in colours

  return `https://vue3-avataaars.com/svg?${query}`;
};
