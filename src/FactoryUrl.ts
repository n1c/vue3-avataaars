import Factory from '@/Factory';
import CleanProps from '@/CleanProps';
import type { IOptionalAvatarProps } from '@/Types';
import md5 from 'md5';

export default (props: IOptionalAvatarProps = {}): string => {
  const fullProps = CleanProps(Factory(props)) as unknown as Record<string, string>;
  const hash = md5(JSON.stringify(fullProps));

  const query = new URLSearchParams({ ...fullProps, hash })
    .toString()
    .replaceAll('%23', ''); // Remove # in colours

  return `https://vue3-avataaars.com/svg?${query}`;
};

export const VerifyProps = (props: IOptionalAvatarProps, hash: string): boolean => {
  const cleanProps = CleanProps(props);
  return hash === md5(JSON.stringify(cleanProps));
};
