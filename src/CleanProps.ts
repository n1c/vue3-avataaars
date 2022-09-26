import type { IOptionalAvatarProps } from '@/Types';

export default (props: IOptionalAvatarProps): IOptionalAvatarProps => {
  const p = { ...props };

  Object.keys(p).forEach((e) => {
    if (p[e as keyof IOptionalAvatarProps] === undefined) {
      delete p[e as keyof IOptionalAvatarProps];
    }
  });

  return p;
};
