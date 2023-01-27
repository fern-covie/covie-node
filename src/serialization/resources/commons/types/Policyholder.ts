/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Policyholder: core.serialization.ObjectSchema<serializers.Policyholder.Raw, CovieApi.Policyholder> =
    core.serialization.object({
        type: core.serialization.lazy(async () => (await import("../../..")).InsuredType).optional(),
        name: core.serialization.lazyObject(async () => (await import("../../..")).Name).optional(),
        emailAddresses: core.serialization.property(
            "email_addresses",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).EMail))
                .optional()
        ),
        phoneNumbers: core.serialization.property(
            "phone_numbers",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).Phone))
                .optional()
        ),
        isPrimary: core.serialization.property("is_primary", core.serialization.boolean().optional()),
    });

export declare namespace Policyholder {
    interface Raw {
        type?: serializers.InsuredType.Raw | null;
        name?: serializers.Name.Raw | null;
        email_addresses?: serializers.EMail.Raw[] | null;
        phone_numbers?: serializers.Phone.Raw[] | null;
        is_primary?: boolean | null;
    }
}