import CoastBayPalmIcon from './CoastBayPalmIcon';

export default function CoastHarborFeature({ feature }) {
  if (!feature) return null;
  const titleId = feature.id + '-title';

  return (
    <section id={feature.id} className="relative isolate overflow-hidden bg-[#071A18] px-4 py-20 text-rice sm:px-8 sm:py-28" aria-labelledby={titleId}>
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
        <div className="min-w-0"><CoastBayPalmIcon accent={feature.accent} /></div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[.28em]" style={{ color: feature.accent }}>{feature.eyebrow}</p>
          <h2 id={titleId} className="mt-5 max-w-3xl font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[.88] tracking-[-.07em] text-rice">{feature.title}</h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-rice/65 sm:text-lg">{feature.body}</p>
          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {feature.stops.map((stop) => (
              <article key={stop.id} className="min-w-0 border-t border-rice/20 pt-4">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#12332F]">
                  {stop.image ? <img src={stop.image} alt={stop.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : <div className="grid h-full place-items-center px-5 text-center text-xs uppercase tracking-[.16em] text-rice/45">Image pending</div>}
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#071A18]/55 to-transparent" />
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none tracking-[-.04em] text-rice">{stop.name}</h3>
                <p className="mt-3 text-sm leading-6 text-rice/60">{stop.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
