import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * Get transaction details by issueID.
     *
     * @throws FetchError<400, types.PostV02AccountsIssueIdTransactionsResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsIssueIdTransactionsResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsIssueIdTransactionsResponse403> Access to this resource is forbidden.
     */
    postV02AccountsIssueIdTransactions(body: types.PostV02AccountsIssueIdTransactionsBodyParam, metadata: types.PostV02AccountsIssueIdTransactionsMetadataParam): Promise<FetchResponse<200, types.PostV02AccountsIssueIdTransactionsResponse200>>;
    postV02AccountsIssueIdTransactions(metadata: types.PostV02AccountsIssueIdTransactionsMetadataParam): Promise<FetchResponse<200, types.PostV02AccountsIssueIdTransactionsResponse200>>;
    /**
     * Get Public profile of a Chimoney User.
     *
     * @throws FetchError<400, types.PostV02AccountsPublicProfileResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsPublicProfileResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsPublicProfileResponse403> Access to this resource is forbidden.
     */
    postV02AccountsPublicProfile(body?: types.PostV02AccountsPublicProfileBodyParam): Promise<FetchResponse<200, types.PostV02AccountsPublicProfileResponse200>>;
    /**
     * Get all transactions by account.
     *
     * @throws FetchError<400, types.PostV02AccountsTransactionsResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsTransactionsResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsTransactionsResponse403> Access to this resource is forbidden.
     */
    postV02AccountsTransactions(body?: types.PostV02AccountsTransactionsBodyParam): Promise<FetchResponse<200, types.PostV02AccountsTransactionsResponse200>>;
    /**
     * Get single transaction detail.
     *
     * @throws FetchError<400, types.PostV02AccountsTransactionResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsTransactionResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsTransactionResponse403> Access to this resource is forbidden.
     */
    postV02AccountsTransaction(body: types.PostV02AccountsTransactionBodyParam, metadata: types.PostV02AccountsTransactionMetadataParam): Promise<FetchResponse<200, types.PostV02AccountsTransactionResponse200>>;
    postV02AccountsTransaction(metadata: types.PostV02AccountsTransactionMetadataParam): Promise<FetchResponse<200, types.PostV02AccountsTransactionResponse200>>;
    /**
     * Account Transfer.
     *
     * @throws FetchError<400, types.PostV02AccountsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02AccountsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AccountsTransferResponse403> Access to this resource is forbidden.
     */
    postV02AccountsTransfer(body: types.PostV02AccountsTransferBodyParam): Promise<FetchResponse<200, types.PostV02AccountsTransferResponse200>>;
    /**
     * Deletes an unpaid transaction.
     *
     * @throws FetchError<400, types.DeleteV02AccountsDeleteUnpaidTransactionResponse400> Error.
     * @throws FetchError<401, types.DeleteV02AccountsDeleteUnpaidTransactionResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.DeleteV02AccountsDeleteUnpaidTransactionResponse403> Access to this resource is forbidden.
     */
    deleteV02AccountsDeleteUnpaidTransaction(metadata: types.DeleteV02AccountsDeleteUnpaidTransactionMetadataParam): Promise<FetchResponse<200, types.DeleteV02AccountsDeleteUnpaidTransactionResponse200>>;
    /**
     * AI Invoice Data generator
     *
     * @throws FetchError<400, types.PostV02AiInvoiceGenerateResponse400> Error.
     * @throws FetchError<401, types.PostV02AiInvoiceGenerateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02AiInvoiceGenerateResponse403> Access to this resource is forbidden.
     */
    postV02AiInvoiceGenerate(body: types.PostV02AiInvoiceGenerateBodyParam): Promise<FetchResponse<200, types.PostV02AiInvoiceGenerateResponse200>>;
    /**
     * Get list of all supported airtime Countries.
     *
     * @throws FetchError<400, types.GetV02InfoAirtimeCountriesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoAirtimeCountriesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoAirtimeCountriesResponse403> Access to this resource is forbidden.
     */
    getV02InfoAirtimeCountries(): Promise<FetchResponse<200, types.GetV02InfoAirtimeCountriesResponse200>>;
    /**
     * Get list of all assests.
     *
     * @throws FetchError<400, types.GetV02InfoAssetsResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoAssetsResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoAssetsResponse403> Access to this resource is forbidden.
     */
    getV02InfoAssets(metadata?: types.GetV02InfoAssetsMetadataParam): Promise<FetchResponse<200, types.GetV02InfoAssetsResponse200>>;
    /**
     * Get list of Supported banks and bank code.
     *
     * @throws FetchError<400, types.GetV02InfoCountryBanksResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoCountryBanksResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoCountryBanksResponse403> Access to this resource is forbidden.
     */
    getV02InfoCountryBanks(metadata: types.GetV02InfoCountryBanksMetadataParam): Promise<FetchResponse<200, types.GetV02InfoCountryBanksResponse200>>;
    /**
     * Get list of bank branches and branch code.
     *
     * @throws FetchError<400, types.GetV02InfoBankBranchesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoBankBranchesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoBankBranchesResponse403> Access to this resource is forbidden.
     */
    getV02InfoBankBranches(metadata: types.GetV02InfoBankBranchesMetadataParam): Promise<FetchResponse<200, types.GetV02InfoBankBranchesResponse200>>;
    /**
     * get exchange rates.
     *
     * @throws FetchError<400, types.GetV02InfoExchangeRatesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoExchangeRatesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoExchangeRatesResponse403> Access to this resource is forbidden.
     */
    getV02InfoExchangeRates(): Promise<FetchResponse<200, types.GetV02InfoExchangeRatesResponse200>>;
    /**
     * convert local currency amount to USD.
     *
     * @throws FetchError<400, types.GetV02InfoLocalAmountInUsdResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoLocalAmountInUsdResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoLocalAmountInUsdResponse403> Access to this resource is forbidden.
     */
    getV02InfoLocalAmountInUsd(metadata: types.GetV02InfoLocalAmountInUsdMetadataParam): Promise<FetchResponse<200, types.GetV02InfoLocalAmountInUsdResponse200>>;
    /**
     * convert currency amount to USD.
     *
     * @throws FetchError<400, types.GetV02InfoConvertLocalAmountToUsdResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoConvertLocalAmountToUsdResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoConvertLocalAmountToUsdResponse403> Access to this resource is forbidden.
     */
    getV02InfoConvertLocalAmountToUsd(metadata: types.GetV02InfoConvertLocalAmountToUsdMetadataParam): Promise<FetchResponse<200, types.GetV02InfoConvertLocalAmountToUsdResponse200>>;
    /**
     * Convert USD amount to Local currency amount.
     *
     * @throws FetchError<400, types.GetV02InfoUsdAmountInLocalResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoUsdAmountInLocalResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoUsdAmountInLocalResponse403> Access to this resource is forbidden.
     */
    getV02InfoUsdAmountInLocal(metadata: types.GetV02InfoUsdAmountInLocalMetadataParam): Promise<FetchResponse<200, types.GetV02InfoUsdAmountInLocalResponse200>>;
    /**
     * Convert USD to Local currency amount.
     *
     * @throws FetchError<400, types.GetV02InfoConvertUsdToLocalAmountResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoConvertUsdToLocalAmountResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoConvertUsdToLocalAmountResponse403> Access to this resource is forbidden.
     */
    getV02InfoConvertUsdToLocalAmount(metadata: types.GetV02InfoConvertUsdToLocalAmountMetadataParam): Promise<FetchResponse<200, types.GetV02InfoConvertUsdToLocalAmountResponse200>>;
    /**
     * Get list of all supported mobile money code.
     *
     * @throws FetchError<400, types.GetV02InfoMobileMoneyCodesResponse400> Error.
     * @throws FetchError<401, types.GetV02InfoMobileMoneyCodesResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02InfoMobileMoneyCodesResponse403> Access to this resource is forbidden.
     */
    getV02InfoMobileMoneyCodes(): Promise<FetchResponse<200, types.GetV02InfoMobileMoneyCodesResponse200>>;
    /**
     * verify a bank account number or multiple bank account numbers.
     *
     * @throws FetchError<400, types.PostV02InfoVerifyBankAccountNumberResponse400> Error.
     * @throws FetchError<401, types.PostV02InfoVerifyBankAccountNumberResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02InfoVerifyBankAccountNumberResponse403> Access to this resource is forbidden.
     */
    postV02InfoVerifyBankAccountNumber(body: types.PostV02InfoVerifyBankAccountNumberBodyParam): Promise<FetchResponse<200, types.PostV02InfoVerifyBankAccountNumberResponse200>>;
    /**
     * validate a chimoney issued voucher code
     *
     * @throws FetchError<400, types.PostV02InfoCommunitiesVerifyCodeResponse400> Error.
     * @throws FetchError<401, types.PostV02InfoCommunitiesVerifyCodeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02InfoCommunitiesVerifyCodeResponse403> Access to this resource is forbidden.
     */
    postV02InfoCommunitiesVerifyCode(body: types.PostV02InfoCommunitiesVerifyCodeBodyParam): Promise<FetchResponse<200, types.PostV02InfoCommunitiesVerifyCodeResponse200>>;
    /**
     * Create a new Multicurrency Wallet.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsCreateResponse403> Access to this resource is forbidden.
     */
    postV02MulticurrencyWalletsCreate(body: types.PostV02MulticurrencyWalletsCreateBodyParam): Promise<FetchResponse<200, types.PostV02MulticurrencyWalletsCreateResponse200>>;
    /**
     * Update a multicurrency-wallets.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsUpdateResponse403> Access to this resource is forbidden.
     */
    postV02MulticurrencyWalletsUpdate(body: types.PostV02MulticurrencyWalletsUpdateBodyParam): Promise<FetchResponse<200, types.PostV02MulticurrencyWalletsUpdateResponse200>>;
    /**
     * Get details of an existing multicurrency wallet.
     *
     * @throws FetchError<400, types.GetV02MulticurrencyWalletsGetResponse400> Error.
     * @throws FetchError<401, types.GetV02MulticurrencyWalletsGetResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02MulticurrencyWalletsGetResponse403> Access to this resource is forbidden.
     */
    getV02MulticurrencyWalletsGet(metadata: types.GetV02MulticurrencyWalletsGetMetadataParam): Promise<FetchResponse<200, types.GetV02MulticurrencyWalletsGetResponse200>>;
    /**
     * Get all multicurrency wallets of an organization/account.
     *
     * @throws FetchError<400, types.GetV02MulticurrencyWalletsListResponse400> Error.
     * @throws FetchError<401, types.GetV02MulticurrencyWalletsListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02MulticurrencyWalletsListResponse403> Access to this resource is forbidden.
     */
    getV02MulticurrencyWalletsList(): Promise<FetchResponse<200, types.GetV02MulticurrencyWalletsListResponse200>>;
    /**
     * Get Quote to Transfer between multicurrency wallets.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsTransferQuoteResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsTransferQuoteResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsTransferQuoteResponse403> Access to this resource is forbidden.
     */
    postV02MulticurrencyWalletsTransferQuote(body: types.PostV02MulticurrencyWalletsTransferQuoteBodyParam): Promise<FetchResponse<200, types.PostV02MulticurrencyWalletsTransferQuoteResponse200>>;
    /**
     * Transfer from multicurrency wallet to another wallet, an email or a phone number.
     *
     * @throws FetchError<400, types.PostV02MulticurrencyWalletsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02MulticurrencyWalletsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02MulticurrencyWalletsTransferResponse403> Access to this resource is forbidden.
     */
    postV02MulticurrencyWalletsTransfer(body: types.PostV02MulticurrencyWalletsTransferBodyParam): Promise<FetchResponse<200, types.PostV02MulticurrencyWalletsTransferResponse200>>;
    /**
     * Initiate a payment request
     *
     * @throws FetchError<400, types.PostV02PaymentInitiateResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentInitiateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentInitiateResponse403> Access to this resource is forbidden.
     */
    postV02PaymentInitiate(body: types.PostV02PaymentInitiateBodyParam): Promise<FetchResponse<200, types.PostV02PaymentInitiateResponse200>>;
    /**
     * verify a payment.
     *
     * @throws FetchError<400, types.PostV02PaymentVerifyResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentVerifyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentVerifyResponse403> Access to this resource is forbidden.
     */
    postV02PaymentVerify(body: types.PostV02PaymentVerifyBodyParam): Promise<FetchResponse<200, types.PostV02PaymentVerifyResponse200>>;
    /**
     * Simulate a card or other status change. Accepted include ["failed", "expired", "fraud"].
     * Only works in staging
     *
     * @throws FetchError<400, types.PostV02PaymentSimulateResponse400> Error.
     * @throws FetchError<401, types.PostV02PaymentSimulateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PaymentSimulateResponse403> Access to this resource is forbidden.
     */
    postV02PaymentSimulate(body: types.PostV02PaymentSimulateBodyParam): Promise<FetchResponse<200, types.PostV02PaymentSimulateResponse200>>;
    /**
     * Payout Airtime to a Phone number.
     *
     * @throws FetchError<400, types.PostV02PayoutsAirtimeResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsAirtimeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsAirtimeResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsAirtime(body: types.PostV02PayoutsAirtimeBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsAirtimeResponse200>>;
    /**
     * Payout to Bank in a supported Country.
     *
     * @throws FetchError<400, types.PostV02PayoutsBankResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsBankResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsBankResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsBank(body: types.PostV02PayoutsBankBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsBankResponse200>>;
    /**
     * Payout Chimoney.
     *
     * @throws FetchError<400, types.PostV02PayoutsChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsChimoneyResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsChimoney(body: types.PostV02PayoutsChimoneyBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsChimoneyResponse200>>;
    /**
     * Payout to a Chimoney Wallet.
     *
     * @throws FetchError<400, types.PostV02PayoutsWalletResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsWalletResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsWalletResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsWallet(body: types.PostV02PayoutsWalletBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsWalletResponse200>>;
    /**
     * Payout to a Interledger Wallet Address.
     *
     * @throws FetchError<400, types.PostV02PayoutsInterledgerWalletAddressResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInterledgerWalletAddressResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInterledgerWalletAddressResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsInterledgerWalletAddress(body: types.PostV02PayoutsInterledgerWalletAddressBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsInterledgerWalletAddressResponse200>>;
    /**
     * Payout Giftcards to an email.
     *
     * @throws FetchError<400, types.PostV02PayoutsGiftCardResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsGiftCardResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsGiftCardResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsGiftCard(body: types.PostV02PayoutsGiftCardBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsGiftCardResponse200>>;
    /**
     * Payout Mobile Money (Momo).
     *
     * @throws FetchError<400, types.PostV02PayoutsMobileMoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsMobileMoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsMobileMoneyResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsMobileMoney(body: types.PostV02PayoutsMobileMoneyBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsMobileMoneyResponse200>>;
    /**
     * Payout Interac.
     *
     * @throws FetchError<400, types.PostV02PayoutsInteracResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInteracResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInteracResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsInterac(body: types.PostV02PayoutsInteracBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsInteracResponse200>>;
    /**
     * Check Payout status.
     *
     * @throws FetchError<400, types.PostV02PayoutsStatusResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsStatusResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsStatusResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsStatus(body: types.PostV02PayoutsStatusBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsStatusResponse200>>;
    /**
     * Debit wallet to process unpaid transaction.
     *
     * @throws FetchError<400, types.PostV02PayoutsProcessResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsProcessResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsProcessResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsProcess(body: types.PostV02PayoutsProcessBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsProcessResponse200>>;
    /**
     * Initiate Chimoney transaction.
     *
     * @throws FetchError<400, types.PostV02PayoutsInitiateChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02PayoutsInitiateChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02PayoutsInitiateChimoneyResponse403> Access to this resource is forbidden.
     */
    postV02PayoutsInitiateChimoney(body: types.PostV02PayoutsInitiateChimoneyBodyParam): Promise<FetchResponse<200, types.PostV02PayoutsInitiateChimoneyResponse200>>;
    /**
     * Redeem airtime.
     *
     * @throws FetchError<400, types.PostV02RedeemAirtimeResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemAirtimeResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemAirtimeResponse403> Access to this resource is forbidden.
     */
    postV02RedeemAirtime(body: types.PostV02RedeemAirtimeBodyParam): Promise<FetchResponse<200, types.PostV02RedeemAirtimeResponse200>>;
    /**
     * Redeem any.
     *
     * @throws FetchError<400, types.PostV02RedeemAnyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemAnyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemAnyResponse403> Access to this resource is forbidden.
     */
    postV02RedeemAny(body: types.PostV02RedeemAnyBodyParam): Promise<FetchResponse<200, types.PostV02RedeemAnyResponse200>>;
    /**
     * Redeem Chimoney.
     *
     * @throws FetchError<400, types.PostV02RedeemChimoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemChimoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemChimoneyResponse403> Access to this resource is forbidden.
     */
    postV02RedeemChimoney(body: types.PostV02RedeemChimoneyBodyParam): Promise<FetchResponse<200, types.PostV02RedeemChimoneyResponse200>>;
    /**
     * Redeem giftcard.
     *
     * @throws FetchError<400, types.PostV02RedeemGiftCardResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemGiftCardResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemGiftCardResponse403> Access to this resource is forbidden.
     */
    postV02RedeemGiftCard(body: types.PostV02RedeemGiftCardBodyParam): Promise<FetchResponse<200, types.PostV02RedeemGiftCardResponse200>>;
    /**
     * Redeem mobile money.
     *
     * @throws FetchError<400, types.PostV02RedeemMobileMoneyResponse400> Error.
     * @throws FetchError<401, types.PostV02RedeemMobileMoneyResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02RedeemMobileMoneyResponse403> Access to this resource is forbidden.
     */
    postV02RedeemMobileMoney(body: types.PostV02RedeemMobileMoneyBodyParam): Promise<FetchResponse<200, types.PostV02RedeemMobileMoneyResponse200>>;
    /**
     * Create a new sub-account.
     *
     * @throws FetchError<400, types.PostV02SubAccountCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCreateResponse403> Access to this resource is forbidden.
     */
    postV02SubAccountCreate(body: types.PostV02SubAccountCreateBodyParam): Promise<FetchResponse<200, types.PostV02SubAccountCreateResponse200>>;
    /**
     * Update a sub-account.
     *
     * @throws FetchError<400, types.PostV02SubAccountUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountUpdateResponse403> Access to this resource is forbidden.
     */
    postV02SubAccountUpdate(body: types.PostV02SubAccountUpdateBodyParam): Promise<FetchResponse<200, types.PostV02SubAccountUpdateResponse200>>;
    /**
     * Delete an existing sub-account.
     *
     * @throws FetchError<400, types.DeleteV02SubAccountDeleteResponse400> Error.
     * @throws FetchError<401, types.DeleteV02SubAccountDeleteResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.DeleteV02SubAccountDeleteResponse403> Access to this resource is forbidden.
     */
    deleteV02SubAccountDelete(metadata: types.DeleteV02SubAccountDeleteMetadataParam): Promise<FetchResponse<200, types.DeleteV02SubAccountDeleteResponse200>>;
    /**
     * Get details of an existing sub account.
     *
     * @throws FetchError<400, types.GetV02SubAccountGetResponse400> Error.
     * @throws FetchError<401, types.GetV02SubAccountGetResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02SubAccountGetResponse403> Access to this resource is forbidden.
     */
    getV02SubAccountGet(metadata: types.GetV02SubAccountGetMetadataParam): Promise<FetchResponse<200, types.GetV02SubAccountGetResponse200>>;
    /**
     * Get all sub-accounts associated with a user.
     *
     * @throws FetchError<400, types.GetV02SubAccountListResponse400> Error.
     * @throws FetchError<401, types.GetV02SubAccountListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.GetV02SubAccountListResponse403> Access to this resource is forbidden.
     */
    getV02SubAccountList(): Promise<FetchResponse<200, types.GetV02SubAccountListResponse200>>;
    /**
     * Create a sub-account community associated with a user.
     *
     * @throws FetchError<400, types.PostV02SubAccountCommunityCreateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCommunityCreateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCommunityCreateResponse403> Access to this resource is forbidden.
     */
    postV02SubAccountCommunityCreate(body: types.PostV02SubAccountCommunityCreateBodyParam): Promise<FetchResponse<200, types.PostV02SubAccountCommunityCreateResponse200>>;
    /**
     * Update a sub-account community associated with a user.
     *
     * @throws FetchError<400, types.PostV02SubAccountCommunityUpdateResponse400> Error.
     * @throws FetchError<401, types.PostV02SubAccountCommunityUpdateResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02SubAccountCommunityUpdateResponse403> Access to this resource is forbidden.
     */
    postV02SubAccountCommunityUpdate(body: types.PostV02SubAccountCommunityUpdateBodyParam): Promise<FetchResponse<200, types.PostV02SubAccountCommunityUpdateResponse200>>;
    /**
     * List associated wallets.
     *
     * @throws FetchError<400, types.PostV02WalletsListResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsListResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsListResponse403> Access to this resource is forbidden.
     */
    postV02WalletsList(body: types.PostV02WalletsListBodyParam): Promise<FetchResponse<200, types.PostV02WalletsListResponse200>>;
    /**
     * Get single wallet details.
     *
     * @throws FetchError<400, types.PostV02WalletsLookupResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsLookupResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsLookupResponse403> Access to this resource is forbidden.
     */
    postV02WalletsLookup(body: types.PostV02WalletsLookupBodyParam): Promise<FetchResponse<200, types.PostV02WalletsLookupResponse200>>;
    /**
     * Transfer between wallets.
     *
     * @throws FetchError<400, types.PostV02WalletsTransferResponse400> Error.
     * @throws FetchError<401, types.PostV02WalletsTransferResponse401> Access to this resource is not available for unauthenticated users.
     * @throws FetchError<403, types.PostV02WalletsTransferResponse403> Access to this resource is forbidden.
     */
    postV02WalletsTransfer(body: types.PostV02WalletsTransferBodyParam): Promise<FetchResponse<200, types.PostV02WalletsTransferResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
