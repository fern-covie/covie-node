/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The form of measure used to calculate the relative value, such as "actual cash value" or "ACV" which looks at the original price or investment and factors in depreciation (effectively "Fair Market Value"), or "replacement cost" (sometimes "Actual Loss Sustained" or "ALS") which sets a value against real cost to replace something today. Occasionally, a response of "unknown" may be returned. This value indicates that no specific value was provided in high level policy documents. The value may be subjective and specific to the individual policyholder as specified in their policy contract and should be manually reviewed.
 */
export type ActualCashValue = "actual_cash_value" | "replacement_value" | "unknown";

export const ActualCashValue = {
    ActualCashValue: "actual_cash_value",
    ReplacementValue: "replacement_value",
    Unknown: "unknown",
} as const;
