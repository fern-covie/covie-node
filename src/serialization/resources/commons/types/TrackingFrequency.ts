/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const TrackingFrequency: core.serialization.Schema<
    serializers.TrackingFrequency.Raw,
    CovieApi.TrackingFrequency
> = core.serialization.enum_(["daily", "weekly", "monthly", "never", "on_demand"]);

export declare namespace TrackingFrequency {
    type Raw = "daily" | "weekly" | "monthly" | "never" | "on_demand";
}
