/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const EmbeddedEvents: core.serialization.ObjectSchema<serializers.EmbeddedEvents.Raw, CovieApi.EmbeddedEvents> =
    core.serialization.object({
        events: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Event))
            .optional(),
    });

export declare namespace EmbeddedEvents {
    interface Raw {
        events?: serializers.Event.Raw[] | null;
    }
}
