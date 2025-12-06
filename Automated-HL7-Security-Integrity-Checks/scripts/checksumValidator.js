/**
 * Simple checksum-based integrity validation for HL7 messages.
 * This function is intended to run inside Mirth Connect JavaScript transformers.
 */
function validateChecksum(msgObject) {
    try {
        var body = msgObject.toString();
        var raw = body.replace(/\r/g, "");

        var sum = 0;
        for (var i = 0; i < raw.length; i++) {
            sum += raw.charCodeAt(i);
        }

        var expected = null;
        try {
            var zck = msgObject.getSegment("ZCK");
            if (zck) {
                expected = zck.getField(1);
            }
        } catch (e) {
            logger.warn("No ZCK segment found for checksum comparison.");
        }

        if (expected === null) {
            logger.info("No checksum detected in message.");
            return { ok: false, reason: "NO_CHECKSUM" };
        }

        var calculated = sum.toString();
        var match = (calculated === expected);

        return { ok: match, calculated: calculated, expected: expected };
    } catch (e) {
        logger.error("Checksum validation error: " + e);
        return { ok: false, error: e.toString() };
    }
}
