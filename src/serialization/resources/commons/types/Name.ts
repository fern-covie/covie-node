/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Name: core.serialization.ObjectSchema<serializers.Name.Raw, CovieApi.Name> = core.serialization.object({
    full: core.serialization.string().optional(),
});

export declare namespace Name {
    interface Raw {
        full?: string | null;
    }
}
