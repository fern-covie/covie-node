/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Carrier: core.serialization.ObjectSchema<serializers.Carrier.Raw, CovieApi.Carrier> =
    core.serialization.object({
        name: core.serialization.string().optional(),
    });

export declare namespace Carrier {
    interface Raw {
        name?: string | null;
    }
}