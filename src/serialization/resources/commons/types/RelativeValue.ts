/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const RelativeValue: core.serialization.ObjectSchema<serializers.RelativeValue.Raw, CovieApi.RelativeValue> =
    core.serialization.object({
        unit: core.serialization.lazy(async () => (await import("../../..")).Other).optional(),
        value: core.serialization.lazy(async () => (await import("../../..")).ActualCashValue).optional(),
    });

export declare namespace RelativeValue {
    interface Raw {
        unit?: serializers.Other.Raw | null;
        value?: serializers.ActualCashValue.Raw | null;
    }
}