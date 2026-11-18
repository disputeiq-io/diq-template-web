export type CaseStatus = 'FILED' | 'AI_TRIAGE' | 'AWAITING_REVIEW' | 'RESPONDED';

interface StatusMeta {
  readonly label: string;
  readonly symbol: string;
}

const STATUS_META: Record<CaseStatus, StatusMeta> = {
  FILED: { label: 'Filed', symbol: '○' },
  AI_TRIAGE: { label: 'AI Triage', symbol: '◐' },
  AWAITING_REVIEW: { label: 'Awaiting Review', symbol: '◈' },
  RESPONDED: { label: 'Responded', symbol: '●' },
};

export interface AppProps {
  readonly serviceName?: string;
  readonly status?: CaseStatus;
}

export function App({ serviceName = 'DisputeIQ Console', status = 'AWAITING_REVIEW' }: AppProps) {
  const meta = STATUS_META[status];

  return (
    <main style={{ maxWidth: 720, margin: '3rem auto', padding: '0 1.5rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>{serviceName}</h1>
        <span
          role="status"
          aria-label={`Case status: ${meta.label}`}
          style={{
            border: '1px solid var(--diq-border)',
            borderRadius: 6,
            padding: '0.25rem 0.625rem',
            fontSize: '0.875rem',
          }}
        >
          <span aria-hidden="true">{meta.symbol}</span> {meta.label}
        </span>
      </header>
      <p style={{ color: 'var(--diq-muted)', marginTop: '1rem' }}>
        Keyboard-first workspace ready. Press <kbd>Ctrl+K</kbd> to open the command palette.
      </p>
    </main>
  );
}
