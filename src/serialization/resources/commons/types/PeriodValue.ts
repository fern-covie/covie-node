/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const PeriodValue: core.serialization.ObjectSchema<serializers.PeriodValue.Raw, CovieApi.PeriodValue> =
    core.serialization.object({
        unit: core.serialization.lazy(async () => (await import("../../..")).TimeScale).optional(),
        value: core.serialization.number().optional(),
    });

export declare namespace PeriodValue {
    interface Raw {
        unit?: serializers.TimeScale.Raw | null;
        value?: number | null;
    }
}