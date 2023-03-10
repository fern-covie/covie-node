/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const TimeScale: core.serialization.Schema<serializers.TimeScale.Raw, CovieApi.TimeScale> =
    core.serialization.enum_(["day", "week", "month"]);

export declare namespace TimeScale {
    type Raw = "day" | "week" | "month";
}
