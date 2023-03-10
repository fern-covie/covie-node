/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovieApi } from "@fern-api/covie";

export interface LinkInfo {
    /** Link to retrieve the link's details. */
    self?: CovieApi.LinkDetails;
    /** Link to the carrier's logo. */
    carrierLogo?: CovieApi.LinkDetails;
    /** List of documents uploaded for the link. */
    uploadedDocuments?: CovieApi.LinkDetails[];
}
