/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const CoverageInfo: core.serialization.ObjectSchema<serializers.CoverageInfo.Raw, CovieApi.CoverageInfo> =
    core.serialization.object({
        dwelling: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
        dwellingExtension: core.serialization.property(
            "dwelling_extension",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        personalProperty: core.serialization.property(
            "personal_property",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        personalPropertyOffPremises: core.serialization.property(
            "personal_property_off_premises",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        lossOfUse: core.serialization.property(
            "loss_of_use",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        serviceLine: core.serialization.property(
            "service_line",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        personalLiability: core.serialization.property(
            "personal_liability",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        medicalPayments: core.serialization.property(
            "medical_payments",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        propertyDamageOthers: core.serialization.property(
            "property_damage_others",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        fireService: core.serialization.property(
            "fire_service",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        lossAssessment: core.serialization.property(
            "loss_assessment",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        sewerBackup: core.serialization.property(
            "sewer_backup",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        arsonReward: core.serialization.property(
            "arson_reward",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        creditCardFraud: core.serialization.property(
            "credit_card_fraud",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        debrisRemoval: core.serialization.property(
            "debris_removal",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        oilRelease: core.serialization.property(
            "oil_release",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
        locks: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
        landscaping: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
        additionalStructures: core.serialization.property(
            "additional_structures",
            core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
        ),
    });

export declare namespace CoverageInfo {
    interface Raw {
        dwelling?: serializers.Coverage.Raw | null;
        dwelling_extension?: serializers.Coverage.Raw | null;
        personal_property?: serializers.Coverage.Raw | null;
        personal_property_off_premises?: serializers.Coverage.Raw | null;
        loss_of_use?: serializers.Coverage.Raw | null;
        service_line?: serializers.Coverage.Raw | null;
        personal_liability?: serializers.Coverage.Raw | null;
        medical_payments?: serializers.Coverage.Raw | null;
        property_damage_others?: serializers.Coverage.Raw | null;
        fire_service?: serializers.Coverage.Raw | null;
        loss_assessment?: serializers.Coverage.Raw | null;
        sewer_backup?: serializers.Coverage.Raw | null;
        arson_reward?: serializers.Coverage.Raw | null;
        credit_card_fraud?: serializers.Coverage.Raw | null;
        debris_removal?: serializers.Coverage.Raw | null;
        oil_release?: serializers.Coverage.Raw | null;
        locks?: serializers.Coverage.Raw | null;
        landscaping?: serializers.Coverage.Raw | null;
        additional_structures?: serializers.Coverage.Raw | null;
    }
}