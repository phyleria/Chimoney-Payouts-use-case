declare const DeleteV02AccountsDeleteUnpaidTransaction: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly chiRef: {
                    readonly type: "string";
                    readonly examples: readonly ["9ae90e01-6609-453c-b4af-8ae230fafc5a"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction reference.";
                };
                readonly subAccount: {
                    readonly type: "string";
                    readonly examples: readonly ["123456789"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "SubAccount if any.";
                };
            };
            readonly required: readonly ["chiRef"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["FnR3rnUd1kxQlbeZ98mM"];
                        };
                        readonly issueDate: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-17T21:47:58.156Z"];
                        };
                        readonly issueID: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC31660772876526"];
                        };
                        readonly chiRef: {
                            readonly type: "string";
                            readonly examples: readonly ["9ae90e01-6609-453c-b4af-8ae230fafc5a"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["unpaid"];
                        };
                        readonly issuer: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                    };
                    readonly description: "Data returned.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteV02SubAccountDelete: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sub account ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoAirtimeCountries: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly description: "Data returned.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                        readonly examples: readonly ["Nigeria", "Ghana", "Kenya", "South Africa", "Uganda"];
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoAssets: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly countryCode: {
                    readonly type: "string";
                    readonly examples: readonly ["NG"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country code symbol e.g NG, US, GH.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly benefitsList: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Save in Chimoney Wallet"];
                                    };
                                    readonly img: {
                                        readonly type: "string";
                                        readonly examples: readonly ["https://res.cloudinary.com/africahacks/image/upload/v1606074022/chimoney/Purple-100_z05fgn.jpg"];
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Redeem to your wallet and spend anytime"];
                                    };
                                    readonly code: {
                                        readonly type: "string";
                                        readonly examples: readonly ["airtime"];
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly examples: readonly ["Mobile and Internet"];
                                    };
                                    readonly available: {
                                        readonly type: "boolean";
                                        readonly examples: readonly [true];
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoBankBranches: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly bankID: {
                    readonly type: "string";
                    readonly examples: readonly ["280"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "bankCode id from /info/country-banks";
                };
            };
            readonly required: readonly ["bankID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly examples: readonly [191];
                            };
                            readonly branch_code: {
                                readonly type: "string";
                                readonly examples: readonly ["GH190101"];
                            };
                            readonly branch_name: {
                                readonly type: "string";
                                readonly examples: readonly ["Access Bank"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoConvertLocalAmountToUsd: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly originCurrency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Currency symbol e.g NGN, USD.";
                };
                readonly amountInOriginCurrency: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "amount to be converted.";
                };
            };
            readonly required: readonly ["originCurrency", "amountInOriginCurrency"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amountInOriginCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["20"];
                        };
                        readonly originCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["NGN"];
                        };
                        readonly amountInUSD: {
                            readonly type: "number";
                            readonly examples: readonly [0.2];
                        };
                        readonly validUntil: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-21T20:05:50.474Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoConvertUsdToLocalAmount: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly destinationCurrency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "currency symbol e.g NGN, KES.";
                };
                readonly amountInUSD: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "amount in usd.";
                };
            };
            readonly required: readonly ["destinationCurrency", "amountInUSD"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amountInUSD: {
                            readonly type: "string";
                            readonly examples: readonly ["100"];
                        };
                        readonly destinationCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["NGN"];
                        };
                        readonly amountInDestinationCurrency: {
                            readonly type: "number";
                            readonly examples: readonly [1000];
                        };
                        readonly validUntil: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-21T20:05:50.474Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoCountryBanks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly countryCode: {
                    readonly type: "string";
                    readonly examples: readonly ["NG"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country code symbol e.g NG, US, GH.";
                };
            };
            readonly required: readonly ["countryCode"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly examples: readonly [191];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["044"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Access Bank"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoExchangeRates: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly additionalProperties: true;
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoLocalAmountInUsd: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly originCurrency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Currency symbol e.g NGN, USD.";
                };
                readonly amountInOriginCurrency: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "amount to be converted.";
                };
            };
            readonly required: readonly ["originCurrency", "amountInOriginCurrency"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amountInOriginCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["20"];
                        };
                        readonly originCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["NGN"];
                        };
                        readonly amountInUSD: {
                            readonly type: "number";
                            readonly examples: readonly [0.2];
                        };
                        readonly validUntil: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-21T20:05:50.474Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoMobileMoneyCodes: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Cameroon EUMOBILE"];
                            };
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["EUMOBILE"];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly examples: readonly ["Cameroon"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02InfoUsdAmountInLocal: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly destinationCurrency: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "currency symbol e.g NGN, KES.";
                };
                readonly amountInUSD: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "amount in usd.";
                };
            };
            readonly required: readonly ["destinationCurrency", "amountInUSD"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly amountInUSD: {
                            readonly type: "string";
                            readonly examples: readonly ["100"];
                        };
                        readonly destinationCurrency: {
                            readonly type: "string";
                            readonly examples: readonly ["NGN"];
                        };
                        readonly amountInDestinationCurrency: {
                            readonly type: "number";
                            readonly examples: readonly [1000];
                        };
                        readonly validUntil: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-21T20:05:50.474Z"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02MulticurrencyWalletsGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Multicurrency wallet ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly parent: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly uid: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly subAccount: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly wallets: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02MulticurrencyWalletsList: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["f5637cb2-f8cb-4fc7-92f7-f628eef1f790"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Jane Doe"];
                            };
                            readonly uid: {
                                readonly type: "string";
                                readonly examples: readonly ["f5637cb2-f8cb-4fc7-92f7-f628eef1f790"];
                            };
                            readonly parent: {
                                readonly type: "string";
                                readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                            };
                            readonly subAccount: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly wallets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02SubAccountGet: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sub account ID.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly parent: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly uid: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly subAccount: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                        readonly wallets: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV02SubAccountList: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["f5637cb2-f8cb-4fc7-92f7-f628eef1f790"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly examples: readonly ["Jane Doe"];
                            };
                            readonly uid: {
                                readonly type: "string";
                                readonly examples: readonly ["f5637cb2-f8cb-4fc7-92f7-f628eef1f790"];
                            };
                            readonly parent: {
                                readonly type: "string";
                                readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                            };
                            readonly subAccount: {
                                readonly type: "boolean";
                                readonly examples: readonly [true];
                            };
                            readonly wallets: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AccountsIssueIdTransactions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly issueID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "IssueID of the transaction.";
                };
            };
            readonly required: readonly ["issueID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["not found for that id"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AccountsPublicProfile: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly userID: {
                readonly type: "string";
                readonly description: "User ID of Chimoney user. Must provide one of userID or linkCode. Uses userID if provided";
                readonly examples: readonly ["x2Zfuf0ZHBWOqlgzlpEK3Z3TVkw2"];
            };
            readonly linkCode: {
                readonly type: "string";
                readonly description: "NFC Link Code. Must provide one of userID or linkCode";
                readonly examples: readonly ["202310001"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["not found for that id"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AccountsTransaction: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Transaction id.";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["1W31C2JLyOcOdeOMzr45"];
                        };
                        readonly issueDate: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-08-17T21:47:58.156Z"];
                        };
                        readonly issueID: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC31660772876526"];
                        };
                        readonly chiRef: {
                            readonly type: "string";
                            readonly examples: readonly ["2ea04d0e-73a2-41a1-ac5c-582d1870f768"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["paid"];
                        };
                        readonly initiatedBy: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly issuer: {
                            readonly type: "string";
                            readonly examples: readonly ["x2Zfuf0ZHBWOqlgzlpEK3Z3TVkw2"];
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly examples: readonly ["mide@test.com"];
                        };
                        readonly chimoney: {
                            readonly type: "number";
                            readonly examples: readonly [100];
                        };
                        readonly valueInUSD: {
                            readonly type: "string";
                            readonly examples: readonly ["0.1"];
                        };
                        readonly enabledToRedeem: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly examples: readonly ["Wallet", "Mobile and Internet", "Bank", "Digital Currencies", "Products", "Gift Cards"];
                            };
                        };
                    };
                    readonly description: "Data returned.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AccountsTransactions: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["1W31C2JLyOcOdeOMzr45"];
                            };
                            readonly issueDate: {
                                readonly type: "string";
                                readonly examples: readonly ["2022-08-17T21:47:58.156Z"];
                            };
                            readonly issueID: {
                                readonly type: "string";
                                readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC31660772876526"];
                            };
                            readonly chiRef: {
                                readonly type: "string";
                                readonly examples: readonly ["2ea04d0e-73a2-41a1-ac5c-582d1870f768"];
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly examples: readonly ["paid"];
                            };
                            readonly initiatedBy: {
                                readonly type: "string";
                                readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                            };
                            readonly issuer: {
                                readonly type: "string";
                                readonly examples: readonly ["x2Zfuf0ZHBWOqlgzlpEK3Z3TVkw2"];
                            };
                            readonly email: {
                                readonly type: "string";
                                readonly examples: readonly ["mide@test.com"];
                            };
                            readonly chimoney: {
                                readonly type: "number";
                                readonly examples: readonly [1000];
                            };
                            readonly valueInUSD: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly productId: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly valueInLocalCurrency: {
                                readonly type: "number";
                                readonly examples: readonly [1];
                            };
                            readonly twitter: {
                                readonly type: "string";
                                readonly examples: readonly [""];
                            };
                            readonly countryCode: {
                                readonly type: "string";
                                readonly examples: readonly ["US"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["giftcard"];
                            };
                            readonly redeemData: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly payout: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly integration: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                            readonly enabledToRedeem: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly examples: readonly ["Wallet", "Mobile and Internet", "Bank", "Digital Currencies", "Products", "Gift Cards"];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AccountsTransfer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly receiver: {
                readonly type: "string";
                readonly description: "Receiver ID.";
                readonly examples: readonly ["1234567"];
            };
            readonly valueInUSD: {
                readonly type: "number";
                readonly description: "Amount to transfer.";
            };
            readonly wallet: {
                readonly type: "string";
                readonly description: "Wallet type.";
                readonly examples: readonly ["chi"];
            };
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Sub/Multi-currency Account if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly required: readonly ["receiver", "amount"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                    readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                                };
                                readonly wallet: {
                                    readonly type: "string";
                                    readonly examples: readonly ["airtime"];
                                };
                                readonly valueInUSD: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                                readonly tnxID: {
                                    readonly type: "string";
                                    readonly examples: readonly ["3724a9a8-49d3-4476-8ef6-9e62ca978704"];
                                };
                                readonly receiver: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ae07bf52-002b-489a-bc12-202f3beb3260"];
                                };
                            };
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                    };
                    readonly description: "Data returned.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Error";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02AiInvoiceGenerate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly instruction: {
                readonly type: "string";
                readonly description: "An intruction to generate an Invoice.";
                readonly examples: readonly ["Create an invoice from Jane Doe to Chimoney Incorporated for Web Dev Service which I provided for 4 months at $5/month and for Project Management cost of $100 with tax rate of 5%."];
            };
        };
        readonly required: readonly ["instruction"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly downloadURL: {
                            readonly type: "string";
                            readonly examples: readonly ["https://"];
                        };
                        readonly chimoneyPaymentRequestCreateURL: {
                            readonly type: "string";
                            readonly examples: readonly ["https://"];
                        };
                        readonly chimoneyAPIEndpoint: {
                            readonly type: "string";
                            readonly examples: readonly ["https://"];
                        };
                        readonly json: {
                            readonly type: "object";
                            readonly properties: {
                                readonly invoiceDate: {
                                    readonly type: "string";
                                };
                                readonly invoiceNumber: {
                                    readonly type: "number";
                                };
                                readonly dueDate: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02InfoCommunitiesVerifyCode: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly code: {
                readonly type: "string";
                readonly description: "Chimoney issued voucher code";
                readonly examples: readonly ["CHIMONEY00000"];
            };
        };
        readonly required: readonly ["code"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                                readonly examples: readonly ["CHIMONEY00000"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02InfoVerifyBankAccountNumber: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly verifyAccountNumbers: {
                readonly type: "array";
                readonly description: "verify bank account";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly countryCode: {
                            readonly type: "string";
                            readonly description: "Bank of country to verify";
                            readonly examples: readonly ["NG"];
                        };
                        readonly account_bank: {
                            readonly type: "string";
                            readonly description: "bank code";
                            readonly examples: readonly ["044"];
                        };
                        readonly account_number: {
                            readonly type: "string";
                            readonly description: "account number";
                            readonly examples: readonly ["0690000031"];
                        };
                    };
                    readonly required: readonly ["countryCode", "account_bank", "account_number"];
                };
            };
        };
        readonly required: readonly ["verifyAccountNumbers"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly account_name: {
                                readonly type: "string";
                                readonly examples: readonly ["zack"];
                            };
                            readonly account_number: {
                                readonly type: "string";
                                readonly examples: readonly ["134567"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02MulticurrencyWalletsCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name of owner of Wallet.";
                readonly examples: readonly ["Mide Jones"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Email of owner of Wallet.";
                readonly examples: readonly ["user@mail.com"];
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "First Name of owner.";
                readonly examples: readonly ["Mide"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "Last Name of owner.";
                readonly examples: readonly ["Jones"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Phone Number with country code starting with a +.";
                readonly examples: readonly ["+16471234567"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "Metadata to store about the account.";
                readonly additionalProperties: true;
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly parent: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly uid: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly subAccount: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02MulticurrencyWalletsTransfer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sender: {
                readonly type: "string";
                readonly description: "ID of Multicurrency Account. Leave blank to transfer from parent.";
                readonly examples: readonly ["1234567"];
            };
            readonly amountToSend: {
                readonly type: "string";
                readonly description: "Amount in originCurrency currency to transfer/swap.";
                readonly examples: readonly [200];
            };
            readonly originCurrency: {
                readonly type: "string";
                readonly description: "ISO Currency String like CAD, USD etc of the wallet to transfer from";
            };
            readonly receiver: {
                readonly type: "string";
                readonly description: "Valid Chimoney Multi-currency Account, User or Organization ID.";
                readonly examples: readonly ["1234567"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Send transfer to an email. Ignored if receiver is valid";
                readonly examples: readonly ["user@mail.com"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Send transfer to an phone number. Ignored if receiver or email is valid";
                readonly examples: readonly ["+16471234567"];
            };
            readonly destinationCurrency: {
                readonly type: "string";
                readonly description: "ISO Currency String like CAD, USD etc of the wallet to transfer to";
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
        };
        readonly required: readonly ["amountToSend", "originCurrency", "destinationCurrency"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["sender must be a valid Chimoney user ID"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02MulticurrencyWalletsTransferQuote: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly sender: {
                readonly type: "string";
                readonly description: "ID of Multicurrency Account. Leave blank to transfer from parent.";
                readonly examples: readonly ["1234567"];
            };
            readonly amountToSend: {
                readonly type: "string";
                readonly description: "Amount in originCurrency currency to transfer/swap.";
                readonly examples: readonly [200];
            };
            readonly originCurrency: {
                readonly type: "string";
                readonly description: "ISO Currency String like CAD, USD etc of the wallet to transfer from";
            };
            readonly receiver: {
                readonly type: "string";
                readonly description: "Valid Chimoney Multi-currency Account, User or Organization ID.";
                readonly examples: readonly ["1234567"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Send transfer to an email. Ignored if receiver is valid";
                readonly examples: readonly ["user@mail.com"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Send transfer to an phone number. Ignored if receiver or email is valid";
                readonly examples: readonly ["+16471234567"];
            };
            readonly destinationCurrency: {
                readonly type: "string";
                readonly description: "ISO Currency String like CAD, USD etc of the wallet to transfer to";
            };
        };
        readonly required: readonly ["amountToSend", "originCurrency", "destinationCurrency"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["sender must be a valid Chimoney user ID"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02MulticurrencyWalletsUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "MultiCurrency Wallet ID.";
                readonly examples: readonly ["3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "meta to store any number of user information.";
                readonly additionalProperties: true;
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "First Name of user.";
                readonly examples: readonly ["Mide"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "Last Name of user.";
                readonly examples: readonly ["Jones"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Phone Number with country code starting with a +.";
                readonly examples: readonly ["+16471234567"];
            };
        };
        readonly required: readonly ["id", "meta"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PaymentInitiate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly valueInUSD: {
                readonly type: "number";
                readonly description: "Amount in USD to collect.";
                readonly examples: readonly [10];
            };
            readonly payerEmail: {
                readonly type: "string";
                readonly description: "Email of the one making the payment.";
                readonly examples: readonly ["devs@chimoney.io"];
            };
            readonly currency: {
                readonly type: "string";
                readonly description: "ISO Currency String like CAD, USD etc.";
                readonly examples: readonly ["CAD"];
            };
            readonly amount: {
                readonly type: "string";
                readonly description: "Amount in specifiec \"currency\" to collect. Required if currency is set";
                readonly examples: readonly [10];
            };
            readonly redirect_url: {
                readonly type: "string";
                readonly description: "url to redirect to after payment is confirmed";
                readonly examples: readonly ["https://example.com/confirm"];
            };
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["jnirjmt0405jmd"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "Object containing metadata you want to pass to the request to use later";
                readonly additionalProperties: true;
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notification from Chimoney.";
                readonly examples: readonly ["false"];
            };
        };
        readonly required: readonly ["payerEmail"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["https://dash.chimoney.io/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1661120543057"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly examples: readonly ["5"];
                        };
                        readonly chimoney: {
                            readonly type: "number";
                            readonly examples: readonly ["5000"];
                        };
                        readonly issueID: {
                            readonly type: "string";
                            readonly examples: readonly ["dji-29848400404-date"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["api-payment"];
                        };
                        readonly issuer: {
                            readonly type: "string";
                            readonly examples: readonly ["dji-29848400404"];
                        };
                        readonly payerEmail: {
                            readonly type: "string";
                            readonly examples: readonly ["name@mail.com"];
                        };
                        readonly initiatedBy: {
                            readonly type: "string";
                            readonly examples: readonly ["dji-29848400404"];
                        };
                        readonly issueDate: {
                            readonly type: "string";
                            readonly examples: readonly ["2024/10/23"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["unpaid"];
                        };
                        readonly chiRef: {
                            readonly type: "string";
                            readonly examples: readonly ["djeoeuk-mdhhmmr-mdnhe-kei8e"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly cryptoPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly xrpl: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly eth: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly bsc: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PaymentSimulate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly issueID: {
                readonly type: "string";
                readonly description: "The transaction id (issueID).";
                readonly examples: readonly ["PaymentId"];
            };
            readonly status: {
                readonly type: "string";
                readonly description: "status to change to.";
                readonly examples: readonly ["failed"];
            };
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly required: readonly ["issueID", "status"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1661120543057"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly cryptoPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly xrpl: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly eth: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly bsc: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PaymentVerify: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly id: {
                readonly type: "string";
                readonly description: "The transaction id (issueID).";
                readonly examples: readonly ["PaymentId"];
            };
        };
        readonly required: readonly ["id"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1661120543057"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly cryptoPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly xrpl: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly eth: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly bsc: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsAirtime: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly airtimes: {
                readonly type: "array";
                readonly description: "Airtime.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly countryToSend: {
                            readonly type: "string";
                            readonly description: "Country of recipient.";
                            readonly examples: readonly ["Nigeria"];
                        };
                        readonly phoneNumber: {
                            readonly type: "string";
                            readonly description: "Phone number of recipient.";
                            readonly examples: readonly ["+2341000000000"];
                        };
                        readonly valueInUSD: {
                            readonly description: "payout value in USD";
                        };
                    };
                    readonly required: readonly ["countryToSend", "phoneNumber", "valueInUSD"];
                };
            };
        };
        readonly required: readonly ["airtimes"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly payoutLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1661114934226"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly payouts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsBank: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly debitCurrency: {
                readonly type: "string";
                readonly description: "Wallet Currency to debit from.";
                readonly examples: readonly ["CAD"];
            };
            readonly banks: {
                readonly type: "array";
                readonly description: "Banks.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly countryToSend: {
                            readonly type: "string";
                            readonly description: "Payout country.";
                            readonly examples: readonly ["Nigeria"];
                        };
                        readonly account_bank: {
                            readonly type: "string";
                            readonly description: "Bank code.";
                            readonly examples: readonly ["044"];
                        };
                        readonly account_number: {
                            readonly type: "string";
                            readonly description: "Recipient account number.";
                            readonly examples: readonly ["0690000031"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Payout value in USD.";
                            readonly examples: readonly [10];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Payout amount in specified currency. Defaults to valueInUSD.";
                            readonly examples: readonly [10];
                        };
                        readonly reference: {
                            readonly type: "string";
                            readonly description: "Transaction reference.";
                            readonly examples: readonly ["1234567890"];
                        };
                        readonly fullname: {
                            readonly type: "string";
                            readonly description: "Full name of beneficiary. Required for all countries except Nigeria";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly branch_code: {
                            readonly type: "string";
                            readonly description: "branch_code from /info/bank-branches. Required for all countries except Nigeria";
                            readonly examples: readonly ["GH190101"];
                        };
                    };
                    readonly required: readonly ["countryToSend", "account_bank", "account_number"];
                };
            };
        };
        readonly required: readonly ["banks"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly payouts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsChimoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly chimoneys: {
                readonly type: "array";
                readonly description: "Chimoneys payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Recipient email address.";
                            readonly examples: readonly ["test@gmail.com"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "Recipient Phone Number with country code.";
                            readonly examples: readonly ["+16471112222"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Amount in USD to send.";
                            readonly examples: readonly [10];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Amount in specifiec currency to send. Required if currency is set";
                            readonly examples: readonly [10];
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "ISO Currency String like CAD, USD etc";
                            readonly examples: readonly ["CAD"];
                        };
                        readonly redeemData: {
                            readonly type: "object";
                            readonly properties: {
                                readonly walletID: {
                                    readonly type: "string";
                                    readonly description: "Chimoney Wallet ID to deposit the value to.";
                                    readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                                };
                                readonly interledgerWalletAddress: {
                                    readonly type: "string";
                                    readonly description: "Interledger Wallet Address (Payment Pointer) to settle the Payment in. Must be issued by a Chimoney Interledger pair";
                                    readonly examples: readonly ["https://ilp.chimoney.io/uchi"];
                                };
                            };
                        };
                    };
                    readonly required: readonly ["valueInUSD"];
                };
            };
        };
        readonly required: readonly ["chimoneys"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_2_1661118346647"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsGiftCard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly giftcards: {
                readonly type: "array";
                readonly description: "Giftcard payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Recipient email address.";
                            readonly examples: readonly ["test@gmail.com"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Value in USD.";
                            readonly examples: readonly [10];
                        };
                        readonly redeemData: {
                            readonly type: "object";
                            readonly description: "Data needed to redeem.";
                            readonly properties: {
                                readonly productId: {
                                    readonly type: "number";
                                    readonly description: "Product ID.";
                                    readonly examples: readonly [5];
                                };
                                readonly countryCode: {
                                    readonly type: "string";
                                    readonly description: "The country code.";
                                    readonly examples: readonly ["US"];
                                };
                                readonly valueInLocalCurrency: {
                                    readonly type: "number";
                                    readonly description: "The value in local currency.";
                                    readonly examples: readonly [10];
                                };
                            };
                        };
                    };
                    readonly required: readonly ["email", "valueInUSD"];
                };
            };
        };
        readonly required: readonly ["giftcards"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly payouts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsInitiateChimoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly redirect_url: {
                readonly type: "string";
                readonly description: "url to redirect to after payment is confirmed";
                readonly examples: readonly ["https://example.com/confirm"];
            };
            readonly debitCurrency: {
                readonly type: "string";
                readonly description: "Wallet Currency to debit from.";
                readonly examples: readonly ["CAD"];
            };
            readonly chimoneys: {
                readonly type: "array";
                readonly description: "Chimoneys payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Recipient email address.";
                            readonly examples: readonly ["test@gmail.com"];
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "Recipient Phone Number with country code.";
                            readonly examples: readonly ["+16471112222"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Value in USD. Defaults to valueInUSD and ignores amount if both set.";
                            readonly examples: readonly [10];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Amount in debitCurrency to send. debitCurrency is required if set.";
                            readonly examples: readonly [10];
                        };
                        readonly twitter: {
                            readonly type: "string";
                            readonly description: "Twitter handle.";
                            readonly examples: readonly ["@test"];
                        };
                        readonly redeemData: {
                            readonly type: "object";
                            readonly properties: {
                                readonly walletID: {
                                    readonly type: "string";
                                    readonly description: "Chimoney Wallet ID to deposit the value to.";
                                    readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                                };
                                readonly interledgerWalletAddress: {
                                    readonly type: "string";
                                    readonly description: "Interledger Wallet Address (Payment Pointer) to settle the Payment in. Must be issued by a Chimoney Interledger pair";
                                    readonly examples: readonly ["https://ilp.chimoney.com/uchi"];
                                };
                                readonly account_bank: {
                                    readonly type: "string";
                                    readonly description: "Bank code.";
                                    readonly examples: readonly ["044"];
                                };
                                readonly account_number: {
                                    readonly type: "string";
                                    readonly description: "Recipient account number.";
                                    readonly examples: readonly ["0690000031"];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Local currency to payout to.";
                                    readonly examples: readonly ["NGN"];
                                };
                                readonly branch_code: {
                                    readonly type: "string";
                                    readonly description: "branch_code from /info/bank-branches. Required for all countries except Nigeria";
                                    readonly examples: readonly ["GH190101"];
                                };
                                readonly fullname: {
                                    readonly type: "string";
                                    readonly description: "fullname of the receiver of the bank payout";
                                    readonly examples: readonly ["Jane Doe"];
                                };
                            };
                        };
                    };
                };
            };
            readonly enableXUMMPayment: {
                readonly type: "boolean";
                readonly description: "Generate a Xumm transaction sign link";
                readonly examples: readonly ["false"];
            };
            readonly enableInterledgerPayment: {
                readonly type: "boolean";
                readonly description: "Generate an Open Payment payment request to pay with Interledger";
                readonly examples: readonly ["false"];
            };
            readonly cryptoPayment: {
                readonly type: "array";
                readonly description: "Crypto payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly xrpl: {
                            readonly type: "object";
                            readonly description: "XRP object.";
                            readonly properties: {
                                readonly address: {
                                    readonly type: "string";
                                    readonly description: "Wallet address.";
                                    readonly examples: readonly ["0x1234567890"];
                                };
                                readonly issuer: {
                                    readonly type: "string";
                                    readonly description: "Issuer.";
                                    readonly examples: readonly ["issuer"];
                                };
                                readonly currency: {
                                    readonly type: "string";
                                    readonly description: "Currency.";
                                    readonly examples: readonly ["currency"];
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly required: readonly ["chimoneys"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1661120543057"];
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly cryptoPayment: {
                            readonly type: "object";
                            readonly properties: {
                                readonly xrpl: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly eth: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                                readonly bsc: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsInterac: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly debitCurrency: {
                readonly type: "string";
                readonly description: "Wallet Currency to debit from.";
                readonly examples: readonly ["CAD"];
            };
            readonly interacs: {
                readonly type: "array";
                readonly description: "Interac Transactions.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Email to send to.";
                            readonly examples: readonly ["user@mail.com"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Full name of the receiver of the payment";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly amount: {
                            readonly type: "number";
                            readonly description: "Payout value in specified currency. If debitCurrency is not CAD, we do an FX transaction.";
                            readonly examples: readonly [10];
                        };
                        readonly narration: {
                            readonly type: "string";
                            readonly description: "Narration/Description of payment to be included notification to user";
                            readonly examples: readonly ["Monthly Rent Payment"];
                        };
                    };
                    readonly required: readonly ["email", "name", "debitCurrency", "amount"];
                };
            };
        };
        readonly required: readonly ["debitCurrency", "interacs"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly payouts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsInterledgerWalletAddress: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly interledgerWallets: {
                readonly type: "array";
                readonly description: "Interledger Wallet Address payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly interledgerWalletAddress: {
                            readonly type: "string";
                            readonly description: "Interledger Wallet Address (Payment Pointer) to settle the Payment in. Must be issued by a Chimoney Interledger pair";
                            readonly examples: readonly ["https://ilp.chimoney.io/uchi"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Value in USD to send.";
                            readonly examples: readonly [10];
                        };
                    };
                    readonly required: readonly ["valueInUSD", "interledgerWalletAddress"];
                };
            };
        };
        readonly required: readonly ["interledgerWallets"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_2_1661118346647"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly momos: {
                readonly type: "array";
                readonly description: "Mobile Money.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly countryToSend: {
                            readonly type: "string";
                            readonly description: "Payout country.";
                            readonly examples: readonly ["Kenya"];
                        };
                        readonly phoneNumber: {
                            readonly type: "string";
                            readonly description: "Recipient phone Number.";
                            readonly examples: readonly ["254710102720"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Payout value in USD.";
                            readonly examples: readonly [10];
                        };
                        readonly reference: {
                            readonly type: "string";
                            readonly description: "Transaction reference.";
                            readonly examples: readonly ["1234567890"];
                        };
                        readonly momoCode: {
                            readonly type: "string";
                            readonly description: "Mobile money code.";
                            readonly examples: readonly ["MPS"];
                        };
                    };
                    readonly required: readonly ["countryToSend", "phoneNumber", "valueInUSD", "momoCode"];
                };
            };
        };
        readonly required: readonly ["momos"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly payouts: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsProcess: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly issueID: {
                readonly type: "string";
                readonly description: "issueID of the transaction to process.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly required: readonly ["issueID"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chimoney: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["Czm8fwDT3tplAjRKBJK9"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["chimoney"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["unpaid"];
                        };
                        readonly issueDate: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-05-09T03:10:03.172Z"];
                        };
                        readonly issuer: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly issuerID: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1652065798092"];
                        };
                        readonly chimoney: {
                            readonly type: "number";
                            readonly examples: readonly [1000];
                        };
                        readonly chiRef: {
                            readonly type: "string";
                            readonly examples: readonly ["f9a24bc5-99b4-4d15-ba05-95844322b06c"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsStatus: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly chiRef: {
                readonly type: "string";
                readonly description: "Chi reference.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly required: readonly ["chiRef"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly chimoney: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["Czm8fwDT3tplAjRKBJK9"];
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly examples: readonly ["chimoney"];
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly examples: readonly ["unpaid"];
                        };
                        readonly issueDate: {
                            readonly type: "string";
                            readonly examples: readonly ["2022-05-09T03:10:03.172Z"];
                        };
                        readonly issuer: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly issuerID: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_1_1652065798092"];
                        };
                        readonly chimoney: {
                            readonly type: "number";
                            readonly examples: readonly [1000];
                        };
                        readonly chiRef: {
                            readonly type: "string";
                            readonly examples: readonly ["f9a24bc5-99b4-4d15-ba05-95844322b06c"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02PayoutsWallet: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount (Wallet Account) to payout from, if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "disables email and other notifications from Chimoney.";
                readonly examples: readonly ["false"];
            };
            readonly wallets: {
                readonly type: "array";
                readonly description: "Wallets payload.";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly receiver: {
                            readonly type: "string";
                            readonly description: "Valid Chimoney User or Organization ID.";
                            readonly examples: readonly ["dimfofofofoof"];
                        };
                        readonly valueInUSD: {
                            readonly type: "number";
                            readonly description: "Value in USD.";
                            readonly examples: readonly [10];
                        };
                    };
                    readonly required: readonly ["valueInUSD", "receiver"];
                };
            };
        };
        readonly required: readonly ["wallets"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Status of the request.";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentLink: {
                            readonly type: "string";
                            readonly examples: readonly ["undefined/pay/?issueID=XQTUvRBntIU3AHgQ3jFuN9ZcHIC3_2_1661118346647"];
                        };
                        readonly data: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly chimoneys: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly [""];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02RedeemAirtime: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly chiRef: {
                readonly type: "string";
                readonly description: "Chi reference.";
                readonly examples: readonly ["1234567"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Phone number.";
                readonly examples: readonly ["+2341234567"];
            };
            readonly countryToSend: {
                readonly type: "string";
                readonly description: "Country to send to.";
                readonly examples: readonly ["Nigeria"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "Any data to be sent along with request.";
                readonly properties: {
                    readonly test: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                };
            };
        };
        readonly required: readonly ["chiRef", "phoneNumber", "countryToSend"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["ERROR-REDEEMED"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02RedeemAny: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly chiRef: {
                readonly type: "string";
                readonly description: "Chi reference.";
                readonly examples: readonly ["1234567"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "Any data to be sent along with request.";
                readonly properties: {
                    readonly test: {
                        readonly type: "boolean";
                        readonly examples: readonly [true];
                    };
                };
            };
            readonly redeemData: {
                readonly type: "object";
                readonly description: "Data needed to redeem. See examples in body";
                readonly additionalProperties: true;
            };
        };
        readonly required: readonly ["chiRef", "redeemData"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["no transaction found for chiRef fe4be375-78a8-4133-9841-7ea02d6e23e7"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02RedeemChimoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly turnOffNotification: {
                readonly type: "boolean";
                readonly description: "turn off notification is undefined by default.";
                readonly examples: readonly ["false"];
            };
            readonly chimoneys: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
        };
        readonly required: readonly ["chimoneys"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["ERROR-REDEEMED"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02RedeemGiftCard: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly chiRef: {
                readonly type: "string";
                readonly description: "Chi reference.";
                readonly examples: readonly ["1234567"];
            };
            readonly redeemOptions: {
                readonly type: "object";
                readonly description: "Data needed to redeem.";
                readonly additionalProperties: true;
            };
        };
        readonly required: readonly ["chiRef", "redeemOptions"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["ERROR-REDEEMED"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02RedeemMobileMoney: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly chiRef: {
                readonly type: "string";
                readonly description: "Chi reference.";
                readonly examples: readonly ["1234567"];
            };
            readonly redeemOptions: {
                readonly type: "object";
                readonly description: "Data needed to redeem.";
                readonly additionalProperties: true;
            };
        };
        readonly required: readonly ["chiRef", "redeemOptions"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Success";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly description: "Response data";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["ERROR-REDEEMED"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02SubAccountCommunityCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "SubAccount ID.";
                readonly examples: readonly ["8b8522d0-fe5f-4813-a5cf-e45e8be10905"];
            };
            readonly community: {
                readonly type: "object";
                readonly description: "Community payload.";
                readonly properties: {
                    readonly communityID: {
                        readonly type: "integer";
                        readonly examples: readonly [1];
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly examples: readonly ["Test Community"];
                    };
                    readonly membershipID: {
                        readonly type: "string";
                        readonly examples: readonly ["23232323"];
                    };
                    readonly memberName: {
                        readonly type: "string";
                        readonly examples: readonly ["Test Test Chimoney"];
                    };
                    readonly voucherCode: {
                        readonly type: readonly ["string", "null"];
                    };
                    readonly communityType: {
                        readonly type: "string";
                        readonly examples: readonly ["paid"];
                    };
                };
                readonly required: readonly ["communityID", "name", "membershipID", "memberName", "communityType"];
            };
        };
        readonly required: readonly ["id", "community"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["successful"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02SubAccountCommunityUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "SubAccount ID.";
                readonly examples: readonly ["8b8522d0-fe5f-4813-a5cf-e45e8be10905"];
            };
            readonly community: {
                readonly type: "object";
                readonly properties: {
                    readonly communityID: {
                        readonly type: "integer";
                        readonly examples: readonly [1];
                    };
                    readonly membershipID: {
                        readonly type: "string";
                        readonly examples: readonly ["23232323"];
                    };
                    readonly memberName: {
                        readonly type: "string";
                        readonly examples: readonly ["Test Test Chimoney"];
                    };
                };
            };
        };
        readonly required: readonly ["id", "community"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly message: {
                            readonly type: "string";
                            readonly examples: readonly ["successful"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02SubAccountCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: "string";
                readonly description: "Name.";
                readonly examples: readonly ["Mide Jones"];
            };
            readonly email: {
                readonly type: "string";
                readonly description: "Email of user.";
                readonly examples: readonly ["user@mail.com"];
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "First Name of user.";
                readonly examples: readonly ["Mide"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "Last Name of user.";
                readonly examples: readonly ["Jones"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Phone Number with country code starting with a +.";
                readonly examples: readonly ["+16471234567"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "Metadata to store about the account.";
                readonly additionalProperties: true;
            };
            readonly id: {
                readonly type: "string";
                readonly description: "Optional. A valid UUID for the user.";
                readonly examples: readonly ["8b8522d0-fe5f-4813-a5cf-e45e8be10905"];
            };
        };
        readonly required: readonly ["name"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly parent: {
                            readonly type: "string";
                            readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                        };
                        readonly uid: {
                            readonly type: "string";
                            readonly examples: readonly ["35290d7c-535c-4451-bcba-af7f42761ae7"];
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly examples: readonly ["Jane Doe"];
                        };
                        readonly subAccount: {
                            readonly type: "boolean";
                            readonly examples: readonly [true];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02SubAccountUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly id: {
                readonly type: "string";
                readonly description: "Sub Account ID.";
                readonly examples: readonly ["3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7"];
            };
            readonly meta: {
                readonly type: "object";
                readonly description: "meta to store any number of user information.";
                readonly additionalProperties: true;
            };
            readonly firstName: {
                readonly type: "string";
                readonly description: "First Name of user.";
                readonly examples: readonly ["Mide"];
            };
            readonly lastName: {
                readonly type: "string";
                readonly description: "Last Name of user.";
                readonly examples: readonly ["Jones"];
            };
            readonly phoneNumber: {
                readonly type: "string";
                readonly description: "Phone Number with country code starting with a +.";
                readonly examples: readonly ["+16471234567"];
            };
        };
        readonly required: readonly ["id", "meta"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["Account with id 3c7b4a2a-dc67-439e-bde1-f5b30fb36bb7 not found"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02WalletsList: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly examples: readonly ["41xddwTXfVmUR1IHcYCk"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly examples: readonly ["chi"];
                            };
                            readonly balance: {
                                readonly type: "number";
                                readonly examples: readonly [529.0179999999988];
                            };
                            readonly owner: {
                                readonly type: "string";
                                readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                            };
                            readonly transactions: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["sender must be a valid Chimoney user ID"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02WalletsLookup: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly walletID: {
                readonly type: "string";
                readonly description: "Id of wallet.";
                readonly examples: readonly ["12"];
            };
        };
        readonly required: readonly ["walletID"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["success"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "string";
                            readonly examples: readonly ["None"];
                        };
                        readonly data: {
                            readonly type: "object";
                            readonly properties: {
                                readonly sender: {
                                    readonly type: "string";
                                    readonly examples: readonly ["XQTUvRBntIU3AHgQ3jFuN9ZcHIC3"];
                                };
                                readonly wallet: {
                                    readonly type: "string";
                                    readonly examples: readonly ["airtime"];
                                };
                                readonly tnxID: {
                                    readonly type: "string";
                                    readonly examples: readonly ["49954472-f7f1-45d0-bd20-fd8fea384203"];
                                };
                                readonly receiver: {
                                    readonly type: "string";
                                    readonly examples: readonly ["ae07bf52-002b-489a-bc12-202f3beb3260"];
                                };
                                readonly amount: {
                                    readonly type: "number";
                                    readonly examples: readonly [1];
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["sender must be a valid Chimoney user ID"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostV02WalletsTransfer: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subAccount: {
                readonly type: "string";
                readonly description: "Subaccount if any.";
                readonly examples: readonly ["1234567"];
            };
            readonly receiver: {
                readonly type: "string";
                readonly description: "Valid Chimoney User or Organization ID.";
                readonly examples: readonly ["1234567"];
            };
            readonly wallet: {
                readonly type: "string";
                readonly description: "Wallet type. Leave blank except you fully understand the different wallet types [\"chi\", \"momo\", \"airtime\"]";
                readonly examples: readonly ["chi"];
            };
            readonly valueInUSD: {
                readonly type: "number";
                readonly description: "valueInUSD.";
                readonly examples: readonly [200];
            };
        };
        readonly required: readonly ["receiver", "valueInUSD"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly data: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly examples: readonly ["sender must be a valid Chimoney user ID"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["key is not defined. Generate a new one from the developer portal"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly description: "Failure";
                    readonly examples: readonly ["error"];
                };
                readonly error: {
                    readonly type: "string";
                    readonly description: "Error message";
                    readonly examples: readonly ["API Access not enabled for account Test. Email support@chimoney.io"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteV02AccountsDeleteUnpaidTransaction, DeleteV02SubAccountDelete, GetV02InfoAirtimeCountries, GetV02InfoAssets, GetV02InfoBankBranches, GetV02InfoConvertLocalAmountToUsd, GetV02InfoConvertUsdToLocalAmount, GetV02InfoCountryBanks, GetV02InfoExchangeRates, GetV02InfoLocalAmountInUsd, GetV02InfoMobileMoneyCodes, GetV02InfoUsdAmountInLocal, GetV02MulticurrencyWalletsGet, GetV02MulticurrencyWalletsList, GetV02SubAccountGet, GetV02SubAccountList, PostV02AccountsIssueIdTransactions, PostV02AccountsPublicProfile, PostV02AccountsTransaction, PostV02AccountsTransactions, PostV02AccountsTransfer, PostV02AiInvoiceGenerate, PostV02InfoCommunitiesVerifyCode, PostV02InfoVerifyBankAccountNumber, PostV02MulticurrencyWalletsCreate, PostV02MulticurrencyWalletsTransfer, PostV02MulticurrencyWalletsTransferQuote, PostV02MulticurrencyWalletsUpdate, PostV02PaymentInitiate, PostV02PaymentSimulate, PostV02PaymentVerify, PostV02PayoutsAirtime, PostV02PayoutsBank, PostV02PayoutsChimoney, PostV02PayoutsGiftCard, PostV02PayoutsInitiateChimoney, PostV02PayoutsInterac, PostV02PayoutsInterledgerWalletAddress, PostV02PayoutsMobileMoney, PostV02PayoutsProcess, PostV02PayoutsStatus, PostV02PayoutsWallet, PostV02RedeemAirtime, PostV02RedeemAny, PostV02RedeemChimoney, PostV02RedeemGiftCard, PostV02RedeemMobileMoney, PostV02SubAccountCommunityCreate, PostV02SubAccountCommunityUpdate, PostV02SubAccountCreate, PostV02SubAccountUpdate, PostV02WalletsList, PostV02WalletsLookup, PostV02WalletsTransfer };
