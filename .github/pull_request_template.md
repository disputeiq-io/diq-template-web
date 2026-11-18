## What changed
<!-- Concise summary of the change and the bounded context affected -->

## Why
<!-- Link issue or ADR, e.g., Refs: DIQ-123 -->

## Verification
- [ ] Spotless / Prettier formatting clean
- [ ] Checkstyle / ESLint / Typecheck clean
- [ ] Unit and integration tests pass (`./mvnw verify` or `npm run test`)
- [ ] Tenant isolation & idempotency verified (if mutating or reading tenant data)
- [ ] No secrets, real PANs, or customer PII included

## Cross-repo impact
<!-- Note if diq-event-schemas, diq-gitops, or downstream consumers require follow-up PRs -->

## Rollback plan
<!-- How to safely revert or roll back this change -->
