/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The frequency of which tracking should be performed. This value is `never` when tracking is disabled.
 */
export type TrackingFrequency = "daily" | "weekly" | "monthly" | "never" | "on_demand";

export const TrackingFrequency = {
    Daily: "daily",
    Weekly: "weekly",
    Monthly: "monthly",
    Never: "never",
    OnDemand: "on_demand",
} as const;
