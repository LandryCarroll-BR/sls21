import Link from 'next/link';
import { Container } from '../container/container';
import Logo from '../logo/Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center justify-center py-16">
          <Link href="/">
            <Logo className="mx-auto h-10 w-auto" />
          </Link>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <ul className="-my-1 flex justify-center space-x-6">
              <li>
                <Link
                  href="#features"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#blog">Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex space-x-6">
            <Link href="#">
              <span className="sr-only">SLS21 on Twitter</span>
              <svg aria-hidden="true" className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84" />
              </svg>
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} SLS21. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
