/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const CoverageLimits: core.serialization.ObjectSchema<serializers.CoverageLimits.Raw, CovieApi.CoverageLimits> =
    core.serialization.object({
        duration: core.serialization.lazyObject(async () => (await import("../../..")).PeriodValue).optional(),
        term: core.serialization.lazyObject(async () => (await import("../../..")).CurrencyValue).optional(),
    });

export declare namespace CoverageLimits {
    interface Raw {
        duration?: serializers.PeriodValue.Raw | null;
        term?: serializers.CurrencyValue.Raw | null;
    }
}
