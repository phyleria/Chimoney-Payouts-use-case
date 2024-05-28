"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'chimoney/0.2.2 (api/6.1.1)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    SDK.prototype.postV02AccountsIssueIdTransactions = function (body, metadata) {
        return this.core.fetch('/v0.2/accounts/issue-id-transactions', 'post', body, metadata);
    };
    /**
     * Get Public profile of a Chimoney User.
     *
     * @throws FetchError<400, types.PostV02AccountsPublicProfileResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsPublicProfileResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsPublicProfileResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02AccountsPublicProfile = function (body) {
        return this.core.fetch('/v0.2/accounts/public-profile', 'post', body);
    };
    /**
     * Get all transactions by account.
     *
     * @throws FetchError<400, types.PostV02AccountsTransactionsResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsTransactionsResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsTransactionsResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02AccountsTransactions = function (body) {
        return this.core.fetch('/v0.2/accounts/transactions', 'post', body);
    };
    SDK.prototype.postV02AccountsTransaction = function (body, metadata) {
        return this.core.fetch('/v0.2/accounts/transaction', 'post', body, metadata);
    };
    /**
     * Account Transfer.
     *
     * @throws FetchError<400, types.PostV02AccountsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsTransferResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02AccountsTransfer = function (body) {
        return this.core.fetch('/v0.2/accounts/transfer', 'post', body);
    };
    /**
     * Deletes an unpaid transaction.
     *
     * @throws FetchError<400, types.DeleteV02AccountsDeleteUnpaidTransactionResponse400> Error.
     * @throws FetchError<401, types.DeleteV02AccountsDeleteUnpaidTransactionResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.DeleteV02AccountsDeleteUnpaidTransactionResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.deleteV02AccountsDeleteUnpaidTransaction = function (metadata) {
        return this.core.fetch('/v0.2/accounts/delete-unpaid-transaction', 'delete', metadata);
    };
    /**
     * AI Invoice Data generator
     *
     * @throws FetchError<400, types.PostV02AiInvoiceGenerateResponse400> Error.
     * @throws FetchError<401, types.PostV02AiInvoiceGenerateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AiInvoiceGenerateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02AiInvoiceGenerate = function (body) {
        return this.core.fetch('/v0.2/ai/invoice/generate', 'post', body);
    };
    /**
     * Get list of all supported airtime Countries.
     *
     * @throws FetchError<400, types.GetV02InfoAirtimeCountriesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoAirtimeCountriesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoAirtimeCountriesResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoAirtimeCountries = function () {
        return this.core.fetch('/v0.2/info/airtime-countries', 'get');
    };
    /**
     * Get list of all assests.
     *
     * @throws FetchError<400, types.GetV02InfoAssetsResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoAssetsResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoAssetsResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoAssets = function (metadata) {
        return this.core.fetch('/v0.2/info/assets', 'get', metadata);
    };
    /**
     * Get list of Supported banks and bank code.
     *
     * @throws FetchError<400, types.GetV02InfoCountryBanksResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoCountryBanksResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoCountryBanksResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoCountryBanks = function (metadata) {
        return this.core.fetch('/v0.2/info/country-banks', 'get', metadata);
    };
    /**
     * Get list of bank branches and branch code.
     *
     * @throws FetchError<400, types.GetV02InfoBankBranchesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoBankBranchesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoBankBranchesResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoBankBranches = function (metadata) {
        return this.core.fetch('/v0.2/info/bank-branches', 'get', metadata);
    };
    /**
     * get exchange rates.
     *
     * @throws FetchError<400, types.GetV02InfoExchangeRatesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoExchangeRatesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoExchangeRatesResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoExchangeRates = function () {
        return this.core.fetch('/v0.2/info/exchange-rates', 'get');
    };
    /**
     * convert local currency amount to USD.
     *
     * @throws FetchError<400, types.GetV02InfoLocalAmountInUsdResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoLocalAmountInUsdResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoLocalAmountInUsdResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoLocalAmountInUsd = function (metadata) {
        return this.core.fetch('/v0.2/info/local-amount-in-usd', 'get', metadata);
    };
    /**
     * convert currency amount to USD.
     *
     * @throws FetchError<400, types.GetV02InfoConvertLocalAmountToUsdResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoConvertLocalAmountToUsdResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoConvertLocalAmountToUsdResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoConvertLocalAmountToUsd = function (metadata) {
        return this.core.fetch('/v0.2/info/convert/local-amount-to-usd', 'get', metadata);
    };
    /**
     * Convert USD amount to Local currency amount.
     *
     * @throws FetchError<400, types.GetV02InfoUsdAmountInLocalResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoUsdAmountInLocalResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoUsdAmountInLocalResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoUsdAmountInLocal = function (metadata) {
        return this.core.fetch('/v0.2/info/usd-amount-in-local', 'get', metadata);
    };
    /**
     * Convert USD to Local currency amount.
     *
     * @throws FetchError<400, types.GetV02InfoConvertUsdToLocalAmountResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoConvertUsdToLocalAmountResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoConvertUsdToLocalAmountResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoConvertUsdToLocalAmount = function (metadata) {
        return this.core.fetch('/v0.2/info/convert/usd-to-local-amount', 'get', metadata);
    };
    /**
     * Get list of all supported mobile money code.
     *
     * @throws FetchError<400, types.GetV02InfoMobileMoneyCodesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoMobileMoneyCodesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoMobileMoneyCodesResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02InfoMobileMoneyCodes = function () {
        return this.core.fetch('/v0.2/info/mobile-money-codes', 'get');
    };
    /**
     * verify a bank account number or multiple bank account numbers.
     *
     * @throws FetchError<400, types.PostV02InfoVerifyBankAccountNumberResponse400> Error.
     * @throws FetchError<401, types.PostV02InfoVerifyBankAccountNumberResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02InfoVerifyBankAccountNumberResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02InfoVerifyBankAccountNumber = function (body) {
        return this.core.fetch('/v0.2/info/verify-bank-account-number', 'post', body);
    };
    /**
     * validate a chimoney issued voucher code
     *
     * @throws FetchError<400, types.PostV02InfoCommunitiesVerifyCodeResponse400> Error.
     * @throws FetchError<401, types.PostV02InfoCommunitiesVerifyCodeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02InfoCommunitiesVerifyCodeResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02InfoCommunitiesVerifyCode = function (body) {
        return this.core.fetch('/v0.2/info/communities/verify-code', 'post', body);
    };
    /**
     * Create a new Multicurrency Wallet.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsCreateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02MulticurrencyWalletsCreate = function (body) {
        return this.core.fetch('/v0.2/multicurrency-wallets/create', 'post', body);
    };
    /**
     * Update a multicurrency-wallets.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsUpdateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02MulticurrencyWalletsUpdate = function (body) {
        return this.core.fetch('/v0.2/multicurrency-wallets/update', 'post', body);
    };
    /**
     * Get details of an existing multicurrency wallet.
     *
     * @throws FetchError<400, types.GetV02MulticurrencyWalletsGetResponse400> Error.
     * @throws FetchError<401, types.GetV02MulticurrencyWalletsGetResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02MulticurrencyWalletsGetResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02MulticurrencyWalletsGet = function (metadata) {
        return this.core.fetch('/v0.2/multicurrency-wallets/get', 'get', metadata);
    };
    /**
     * Get all multicurrency wallets of an organization/account.
     *
     * @throws FetchError<400, types.GetV02MulticurrencyWalletsListResponse400> Error.
     * @throws FetchError<401, types.GetV02MulticurrencyWalletsListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02MulticurrencyWalletsListResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02MulticurrencyWalletsList = function () {
        return this.core.fetch('/v0.2/multicurrency-wallets/list', 'get');
    };
    /**
     * Get Quote to Transfer between multicurrency wallets.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsTransferQuoteResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsTransferQuoteResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsTransferQuoteResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02MulticurrencyWalletsTransferQuote = function (body) {
        return this.core.fetch('/v0.2/multicurrency-wallets/transfer/quote', 'post', body);
    };
    /**
     * Transfer from multicurrency wallet to another wallet, an email or a phone number.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsTransferResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02MulticurrencyWalletsTransfer = function (body) {
        return this.core.fetch('/v0.2/multicurrency-wallets/transfer', 'post', body);
    };
    /**
     * Initiate a payment request
     *
     * @throws FetchError<400, types.PostV02PaymentInitiateResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentInitiateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentInitiateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PaymentInitiate = function (body) {
        return this.core.fetch('/v0.2/payment/initiate', 'post', body);
    };
    /**
     * verify a payment.
     *
     * @throws FetchError<400, types.PostV02PaymentVerifyResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentVerifyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentVerifyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PaymentVerify = function (body) {
        return this.core.fetch('/v0.2/payment/verify', 'post', body);
    };
    /**
     * Simulate a card or other status change. Accepted include ["failed", "expired", "fraud"].
     * Only works in staging
     *
     * @throws FetchError<400, types.PostV02PaymentSimulateResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentSimulateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentSimulateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PaymentSimulate = function (body) {
        return this.core.fetch('/v0.2/payment/simulate', 'post', body);
    };
    /**
     * Payout Airtime to a Phone number.
     *
     * @throws FetchError<400, types.PostV02PayoutsAirtimeResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsAirtimeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsAirtimeResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsAirtime = function (body) {
        return this.core.fetch('/v0.2/payouts/airtime', 'post', body);
    };
    /**
     * Payout to Bank in a supported Country.
     *
     * @throws FetchError<400, types.PostV02PayoutsBankResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsBankResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsBankResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsBank = function (body) {
        return this.core.fetch('/v0.2/payouts/bank', 'post', body);
    };
    /**
     * Payout Chimoney.
     *
     * @throws FetchError<400, types.PostV02PayoutsChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsChimoneyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsChimoney = function (body) {
        return this.core.fetch('/v0.2/payouts/chimoney', 'post', body);
    };
    /**
     * Payout to a Chimoney Wallet.
     *
     * @throws FetchError<400, types.PostV02PayoutsWalletResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsWalletResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsWalletResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsWallet = function (body) {
        return this.core.fetch('/v0.2/payouts/wallet', 'post', body);
    };
    /**
     * Payout to a Interledger Wallet Address.
     *
     * @throws FetchError<400, types.PostV02PayoutsInterledgerWalletAddressResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInterledgerWalletAddressResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInterledgerWalletAddressResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsInterledgerWalletAddress = function (body) {
        return this.core.fetch('/v0.2/payouts/interledger-wallet-address', 'post', body);
    };
    /**
     * Payout Giftcards to an email.
     *
     * @throws FetchError<400, types.PostV02PayoutsGiftCardResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsGiftCardResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsGiftCardResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsGiftCard = function (body) {
        return this.core.fetch('/v0.2/payouts/gift-card', 'post', body);
    };
    /**
     * Payout Mobile Money (Momo).
     *
     * @throws FetchError<400, types.PostV02PayoutsMobileMoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsMobileMoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsMobileMoneyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsMobileMoney = function (body) {
        return this.core.fetch('/v0.2/payouts/mobile-money', 'post', body);
    };
    /**
     * Payout Interac.
     *
     * @throws FetchError<400, types.PostV02PayoutsInteracResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInteracResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInteracResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsInterac = function (body) {
        return this.core.fetch('/v0.2/payouts/interac', 'post', body);
    };
    /**
     * Check Payout status.
     *
     * @throws FetchError<400, types.PostV02PayoutsStatusResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsStatusResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsStatusResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsStatus = function (body) {
        return this.core.fetch('/v0.2/payouts/status', 'post', body);
    };
    /**
     * Debit wallet to process unpaid transaction.
     *
     * @throws FetchError<400, types.PostV02PayoutsProcessResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsProcessResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsProcessResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsProcess = function (body) {
        return this.core.fetch('/v0.2/payouts/process', 'post', body);
    };
    /**
     * Initiate Chimoney transaction.
     *
     * @throws FetchError<400, types.PostV02PayoutsInitiateChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInitiateChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInitiateChimoneyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02PayoutsInitiateChimoney = function (body) {
        return this.core.fetch('/v0.2/payouts/initiate-chimoney', 'post', body);
    };
    /**
     * Redeem airtime.
     *
     * @throws FetchError<400, types.PostV02RedeemAirtimeResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemAirtimeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemAirtimeResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02RedeemAirtime = function (body) {
        return this.core.fetch('/v0.2/redeem/airtime', 'post', body);
    };
    /**
     * Redeem any.
     *
     * @throws FetchError<400, types.PostV02RedeemAnyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemAnyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemAnyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02RedeemAny = function (body) {
        return this.core.fetch('/v0.2/redeem/any', 'post', body);
    };
    /**
     * Redeem Chimoney.
     *
     * @throws FetchError<400, types.PostV02RedeemChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemChimoneyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02RedeemChimoney = function (body) {
        return this.core.fetch('/v0.2/redeem/chimoney', 'post', body);
    };
    /**
     * Redeem giftcard.
     *
     * @throws FetchError<400, types.PostV02RedeemGiftCardResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemGiftCardResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemGiftCardResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02RedeemGiftCard = function (body) {
        return this.core.fetch('/v0.2/redeem/gift-card', 'post', body);
    };
    /**
     * Redeem mobile money.
     *
     * @throws FetchError<400, types.PostV02RedeemMobileMoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemMobileMoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemMobileMoneyResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02RedeemMobileMoney = function (body) {
        return this.core.fetch('/v0.2/redeem/mobile-money', 'post', body);
    };
    /**
     * Create a new sub-account.
     *
     * @throws FetchError<400, types.PostV02SubAccountCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCreateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02SubAccountCreate = function (body) {
        return this.core.fetch('/v0.2/sub-account/create', 'post', body);
    };
    /**
     * Update a sub-account.
     *
     * @throws FetchError<400, types.PostV02SubAccountUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountUpdateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02SubAccountUpdate = function (body) {
        return this.core.fetch('/v0.2/sub-account/update', 'post', body);
    };
    /**
     * Delete an existing sub-account.
     *
     * @throws FetchError<400, types.DeleteV02SubAccountDeleteResponse400> Error.
     * @throws FetchError<401, types.DeleteV02SubAccountDeleteResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.DeleteV02SubAccountDeleteResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.deleteV02SubAccountDelete = function (metadata) {
        return this.core.fetch('/v0.2/sub-account/delete', 'delete', metadata);
    };
    /**
     * Get details of an existing sub account.
     *
     * @throws FetchError<400, types.GetV02SubAccountGetResponse400> Error.
     * @throws FetchError<401, types.GetV02SubAccountGetResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02SubAccountGetResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02SubAccountGet = function (metadata) {
        return this.core.fetch('/v0.2/sub-account/get', 'get', metadata);
    };
    /**
     * Get all sub-accounts associated with a user.
     *
     * @throws FetchError<400, types.GetV02SubAccountListResponse400> Error.
     * @throws FetchError<401, types.GetV02SubAccountListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02SubAccountListResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.getV02SubAccountList = function () {
        return this.core.fetch('/v0.2/sub-account/list', 'get');
    };
    /**
     * Create a sub-account community associated with a user.
     *
     * @throws FetchError<400, types.PostV02SubAccountCommunityCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCommunityCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCommunityCreateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02SubAccountCommunityCreate = function (body) {
        return this.core.fetch('/v0.2/sub-account/community/create', 'post', body);
    };
    /**
     * Update a sub-account community associated with a user.
     *
     * @throws FetchError<400, types.PostV02SubAccountCommunityUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCommunityUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCommunityUpdateResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02SubAccountCommunityUpdate = function (body) {
        return this.core.fetch('/v0.2/sub-account/community/update', 'post', body);
    };
    /**
     * List associated wallets.
     *
     * @throws FetchError<400, types.PostV02WalletsListResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsListResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02WalletsList = function (body) {
        return this.core.fetch('/v0.2/wallets/list', 'post', body);
    };
    /**
     * Get single wallet details.
     *
     * @throws FetchError<400, types.PostV02WalletsLookupResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsLookupResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsLookupResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02WalletsLookup = function (body) {
        return this.core.fetch('/v0.2/wallets/lookup', 'post', body);
    };
    /**
     * Transfer between wallets.
     *
     * @throws FetchError<400, types.PostV02WalletsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsTransferResponse403> Access to this resource is forbidden.
     */
    SDK.prototype.postV02WalletsTransfer = function (body) {
        return this.core.fetch('/v0.2/wallets/transfer', 'post', body);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
