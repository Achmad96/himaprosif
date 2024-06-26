'use client';

import { useRouter } from 'next/navigation';

interface INavigationComponent {
  link: {
    path: string;
    name: string;
  };
}

const NavigationComponent = (props: INavigationComponent) => {
  const { link } = props;
  const router = useRouter();
  return (
    <li key={link.path}>
      <label htmlFor="my-drawer-3" aria-label="close sidebar" onClick={() => router.push(link.path)}>
        {link.name}
      </label>
    </li>
  );
};

export default NavigationComponent;
