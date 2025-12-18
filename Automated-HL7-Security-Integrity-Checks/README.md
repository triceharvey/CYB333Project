# Automated HL7 Security & Integrity Checks in Mirth Connect

This project adds automated security and integrity checks for HL7 messages inside Mirth Connect.

## Objectives

- Validate HL7 structure and required segments
- Perform checksum-based integrity checks
- Generate security/audit logs when tampering risks are found

## Components

- `scripts/checksumValidator.js` — integrity check logic
- `scripts/segmentRules.js` — HL7 structure validation
- `scripts/auditLogger.js` — standardized security event logging
- `samples/` — sample HL7 messages used for testing
- `mirth-channels/` — importable Mirth channel export will live here

## Status

Project structure created and initial script scaffolding added.  
Next steps include linking scripts into a Mirth Connect channel and testing integrity logic.

## Final Submission Note
This repository reflects the final state of the CYB 333 project, including validated HL7 message testing and exported Mirth channel configuration.
