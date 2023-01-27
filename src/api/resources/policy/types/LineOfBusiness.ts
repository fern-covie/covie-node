/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A string indicating the line of business this policy encompasses.
 */
export type LineOfBusiness = "personal_auto" | "homeowner" | "renter" | "motorcycle";

export const LineOfBusiness = {
    PersonalAuto: "personal_auto",
    Homeowner: "homeowner",
    Renter: "renter",
    Motorcycle: "motorcycle",
} as const;