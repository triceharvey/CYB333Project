/**
 * Standardized security event logging for HL7 integrity checks.
 */
function logSecurityEvent(eventType, details, result) {
    var timestamp = new Date().toISOString();
    var line = [
        timestamp,
        "HL7_SECURITY",
        eventType,
        result,
        details
    ].join(" | ");

    logger.info(line);
    return line;
}
