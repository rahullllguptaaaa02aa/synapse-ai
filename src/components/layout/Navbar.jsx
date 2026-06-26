import { memo } from 'react';
import Container from './Container.jsx';
import Logo from '../ui/Logo.jsx';
import Button from '../ui/Button.jsx';
import { siteConfig } from '../../config/site.config.js';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-mint/80 bg-arctic/90 backdrop-blur-md">
      <Container as="nav" aria-label="Primary" className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturnal/40">
          <Logo className="h-10 w-10" />
          <span className="font-mono text-sm font-semibold tracking-tight text-noir sm:text-base">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-fluid-sm font-medium text-nocturnal/80 transition-opacity duration-hover hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nocturnal/30 rounded px-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign in
          </Button>
          <Button size="sm">{siteConfig.cta.primary}</Button>
        </div>
      </Container>
    </header>
  );
}

export default memo(Navbar);
