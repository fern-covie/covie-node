/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const EmbeddedRebroadcastEvents: core.serialization.ObjectSchema<
    serializers.EmbeddedRebroadcastEvents.Raw,
    CovieApi.EmbeddedRebroadcastEvents
> = core.serialization.object({
    broadcasts: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).EventBroadcast))
        .optional(),
});

export declare namespace EmbeddedRebroadcastEvents {
    interface Raw {
        broadcasts?: serializers.EventBroadcast.Raw[] | null;
    }
}
