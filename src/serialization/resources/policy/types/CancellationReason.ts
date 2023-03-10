/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const CancellationReason: core.serialization.Schema<
    serializers.CancellationReason.Raw,
    CovieApi.CancellationReason
> = core.serialization.enum_(["carrier_non_renew", "insured_non_payment", "insured_requested", "other"]);

export declare namespace CancellationReason {
    type Raw = "carrier_non_renew" | "insured_non_payment" | "insured_requested" | "other";
}
