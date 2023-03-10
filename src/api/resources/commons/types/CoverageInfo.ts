/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

/**
 * A list of coverages that apply to the location being insured.
 */
export interface CoverageInfo {
    dwelling?: CovieApi.Coverage;
    dwellingExtension?: CovieApi.Coverage;
    personalProperty?: CovieApi.Coverage;
    personalPropertyOffPremises?: CovieApi.Coverage;
    lossOfUse?: CovieApi.Coverage;
    serviceLine?: CovieApi.Coverage;
    personalLiability?: CovieApi.Coverage;
    medicalPayments?: CovieApi.Coverage;
    propertyDamageOthers?: CovieApi.Coverage;
    fireService?: CovieApi.Coverage;
    lossAssessment?: CovieApi.Coverage;
    sewerBackup?: CovieApi.Coverage;
    arsonReward?: CovieApi.Coverage;
    creditCardFraud?: CovieApi.Coverage;
    debrisRemoval?: CovieApi.Coverage;
    oilRelease?: CovieApi.Coverage;
    locks?: CovieApi.Coverage;
    landscaping?: CovieApi.Coverage;
    additionalStructures?: CovieApi.Coverage;
}
