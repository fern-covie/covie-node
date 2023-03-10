/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

/**
 * Represents an event delivered via webhook on the occurrence of certain policy changes.
 */
export interface Event {
    /** The unique identifier of the received event. */
    id?: string;
    /** An enumerated string representing the type of event that occurred. */
    eventType?: CovieApi.EventType;
    /** The date and time in which the event occurred, represented as an ISO-8601 string. */
    occurredAt?: string;
    links?: CovieApi.EventPayloadLinkContainer;
}
