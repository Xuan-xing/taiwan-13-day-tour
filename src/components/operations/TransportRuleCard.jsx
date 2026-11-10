import { ExternalLink } from 'lucide-react';
import VerificationBadge from './VerificationBadge';

function Value({ value }) {
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  return value || 'Needs confirmation';
}

function EvidenceList({ evidence = [] }) {
  if (!evidence.length) return <p className="mt-5 border-t border-ink/10 pt-4 text-sm text-ink/55">No official source recorded yet.</p>;
  return (
    <details className="mt-6 border-t border-ink/10 pt-4 group">
      <summary className="inline-flex min-h-11 cursor-pointer list-none items-center rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta [&::-webkit-details-marker]:hidden">Official evidence ({evidence.length})</summary>
      <div className="mt-4 space-y-4">
        {evidence.map((source) => <article key={`${source.sourceUrl}-${source.checkedAt}`} className="border border-ink/10 bg-[#f1eee5] p-4"><div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><h4 className="font-semibold text-ink">{source.sourceTitle}</h4><span className="text-[10px] font-bold uppercase tracking-[.14em] text-ink/45">Checked {source.checkedAt}</span></div><p className="mt-2 text-xs uppercase tracking-[.12em] text-ink/45">{source.sourceType}</p><blockquote className="mt-4 border-l-2 border-terracotta pl-3 text-sm leading-6 text-ink/70">“{source.quote}”</blockquote><p className="mt-3 text-sm leading-6 text-ink/65"><strong className="text-ink">Conditions:</strong> {source.conditions}</p><p className="mt-2 text-sm leading-6 text-ink/65"><strong className="text-ink">Notes:</strong> {source.notes}</p><a href={source.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open official source: ${source.sourceTitle}`} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta">Open official source <ExternalLink size={14} aria-hidden="true" /></a></article>)}
      </div>
    </details>
  );
}

export default function TransportRuleCard({ operation }) {
  const policy = operation.bicyclePolicy;
  const fields = [['Bicycle allowed', policy.allowed], ['Folding only', policy.foldingOnly], ['Bag required', policy.bagRequired], ['Reservation', policy.reservationRequired]];
  return (
    <article className="border border-ink/15 bg-rice p-5 sm:p-7"><div className="flex flex-col gap-4 border-b border-ink/15 pb-5 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-terracotta">Day {operation.day} · {operation.mode}</p><h3 className="mt-2 font-display text-3xl leading-none tracking-[-.04em] text-ink">{operation.from} <span className="text-terracotta">→</span> {operation.to}</h3></div><VerificationBadge status={operation.verificationStatus} /></div><div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{fields.map(([label, value]) => <div key={label} className="border-t border-ink/10 pt-3"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">{label}</p><p className="mt-1 text-sm font-semibold text-ink"><Value value={value} /></p></div>)}</div><p className="mt-6 border-l-2 border-terracotta pl-4 text-sm leading-6 text-ink/65">{policy.restrictions}</p><div className="mt-5 border-t border-ink/10 pt-4"><p className="text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">Route-specific availability</p><p className="mt-1 text-sm leading-6 text-ink/65">{operation.notes}</p></div><p className="mt-4 text-xs font-semibold uppercase tracking-[.14em] text-ink/45">Last checked: {operation.lastChecked ?? 'Not yet checked'}</p><EvidenceList evidence={operation.evidence} /></article>
  );
}
