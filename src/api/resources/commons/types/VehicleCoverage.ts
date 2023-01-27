/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

/**
 * A list of all coverages that apply to this vehicle. The omission of any coverage indicates that coverage was either declined or does not apply to this vehicle.
 */
export interface VehicleCoverage {
    bodilyInjury?: CovieApi.Coverage;
    propertyDamage?: CovieApi.Coverage;
    medicalPayments?: CovieApi.Coverage;
    personalInjuryProtection?: CovieApi.Coverage;
    comprehensive?: CovieApi.Coverage;
    collision?: CovieApi.Coverage;
    uninsuredBodilyInjury?: CovieApi.Coverage;
    uninsuredPropertyDamage?: CovieApi.Coverage;
    underinsuredBodilyInjury?: CovieApi.Coverage;
    underinsuredPropertyDamage?: CovieApi.Coverage;
    roadside?: CovieApi.Coverage;
    rentalCar?: CovieApi.Coverage;
    fullGlass?: CovieApi.Coverage;
    nonownedBodilyInjury?: CovieApi.Coverage;
    nonownedPropertyDamage?: CovieApi.Coverage;
    nonownedMedicalPayments?: CovieApi.Coverage;
    nonownedPhysicalDamage?: CovieApi.Coverage;
    oemParts?: CovieApi.Coverage;
    rideShare?: CovieApi.Coverage;
    allRisk?: CovieApi.Coverage;
    newVehicleReplacement?: CovieApi.Coverage;
    collisionDeductibleWaiver?: CovieApi.Coverage;
    loanLeasePayoff?: CovieApi.Coverage;
    customParts?: CovieApi.Coverage;
    automobileDeathBenefit?: CovieApi.Coverage;
    tripInterruption?: CovieApi.Coverage;
    personalProperty?: CovieApi.Coverage;
    limitedPropertyDamage?: CovieApi.Coverage;
    propertyProtection?: CovieApi.Coverage;
    personalInjuryAttendantRider?: CovieApi.Coverage;
    rentedVehicleLiability?: CovieApi.Coverage;
    motorcycleEnhancedInjury?: CovieApi.Coverage;
    limitedPersonalInjuryProtection?: CovieApi.Coverage;
    carriedContents?: CovieApi.Coverage;
}
