import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from './App';

describe('App', () => {
  it('renders status with non-color label and keyboard shortcut hint', () => {
    render(<App serviceName="DisputeIQ Triage" status="AWAITING_REVIEW" />);

    expect(screen.getByRole('heading', { name: 'DisputeIQ Triage' })).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveTextContent('Awaiting Review');
    expect(screen.getByText('Ctrl+K')).toBeInTheDocument();
  });
});
