/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const EmbeddedObjects: core.serialization.ObjectSchema<
    serializers.EmbeddedObjects.Raw,
    CovieApi.EmbeddedObjects
> = core.serialization.object({
    missingFields: core.serialization.property(
        "missing_fields",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace EmbeddedObjects {
    interface Raw {
        missing_fields?: string[] | null;
    }
}
