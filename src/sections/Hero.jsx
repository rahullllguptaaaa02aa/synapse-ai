import { memo, useRef } from 'react';
import Container from '../components/layout/Container.jsx';
import Button from '../components/ui/Button.jsx';
import { siteConfig } from '../config/site.config.js';
import { useEntryAnimation } from '../hooks/useMotion.js';

function Hero() {
  const ref = useRef(null);
  useEntryAnimation(ref, { delay: 0, duration: 450 });

  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden pb-fluid-xl pt-fluid-lg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#FFC80133,transparent_45%),radial-gradient(circle_at_80%_0%,#FF993244,transparent_40%),linear-gradient(180deg,#F1F6F4_0%,#D9E8E2_100%)]"
      />

      <Container className="grid items-center gap-fluid-lg lg:grid-cols-[1.1fr_0.9fr]">
        <div ref={ref} className="space-y-fluid-md">
          <p className="inline-flex items-center rounded-full border border-nocturnal/15 bg-arctic/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-nocturnal">
            AI-native data automation
          </p>
          <h1
            id="hero-heading"
            className="font-mono text-fluid-3xl font-bold tracking-tight text-noir"
          >
            Ship data workflows at the speed of product
          </h1>
          <p className="max-w-xl text-fluid-lg text-nocturnal/85">
            {siteConfig.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg">{siteConfig.cta.primary}</Button>
            <Button variant="secondary" size="lg">
              {siteConfig.cta.secondary}
            </Button>
          </div>
        </div>

        <aside
          aria-label="Pipeline preview"
          className="rounded-2xl border border-nocturnal/10 bg-noir p-5 shadow-[0_24px_80px_-30px_#172B3680]"
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-mint/80">pipeline.live</span>
            <span className="rounded-full bg-forsythia/20 px-2 py-0.5 font-mono text-[10px] text-forsythia">
              RUNNING
            </span>
          </div>
          <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-mint sm:text-xs">
            <code>{`ingest(api.customers)
  |> normalize(schema.v2)
  |> enrich(ai.mapping)
  |> route(team.analytics)
  |> deliver(warehouse.snowflake)`}</code>
          </pre>
          <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-nocturnal/40 pt-4">
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-mint/60">Latency</dt>
              <dd className="font-mono text-sm text-forsythia">142ms</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-mint/60">Records</dt>
              <dd className="font-mono text-sm text-saffron">1.2M</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-wider text-mint/60">Quality</dt>
              <dd className="font-mono text-sm text-arctic">99.7%</dd>
            </div>
          </dl>
        </aside>
      </Container>
    </section>
  );
}

export default memo(Hero);
