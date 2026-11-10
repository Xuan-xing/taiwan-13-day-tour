export const VERIFICATION_STATUS_META = {
  verified: { label: 'Verified', tone: 'verified', description: 'A current source has been checked and recorded.' },
  'source-provided': { label: 'Source provided', tone: 'source', description: 'This is part of the supplied itinerary, not a confirmed booking rule.' },
  'needs-confirmation': { label: 'Needs confirmation', tone: 'warning', description: 'A specific rule or provider still needs confirmation.' },
  'not-available': { label: 'Not available', tone: 'danger', description: 'This option is not currently available in the recorded research.' },
  'conflicting-information': { label: 'Conflicting information', tone: 'danger', description: 'Sources disagree and require resolution.' },
  pending: { label: 'Pending research', tone: 'pending', description: 'No verified source has been recorded yet.' }
};

export const REQUIRED_SOURCE_TYPES = [
  'Official rail or ferry operator rule',
  'Current rental provider page or written confirmation',
  'Current bicycle shipping provider page or written confirmation'
];
