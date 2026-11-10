import { VERIFICATION_STATUS_META } from '../../data/operations/verificationSources.js';

export default function VerificationBadge({ status }) {
  const meta = VERIFICATION_STATUS_META[status] ?? VERIFICATION_STATUS_META.pending;
  const toneClass = {
    verified: 'border-ink/25 bg-[#dfe8e0] text-ink',
    source: 'border-ink/15 bg-rice text-ink/70',
    warning: 'border-terracotta/35 bg-[#f4e4df] text-terracotta',
    danger: 'border-terracotta bg-terracotta text-rice',
    pending: 'border-ink/15 bg-[#ecebe3] text-ink/60'
  }[meta.tone];
  return <span className={`inline-flex min-h-8 items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[.14em] ${toneClass}`} title={meta.description}>{meta.label}</span>;
}
