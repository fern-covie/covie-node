/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const VehicleOwnership: core.serialization.Schema<serializers.VehicleOwnership.Raw, CovieApi.VehicleOwnership> =
    core.serialization.enum_(["own", "lease", "finance"]);

export declare namespace VehicleOwnership {
    type Raw = "own" | "lease" | "finance";
}