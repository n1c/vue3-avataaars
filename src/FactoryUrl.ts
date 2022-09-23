import Factory from '@/Factory';
import type { IOptionalAvatarProps } from '@/Types';

export default (props: IOptionalAvatarProps = {}): string => {
  const fullProps = Factory(props) as unknown as Record<string, string>;

  const query = new URLSearchParams(fullProps)
    .toString()
    .replaceAll('%23', ''); // Remove # in colours

  return `https://vue3-avataaars.com/svg?${query}`;
};
