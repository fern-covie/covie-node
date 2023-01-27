/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { CovieApi } from "@fern-api/covie";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CovieApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Require all account users to have an MFA application configured
     */
    public async enableAccountMfaRequired(accountId: string): Promise<CovieApi.AccountWithConfig> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CovieApiEnvironment.Production,
                `/accounts/${accountId}/mfa_requirements/`
            ),
            method: "POST",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return await serializers.account.enableAccountMfaRequired.Response.parse(
                _response.body as serializers.account.enableAccountMfaRequired.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CovieApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CovieApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CovieApiTimeoutError();
            case "unknown":
                throw new errors.CovieApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Remove requirement for all account users to have an MFA application configured
     */
    public async disableAccountMfaRequired(accountId: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CovieApiEnvironment.Production,
                `/accounts/${accountId}/mfa_requirements/`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CovieApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CovieApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CovieApiTimeoutError();
            case "unknown":
                throw new errors.CovieApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}