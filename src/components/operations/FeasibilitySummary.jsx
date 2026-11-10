import VerificationBadge from './VerificationBadge';

export default function FeasibilitySummary({ operations }) {
  const verified = operations.filter((item) => item.verificationStatus === 'verified').length;
  const sources = operations.filter((item) => item.evidence?.length).length;
  return (
    <section className="border border-ink/15 bg-rice p-5 sm:p-7" aria-labelledby="feasibility-summary-title">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-kicker">Current research state</p><h2 id="feasibility-summary-title" className="mt-3 font-display text-4xl tracking-[-.05em] text-ink">{operations.length - verified} segments still need evidence.</h2></div><VerificationBadge status={verified === operations.length ? 'verified' : 'pending'} /></div>
      <div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="border-t border-ink/15 pt-3"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">Segments</p><p className="mt-1 font-display text-3xl text-ink">{operations.length}</p></div><div className="border-t border-ink/15 pt-3"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">Verified</p><p className="mt-1 font-display text-3xl text-ink">{verified}</p></div><div className="border-t border-ink/15 pt-3"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">Sources recorded</p><p className="mt-1 font-display text-3xl text-ink">{sources}</p></div></div>
      <p className="mt-6 text-sm leading-6 text-ink/60">This page is a research checklist. A planned mode of travel is not presented as an approved bicycle policy or a confirmed booking.</p>
    </section>
  );
}
