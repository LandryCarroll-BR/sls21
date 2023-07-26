import { gql } from '../../__generated__';
import { PrimaryMenuItemFragmentFragment } from '../../__generated__/graphql';
import { Logo } from '@/components';
import { Popover, Transition } from '@headlessui/react';
import { cn } from '@/lib/utils';

import Link from 'next/link';
import { Fragment } from 'react';

type HeaderProps = {
  menuItems: PrimaryMenuItemFragmentFragment[];
};

function MobileNavigation({ menuItems }: HeaderProps) {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={cn('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={cn('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <Link href={item.uri} className="block w-full" onClick={() => close()}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export default function Header({ menuItems }: HeaderProps) {
  return (
    <header className="relative z-50 py-10">
      <div className="container">
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="/">
                <span className="sr-only">Home</span>
                <Logo className="h-10 w-auto" />
              </Link>
            </li>
            {menuItems.map((item) => (
              <li key={item.id} className="ml-12 hidden md:block">
                <Link
                  href={item.uri}
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="-mr-1 ml-5 md:hidden">
              <MobileNavigation menuItems={menuItems} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.fragments = {
  generalSettingsFragment: gql(`
    fragment HeaderGeneralSettingsFragment on GeneralSettings {
      title
      description
    }
  `),
  menuItemFragment: gql(`
    fragment PrimaryMenuItemFragment on MenuItem {
      id
      uri
      path
      label
      parentId
      cssClasses
      menu {
        node {
          name
        }
      }
    }
  `),
};
