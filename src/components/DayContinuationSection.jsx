const detailRows = [
  ['Season', 'seasonalNote'],
  ['Luggage', 'luggageTransfer'],
  ['Bike rental', 'bikeRental'],
  ['Connection', 'transitConnection'],
  ['Transport plan', 'transportPlan'],
  ['Next connection', 'nextConnection'],
];

function valueOrPending(value) {
  return value === null || value === undefined || value === '' ? 'Pending itinerary details.' : value;
}

export default function DayContinuationSection({ days, accent = '#8A3324' }) {
  if (!days?.length) return null;

  return (
    <section id="day-09-continuation" className="relative scroll-mt-24 overflow-hidden bg-[#f1eee5] px-4 py-20 sm:px-8 sm:py-28" aria-labelledby="day-09-continuation-title">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="section-kicker" style={{ color: accent }}>SITE 04 / DAY 09 CONTINUATION</p>
          <h2 id="day-09-continuation-title" className="mt-4 font-display text-[clamp(2.8rem,6vw,6rem)] leading-[.88] tracking-[-.07em] text-ink">Chenggong, Sanxiantai<br /><em style={{ color: accent }}>before the northbound transfer.</em></h2>
          <p className="mt-6 max-w-xl text-sm leading-6 text-ink/60">The Day 09 coastal ride continues the island story before the route moves north toward Su-Ao and Yilan.</p>
        </div>
        <div className="space-y-10">
          {days.map((day) => (
            <article key={day.id} className="overflow-hidden border border-ink/15 bg-rice">
              <div className="grid lg:grid-cols-[1.08fr_.92fr]">
                <div className="p-5 sm:p-8 lg:p-10">
                  <p className="text-[10px] font-bold uppercase tracking-[.24em]" style={{ color: accent }}>Day {String(day.day).padStart(2, '0')} · Chenggong / Sanxiantai</p>
                  <p className="mt-5 text-xs font-medium leading-5 text-ink/60">{day.route}</p>
                  <h3 className="mt-4 font-display text-[clamp(2.2rem,4vw,4.2rem)] leading-[.9] tracking-[-.055em] text-ink">{day.title}</h3>
                  <div className="mt-8 border-y border-ink/15 py-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-ink/45">Highlights</p><ul className="mt-3 space-y-2 text-sm leading-6 text-ink/70">{(day.highlights ?? []).map((highlight) => <li key={highlight}>— {highlight}</li>)}</ul></div>
                  <div className="mt-7 border-l-2 pl-4 text-sm leading-6" style={{ borderColor: accent, color: accent }}><p className="text-[10px] font-bold uppercase tracking-[.18em]">Planner note</p><p className="mt-1">{valueOrPending(day.plannerNote)}</p></div>
                </div>
                <div className="relative aspect-[16/10] bg-[#dfe8e0] lg:aspect-auto lg:min-h-full">{day.image ? <img src={day.image} alt={day.imageAlt} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : <div className="grid h-full min-h-64 place-items-center text-xs uppercase tracking-[.16em] text-ink/45">Image pending</div>}<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" /></div>
              </div>
              <div className="grid gap-6 border-t border-ink/15 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3 lg:p-10">
                {detailRows.map(([label, key]) => <div key={key} className="border-t border-ink/10 pt-4"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-ink/45">{label}</p><p className="mt-2 text-sm leading-6 text-ink/65">{valueOrPending(day[key])}</p></div>)}
                <div className="border-t border-ink/10 pt-4"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-ink/45">Verification</p><p className="mt-2 text-sm leading-6 text-ink/65">{valueOrPending(day.verificationStatus)}</p>{day.verificationNotes?.length > 0 && <ul className="mt-2 space-y-1 text-xs leading-5 text-ink/50">{day.verificationNotes.map((note) => <li key={note}>— {note}</li>)}</ul>}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
