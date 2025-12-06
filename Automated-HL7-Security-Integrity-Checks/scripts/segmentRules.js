/**
 * Basic HL7 segment validation.
 * Ensures required segments exist and reports missing structural elements.
 */
function validateSegments(msgObject) {
    var issues = [];

    try {
        var msh = msgObject.getSegment("MSH");
        if (!msh) {
            issues.push("Missing required MSH segment");
        }

        var pid = null;
        try {
            pid = msgObject.getSegment("PID");
        } catch (e) {
            // ignore
        }
        if (!pid) {
            issues.push("Missing required PID segment");
        }
    } catch (e) {
        issues.push("Segment validation failure: " + e);
    }

    return issues;
}
