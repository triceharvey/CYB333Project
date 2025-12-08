CYB333 Final Project Report — HL7 Security Validation Framework
🔹 1. Introduction
This project builds an automated HL7 validation system to detect tampering and enforce message integrity inside healthcare data workflows.
🔹 2. Problem Statement
Why HL7 integrity matters.
Explain that unvalidated HL7 can be altered, disrupted, forged or corrupted.
🔹 3. Architecture Overview
HL7_Security_Architecture.drawio.png
Short explanation:
Messages flow from source → Mirth → validation scripts → logging → destination.
🔹 4. Components
• Checksum Validator
Detects message tampering.
• Segment Rules
Verifies required HL7 segments exist and meet format expectations.
• Audit Logging
Records security outcomes and anomalies.
• Mirth Channel
Orchestrates routing, validation, transformation, and reporting.
🔹 5. Implementation Summary
Explain how each piece was created and integrated.
🔹 6. Testing Results
I need a good sample success and tampered sample detection.
🔹 7. Lessons Learned
Git, automation, HL7, debugging, Docker, filters, Mirth, export, and validation.
🔹 8. Conclusion
This system strengthens HL7 message integrity, visibility, and automated enforcement.