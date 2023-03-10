/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, CovieApi.Address> =
    core.serialization.object({
        line1: core.serialization.string().optional(),
        line2: core.serialization.string().optional(),
        city: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        postalCode: core.serialization.property("postal_code", core.serialization.string().optional()),
    });

export declare namespace Address {
    interface Raw {
        line1?: string | null;
        line2?: string | null;
        city?: string | null;
        state?: string | null;
        postal_code?: string | null;
    }
}
