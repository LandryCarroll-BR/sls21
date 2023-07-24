import { type VariantProps, cva } from 'cva';
import Link from 'next/link';
import * as React from 'react';

const buttonVariants = cva(
  'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
  {
    variants: {
      variant: {
        solid: 'font-semibold focus-visible:outline-2 focus-visible:outline-offset-2',
        outline: 'ring-1 text-sm focus:outline-none',
        reset: '',
      },
      buttonColor: {
        slate: '',
        blue: '',
        white: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      buttonColor: 'slate',
    },
    compoundVariants: [
      {
        variant: 'solid',
        buttonColor: 'slate',
        className:
          'font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
      },
      {
        variant: 'solid',
        buttonColor: 'blue',
        className:
          'font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600',
      },
      {
        variant: 'solid',
        buttonColor: 'white',
        className:
          'font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
      },
      {
        variant: 'outline',
        buttonColor: 'slate',
        className:
          'ring-1 text-sm focus:outline-none ring-slate-200 bg-white text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
      },
      {
        variant: 'outline',
        buttonColor: 'white',
        className:
          'ring-1 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white0',
      },
      {
        variant: 'solid',
        buttonColor: 'slate',
        className: '',
      },
    ],
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, buttonColor, asChild = false, ...props }, ref) => {
    return (
      <button className={buttonVariants({ variant, buttonColor, className })} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ variant, buttonColor, href, className, ...props }, ref) => {
    return (
      <Link
        href={href}
        className={buttonVariants({ variant, buttonColor, className })}
        ref={ref}
        {...props}
      ></Link>
    );
  }
);
ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink, buttonVariants };
