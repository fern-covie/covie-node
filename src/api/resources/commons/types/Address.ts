/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A universal base object encapsulating the physical address related to another object.
 */
export interface Address {
    /** The first line of the address being provided. */
    line1?: string;
    /** The second line of the address, when provided. */
    line2?: string;
    /** The city in which the address provided is located. */
    city?: string;
    /** The state or provide in which the address is located, represented in abbreviated form. */
    state?: string;
    /** The 5 digit postal code in which the address is located. */
    postalCode?: string;
}
