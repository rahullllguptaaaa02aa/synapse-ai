import { memo } from 'react';
import Container from '../components/layout/Container.jsx';
import { testimonialsConfig } from '../config/testimonials.config.js';

function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-arctic py-fluid-xl">
      <Container>
        <header className="mb-fluid-lg max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-nocturnal">Testimonials</p>
          <h2 id="testimonials-heading" className="mt-2 font-mono text-fluid-2xl font-bold text-noir">
            Trusted by data teams shipping daily
          </h2>
        </header>

        <div className="grid gap-fluid-md md:grid-cols-3">
          {testimonialsConfig.map((item) => (
            <article
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-mint bg-mint/40 p-fluid-md transition-[transform,opacity] duration-hover hover:-translate-y-0.5 motion-reduce:transform-none"
            >
              <blockquote className="flex-1 text-fluid-base text-nocturnal">
                “{item.quote}”
              </blockquote>
              <footer className="mt-6 border-t border-nocturnal/10 pt-4">
                <cite className="not-italic">
                  <span className="block font-mono text-sm font-semibold text-noir">{item.author}</span>
                  <span className="text-fluid-sm text-nocturnal/70">{item.role}</span>
                </cite>
              </footer>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default memo(Testimonials);
