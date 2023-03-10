/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

/**
 * Represents the individual connections between Covie and a Policyholder's account with a carrier and wraps the policies retrieved from it that have been made available to the consumer.
 */
export interface Link {
    /** The unique identifier of the link object. */
    id?: string;
    /** String representing the object’s type. Objects of the same type share the same value. */
    object?: string;
    /** The identifier of the integration that was used to establish the link. */
    integrationId?: string;
    /** The number of policies provided by this link. */
    policyCount?: number;
    /** A string representation of the link's current status. This is distinct from a policy's status which is an indicator to whether a policy is in force. A link's status is an indicator of how new and complete the data is and whether or not it is possible to retrieve refreshed information. */
    status?: CovieApi.LinkStatus;
    /** A flag indicating if the policies provided by this link should be tracked by Covie's monitoring service. */
    isTracked?: boolean;
    /** The frequency of which tracking should be performed. This value is `never` when tracking is disabled. */
    trackingFrequency?: CovieApi.TrackingFrequency;
    /** The date and time, in ISO-8601 format, when the link was last updated. */
    updatedAt?: string;
    /** The date and time, in ISO-8601 format, when the link was first created. */
    createdAt?: string;
    links?: CovieApi.LinkInfo;
}
