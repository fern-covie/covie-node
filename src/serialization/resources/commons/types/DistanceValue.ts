/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const DistanceValue: core.serialization.ObjectSchema<serializers.DistanceValue.Raw, CovieApi.DistanceValue> =
    core.serialization.object({
        unit: core.serialization.lazy(async () => (await import("../../..")).DistanceUnit).optional(),
        value: core.serialization.number().optional(),
    });

export declare namespace DistanceValue {
    interface Raw {
        unit?: serializers.DistanceUnit.Raw | null;
        value?: number | null;
    }
}
