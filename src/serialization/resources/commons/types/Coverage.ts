/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Coverage: core.serialization.ObjectSchema<serializers.Coverage.Raw, CovieApi.Coverage> =
    core.serialization.object({
        name: core.serialization.string().optional(),
        limits: core.serialization.lazyObject(async () => (await import("../../..")).CoverageLimits).optional(),
    });

export declare namespace Coverage {
    interface Raw {
        name?: string | null;
        limits?: serializers.CoverageLimits.Raw | null;
    }
}