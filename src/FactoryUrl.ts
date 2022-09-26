import Factory from '@/Factory';
import CleanProps from '@/CleanProps';
import type { IOptionalAvatarProps } from '@/Types';

export default (props: IOptionalAvatarProps = {}): string => {
  const fullProps = CleanProps(Factory(props)) as unknown as Record<string, string>;

  const query = new URLSearchParams(fullProps)
    .toString()
    .replaceAll('%23', ''); // Remove # in colours

  return `https://vue3-avataaars.com/svg?${query}`;
};
