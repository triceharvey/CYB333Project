# Architecture Overview

This solution inspects HL7 messages inside a Mirth Connect channel to provide automated integrity and security validation.

## Processing Flow

1. HL7 messages arrive in Mirth Connect.
2. A JavaScript transformer script extracts the message.
3. `segmentRules.js` checks for required segments (e.g., MSH, PID).
4. `checksumValidator.js` calculates a checksum and compares it to a value inside the message.
5. `auditLogger.js` generates a structured security log entry that records PASS/FAIL evaluation outcomes.

## Modules Included

- `scripts/checksumValidator.js` — Calculates and validates message integrity.
- `scripts/segmentRules.js` — Ensures expected HL7 structure is present.
- `scripts/auditLogger.js` — Standard logging format for security validation events.
- `samples/valid_sample.hl7` — Good test message.
- `samples/tampered_sample.hl7` — Altered integrity example to validate failure detection.

This provides a foundation for HL7 message trust evaluation and automated auditing within healthcare data flows.
