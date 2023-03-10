/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Logo: core.serialization.ObjectSchema<serializers.Logo.Raw, CovieApi.Logo> = core.serialization.object({
    href: core.serialization.string().optional(),
});

export declare namespace Logo {
    interface Raw {
        href?: string | null;
    }
}
