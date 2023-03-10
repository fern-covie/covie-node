/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Link: core.serialization.ObjectSchema<serializers.Link.Raw, CovieApi.Link> = core.serialization.object({
    id: core.serialization.string().optional(),
    object: core.serialization.string().optional(),
    integrationId: core.serialization.property("integration_id", core.serialization.string().optional()),
    policyCount: core.serialization.property("policy_count", core.serialization.number().optional()),
    status: core.serialization.lazy(async () => (await import("../../..")).LinkStatus).optional(),
    isTracked: core.serialization.property("is_tracked", core.serialization.boolean().optional()),
    trackingFrequency: core.serialization.property(
        "tracking_frequency",
        core.serialization.lazy(async () => (await import("../../..")).TrackingFrequency).optional()
    ),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
    createdAt: core.serialization.property("created_at", core.serialization.string().optional()),
    links: core.serialization.property(
        "_links",
        core.serialization.lazyObject(async () => (await import("../../..")).LinkInfo).optional()
    ),
});

export declare namespace Link {
    interface Raw {
        id?: string | null;
        object?: string | null;
        integration_id?: string | null;
        policy_count?: number | null;
        status?: serializers.LinkStatus.Raw | null;
        is_tracked?: boolean | null;
        tracking_frequency?: serializers.TrackingFrequency.Raw | null;
        updated_at?: string | null;
        created_at?: string | null;
        _links?: serializers.LinkInfo.Raw | null;
    }
}
