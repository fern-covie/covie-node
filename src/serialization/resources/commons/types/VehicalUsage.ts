/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const VehicalUsage: core.serialization.Schema<serializers.VehicalUsage.Raw, CovieApi.VehicalUsage> =
    core.serialization.enum_(["commute", "pleasure", "business"]);

export declare namespace VehicalUsage {
    type Raw = "commute" | "pleasure" | "business";
}