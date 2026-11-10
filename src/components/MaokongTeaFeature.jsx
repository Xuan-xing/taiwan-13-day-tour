export default function MaokongTeaFeature({ feature }) {
  if (!feature) return null;

  return (
    <section
      className="relative isolate overflow-hidden bg-[#090a09] px-4 py-16 text-rice sm:px-8 sm:py-24"
      aria-labelledby={`${feature.id}-title`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-16">
        <div className="relative flex min-h-[15rem] items-center justify-start sm:min-h-[20rem] md:min-h-[25rem]">
          <img
            src="/images/regions/north-coast-taipei/tea.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none relative z-10 block h-auto w-[min(24rem,86vw)] max-w-full rotate-[-6deg] object-contain"
          />
          <svg
            className="maokong-steam pointer-events-none absolute left-[31%] top-[5%] z-20 h-auto w-16 sm:left-[33%] sm:w-20"
            viewBox="0 0 120 110"
            aria-hidden="true"
          >
            <path d="M45 96C25 78 60 67 43 47 30 31 57 22 48 4" fill="none" stroke="#f5f5f0" strokeLinecap="round" strokeWidth="7" opacity=".46" />
            <path d="M79 96C62 76 94 65 78 45 67 29 91 20 84 2" fill="none" stroke="#f5f5f0" strokeLinecap="round" strokeWidth="6" opacity=".32" />
          </svg>
        </div>

        <div className="relative z-10 max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[.26em] text-[#c4d4c5]">{feature.eyebrow}</p>
          <h2 id={`${feature.id}-title`} className="mt-5 max-w-lg font-display text-[clamp(3rem,7vw,6.8rem)] leading-[.88] tracking-[-.07em] text-rice">{feature.title}</h2>
          <p className="mt-7 max-w-md text-base leading-7 text-rice/65">{feature.body}</p>
          <a href="#planner" className="mt-8 inline-flex min-h-11 items-center rounded-full border border-rice/30 px-5 py-3 text-sm font-semibold text-rice transition hover:border-rice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rice">Plan the final climb</a>
        </div>
      </div>
    </section>
  );
}
