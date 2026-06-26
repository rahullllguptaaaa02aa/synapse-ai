import { memo } from 'react';
import Container from './Container.jsx';
import Logo from '../ui/Logo.jsx';
import { siteConfig } from '../../config/site.config.js';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-mint bg-noir text-arctic">
      <Container className="grid gap-fluid-md py-fluid-lg md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Logo variant="light" className="h-10 w-10" />
            <span className="font-mono text-sm font-semibold">{siteConfig.name}</span>
          </div>
          <p className="max-w-sm text-fluid-sm text-mint/90">{siteConfig.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-widest text-forsythia">Product</h2>
          <ul className="mt-4 space-y-2 text-fluid-sm">
            {siteConfig.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-mint transition-opacity duration-hover hover:opacity-100 opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forsythia rounded px-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-forsythia">Company</h2>
          <ul className="mt-4 space-y-2 text-fluid-sm text-mint/90">
            <li>About</li>
            <li>Careers</li>
            <li>Security</li>
            <li>Contact</li>
          </ul>
        </div>
      </Container>

      <Container className="border-t border-nocturnal py-4 text-fluid-sm text-mint/70">
        <p>© {year} {siteConfig.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default memo(Footer);
