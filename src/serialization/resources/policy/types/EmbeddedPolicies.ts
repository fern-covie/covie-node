/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const EmbeddedPolicies: core.serialization.ObjectSchema<
    serializers.EmbeddedPolicies.Raw,
    CovieApi.EmbeddedPolicies
> = core.serialization.object({
    policies: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).Policy))
        .optional(),
});

export declare namespace EmbeddedPolicies {
    interface Raw {
        policies?: serializers.Policy.Raw[] | null;
    }
}