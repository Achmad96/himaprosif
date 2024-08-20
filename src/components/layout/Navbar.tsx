import Link from 'next/link';
import Logo from '$/images/icons/logo.png';
import NavigationComponent from '@/components/ui/navigation-component';

import { NavigationsListType, navigationsList } from '@/constants/navigation-routes';
import { ImageContainer, ImageWithoutBlur } from '@/components/ui/image-component';

export default function Navbar() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar w-full">
          <ImageContainer className="relative h-10 w-10 rounded-b-xl">
            <ImageWithoutBlur src={Logo} alt="logo" sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 100vw" className="rounded-b-xl" />
          </ImageContainer>
          <div className="flex-1">
            <Link className="btn btn-ghost mx-2 px-2" href={'/'}>
              Estungkara
            </Link>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navigationsList.map((link: NavigationsListType) => (
                <li key={link.path}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
        </nav>
        {/* Page content here */}
        {/* Content */}
      </div>
      <aside className="drawer-side z-50">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4">
          {/* Sidebar content here */}
          {navigationsList.map((link: NavigationsListType) => (
            <NavigationComponent key={link.path} link={link} />
          ))}
        </ul>
      </aside>
    </div>
  );
}
