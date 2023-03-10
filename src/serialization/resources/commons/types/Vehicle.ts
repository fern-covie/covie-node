/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const Vehicle: core.serialization.ObjectSchema<serializers.Vehicle.Raw, CovieApi.Vehicle> =
    core.serialization.object({
        vin: core.serialization.string().optional(),
        make: core.serialization.string().optional(),
        model: core.serialization.string().optional(),
        year: core.serialization.string().optional(),
        trim: core.serialization.string().optional(),
        series: core.serialization.string().optional(),
        annualMileage: core.serialization.property("annual_mileage", core.serialization.number().optional()),
        usage: core.serialization.lazy(async () => (await import("../../..")).VehicalUsage).optional(),
        ownership: core.serialization.lazy(async () => (await import("../../..")).VehicleOwnership).optional(),
        drivers: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Driver))
            .optional(),
        interests: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Interest))
            .optional(),
        coverages: core.serialization.lazyObject(async () => (await import("../../..")).VehicleCoverage).optional(),
        discounts: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).Discount))
            .optional(),
    });

export declare namespace Vehicle {
    interface Raw {
        vin?: string | null;
        make?: string | null;
        model?: string | null;
        year?: string | null;
        trim?: string | null;
        series?: string | null;
        annual_mileage?: number | null;
        usage?: serializers.VehicalUsage.Raw | null;
        ownership?: serializers.VehicleOwnership.Raw | null;
        drivers?: serializers.Driver.Raw[] | null;
        interests?: serializers.Interest.Raw[] | null;
        coverages?: serializers.VehicleCoverage.Raw | null;
        discounts?: serializers.Discount.Raw[] | null;
    }
}
