/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovieApi } from "@fern-api/covie";
import * as core from "../../../../core";

export const VehicleCoverage: core.serialization.ObjectSchema<
    serializers.VehicleCoverage.Raw,
    CovieApi.VehicleCoverage
> = core.serialization.object({
    bodilyInjury: core.serialization.property(
        "bodily_injury",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    propertyDamage: core.serialization.property(
        "property_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    medicalPayments: core.serialization.property(
        "medical_payments",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    personalInjuryProtection: core.serialization.property(
        "personal_injury_protection",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    comprehensive: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
    collision: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
    uninsuredBodilyInjury: core.serialization.property(
        "uninsured_bodily_injury",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    uninsuredPropertyDamage: core.serialization.property(
        "uninsured_property_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    underinsuredBodilyInjury: core.serialization.property(
        "underinsured_bodily_injury",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    underinsuredPropertyDamage: core.serialization.property(
        "underinsured_property_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    roadside: core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional(),
    rentalCar: core.serialization.property(
        "rental_car",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    fullGlass: core.serialization.property(
        "full_glass",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    nonownedBodilyInjury: core.serialization.property(
        "nonowned_bodily_injury",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    nonownedPropertyDamage: core.serialization.property(
        "nonowned_property_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    nonownedMedicalPayments: core.serialization.property(
        "nonowned_medical_payments",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    nonownedPhysicalDamage: core.serialization.property(
        "nonowned_physical_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    oemParts: core.serialization.property(
        "oem_parts",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    rideShare: core.serialization.property(
        "ride_share",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    allRisk: core.serialization.property(
        "all_risk",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    newVehicleReplacement: core.serialization.property(
        "new_vehicle_replacement",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    collisionDeductibleWaiver: core.serialization.property(
        "collision_deductible_waiver",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    loanLeasePayoff: core.serialization.property(
        "loan_lease_payoff",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    customParts: core.serialization.property(
        "custom_parts",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    automobileDeathBenefit: core.serialization.property(
        "automobile_death_benefit",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    tripInterruption: core.serialization.property(
        "trip_interruption",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    personalProperty: core.serialization.property(
        "personal_property",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    limitedPropertyDamage: core.serialization.property(
        "limited_property_damage",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    propertyProtection: core.serialization.property(
        "property_protection",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    personalInjuryAttendantRider: core.serialization.property(
        "personal_injury_attendant_rider",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    rentedVehicleLiability: core.serialization.property(
        "rented_vehicle_liability",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    motorcycleEnhancedInjury: core.serialization.property(
        "motorcycle_enhanced_injury",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    limitedPersonalInjuryProtection: core.serialization.property(
        "limited_personal_injury_protection",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
    carriedContents: core.serialization.property(
        "carried_contents",
        core.serialization.lazyObject(async () => (await import("../../..")).Coverage).optional()
    ),
});

export declare namespace VehicleCoverage {
    interface Raw {
        bodily_injury?: serializers.Coverage.Raw | null;
        property_damage?: serializers.Coverage.Raw | null;
        medical_payments?: serializers.Coverage.Raw | null;
        personal_injury_protection?: serializers.Coverage.Raw | null;
        comprehensive?: serializers.Coverage.Raw | null;
        collision?: serializers.Coverage.Raw | null;
        uninsured_bodily_injury?: serializers.Coverage.Raw | null;
        uninsured_property_damage?: serializers.Coverage.Raw | null;
        underinsured_bodily_injury?: serializers.Coverage.Raw | null;
        underinsured_property_damage?: serializers.Coverage.Raw | null;
        roadside?: serializers.Coverage.Raw | null;
        rental_car?: serializers.Coverage.Raw | null;
        full_glass?: serializers.Coverage.Raw | null;
        nonowned_bodily_injury?: serializers.Coverage.Raw | null;
        nonowned_property_damage?: serializers.Coverage.Raw | null;
        nonowned_medical_payments?: serializers.Coverage.Raw | null;
        nonowned_physical_damage?: serializers.Coverage.Raw | null;
        oem_parts?: serializers.Coverage.Raw | null;
        ride_share?: serializers.Coverage.Raw | null;
        all_risk?: serializers.Coverage.Raw | null;
        new_vehicle_replacement?: serializers.Coverage.Raw | null;
        collision_deductible_waiver?: serializers.Coverage.Raw | null;
        loan_lease_payoff?: serializers.Coverage.Raw | null;
        custom_parts?: serializers.Coverage.Raw | null;
        automobile_death_benefit?: serializers.Coverage.Raw | null;
        trip_interruption?: serializers.Coverage.Raw | null;
        personal_property?: serializers.Coverage.Raw | null;
        limited_property_damage?: serializers.Coverage.Raw | null;
        property_protection?: serializers.Coverage.Raw | null;
        personal_injury_attendant_rider?: serializers.Coverage.Raw | null;
        rented_vehicle_liability?: serializers.Coverage.Raw | null;
        motorcycle_enhanced_injury?: serializers.Coverage.Raw | null;
        limited_personal_injury_protection?: serializers.Coverage.Raw | null;
        carried_contents?: serializers.Coverage.Raw | null;
    }
}
