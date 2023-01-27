/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

/**
 * A universal base object encapsulating the phone number related to another object.
 */
export interface Phone {
    type?: CovieApi.PhoneType;
    number?: string;
    isPrimary?: boolean;
}
