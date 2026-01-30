# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserLoginResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserRegisterResponse</a></code>

Methods:

- <code title="post /users/login">client.users.<a href="./src/resources/users/users.ts">login</a>({ ...params }) -> UserLoginResponse</code>
- <code title="post /users/logout">client.users.<a href="./src/resources/users/users.ts">logout</a>() -> void</code>
- <code title="post /users/register">client.users.<a href="./src/resources/users/users.ts">register</a>({ ...params }) -> UserRegisterResponse</code>

## PasswordReset

Types:

- <code><a href="./src/resources/users/password-reset.ts">PasswordResetConfirmResponse</a></code>
- <code><a href="./src/resources/users/password-reset.ts">PasswordResetInitiateResponse</a></code>

Methods:

- <code title="post /users/password-reset/confirm">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">confirm</a>({ ...params }) -> PasswordResetConfirmResponse</code>
- <code title="post /users/password-reset/initiate">client.users.passwordReset.<a href="./src/resources/users/password-reset.ts">initiate</a>({ ...params }) -> PasswordResetInitiateResponse</code>

## Me

Types:

- <code><a href="./src/resources/users/me/me.ts">MeRetrieveResponse</a></code>

Methods:

- <code title="get /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="put /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">update</a>() -> void</code>
- <code title="delete /users/me">client.users.me.<a href="./src/resources/users/me/me.ts">delete</a>() -> void</code>

### Preferences

Types:

- <code><a href="./src/resources/users/me/preferences.ts">PreferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me/preferences.ts">PreferenceUpdateResponse</a></code>

Methods:

- <code title="get /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">retrieve</a>() -> PreferenceRetrieveResponse</code>
- <code title="put /users/me/preferences">client.users.me.preferences.<a href="./src/resources/users/me/preferences.ts">update</a>({ ...params }) -> PreferenceUpdateResponse</code>

### Security

Types:

- <code><a href="./src/resources/users/me/security.ts">SecurityRetrieveLogResponse</a></code>
- <code><a href="./src/resources/users/me/security.ts">SecurityRotateKeysResponse</a></code>

Methods:

- <code title="get /users/me/security/log">client.users.me.security.<a href="./src/resources/users/me/security.ts">retrieveLog</a>({ ...params }) -> SecurityRetrieveLogResponse</code>
- <code title="post /users/me/security/rotate-keys">client.users.me.security.<a href="./src/resources/users/me/security.ts">rotateKeys</a>() -> SecurityRotateKeysResponse</code>

### Devices

Types:

- <code><a href="./src/resources/users/me/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">list</a>() -> DeviceListResponse</code>
- <code title="delete /users/me/devices/{deviceId}">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">deregister</a>(deviceID) -> void</code>
- <code title="post /users/me/devices">client.users.me.devices.<a href="./src/resources/users/me/devices.ts">register</a>({ ...params }) -> void</code>

### Biometrics

Types:

- <code><a href="./src/resources/users/me/biometrics.ts">BiometricRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/users/me/biometrics.ts">BiometricVerifyResponse</a></code>

Methods:

- <code title="post /users/me/biometrics/enroll">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">enroll</a>({ ...params }) -> void</code>
- <code title="delete /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">removeAll</a>() -> void</code>
- <code title="get /users/me/biometrics">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">retrieveStatus</a>() -> BiometricRetrieveStatusResponse</code>
- <code title="post /users/me/biometrics/verify">client.users.me.biometrics.<a href="./src/resources/users/me/biometrics.ts">verify</a>({ ...params }) -> BiometricVerifyResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">AccountLinkResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountOpenResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveBalanceHistoryResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveDetailsResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountRetrieveMeResponse</a></code>

Methods:

- <code title="delete /accounts/{accountId}">client.accounts.<a href="./src/resources/accounts/accounts.ts">delete</a>(accountID) -> void</code>
- <code title="post /accounts/link">client.accounts.<a href="./src/resources/accounts/accounts.ts">link</a>({ ...params }) -> AccountLinkResponse</code>
- <code title="post /accounts/open">client.accounts.<a href="./src/resources/accounts/accounts.ts">open</a>({ ...params }) -> AccountOpenResponse</code>
- <code title="get /accounts/{accountId}/balance-history">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveBalanceHistory</a>(accountID, { ...params }) -> AccountRetrieveBalanceHistoryResponse</code>
- <code title="get /accounts/{accountId}/details">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveDetails</a>(accountID) -> AccountRetrieveDetailsResponse</code>
- <code title="get /accounts/me">client.accounts.<a href="./src/resources/accounts/accounts.ts">retrieveMe</a>() -> AccountRetrieveMeResponse</code>

## Transactions

Types:

- <code><a href="./src/resources/accounts/transactions.ts">TransactionRetrieveArchivedResponse</a></code>
- <code><a href="./src/resources/accounts/transactions.ts">TransactionRetrievePendingResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/transactions/archived">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">retrieveArchived</a>(accountID, { ...params }) -> TransactionRetrieveArchivedResponse</code>
- <code title="get /accounts/{accountId}/transactions/pending">client.accounts.transactions.<a href="./src/resources/accounts/transactions.ts">retrievePending</a>(accountID) -> TransactionRetrievePendingResponse</code>

## Statements

Types:

- <code><a href="./src/resources/accounts/statements.ts">StatementListResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/statements">client.accounts.statements.<a href="./src/resources/accounts/statements.ts">list</a>(accountID) -> StatementListResponse</code>
- <code title="get /accounts/{accountId}/statements/{statementId}/pdf">client.accounts.statements.<a href="./src/resources/accounts/statements.ts">retrievePdf</a>(statementID, { ...params }) -> void</code>

## OverdraftSettings

Types:

- <code><a href="./src/resources/accounts/overdraft-settings.ts">OverdraftSettingRetrieveOverdraftSettingsResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/overdraft-settings">client.accounts.overdraftSettings.<a href="./src/resources/accounts/overdraft-settings.ts">retrieveOverdraftSettings</a>(accountID) -> OverdraftSettingRetrieveOverdraftSettingsResponse</code>
- <code title="put /accounts/{accountId}/overdraft-settings">client.accounts.overdraftSettings.<a href="./src/resources/accounts/overdraft-settings.ts">updateOverdraftSettings</a>(accountID, { ...params }) -> void</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions/transactions.ts">TransactionCategorizeResponse</a></code>

Methods:

- <code title="get /transactions/{transactionId}">client.transactions.<a href="./src/resources/transactions/transactions.ts">retrieve</a>(transactionID) -> TransactionRetrieveResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="put /transactions/{transactionId}/notes">client.transactions.<a href="./src/resources/transactions/transactions.ts">addNotes</a>(transactionID, { ...params }) -> void</code>
- <code title="put /transactions/{transactionId}/categorize">client.transactions.<a href="./src/resources/transactions/transactions.ts">categorize</a>(transactionID, { ...params }) -> TransactionCategorizeResponse</code>
- <code title="post /transactions/{transactionId}/dispute">client.transactions.<a href="./src/resources/transactions/transactions.ts">initiateDispute</a>(transactionID, { ...params }) -> void</code>
- <code title="post /transactions/{transactionId}/split">client.transactions.<a href="./src/resources/transactions/transactions.ts">split</a>(transactionID, { ...params }) -> void</code>

## Recurring

Types:

- <code><a href="./src/resources/transactions/recurring.ts">RecurringListResponse</a></code>

Methods:

- <code title="post /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">create</a>({ ...params }) -> void</code>
- <code title="get /transactions/recurring">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">list</a>() -> RecurringListResponse</code>
- <code title="delete /transactions/recurring/{recurringId}">client.transactions.recurring.<a href="./src/resources/transactions/recurring.ts">cancel</a>(recurringID) -> void</code>

## Insights

Types:

- <code><a href="./src/resources/transactions/insights.ts">InsightGetCashFlowPredictionResponse</a></code>
- <code><a href="./src/resources/transactions/insights.ts">InsightGetSpendingTrendsResponse</a></code>

Methods:

- <code title="get /transactions/insights/future-flow">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getCashFlowPrediction</a>() -> InsightGetCashFlowPredictionResponse</code>
- <code title="get /transactions/insights/spending-trends">client.transactions.insights.<a href="./src/resources/transactions/insights.ts">getSpendingTrends</a>() -> InsightGetSpendingTrendsResponse</code>

# AI

## Oracle

### Simulate

Types:

- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateCreateResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulate.ts">SimulateAdvancedResponse</a></code>

Methods:

- <code title="post /ai/oracle/simulate">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">create</a>({ ...params }) -> SimulateCreateResponse</code>
- <code title="post /ai/oracle/simulate/advanced">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">advanced</a>({ ...params }) -> SimulateAdvancedResponse</code>
- <code title="post /ai/oracle/simulate/monte-carlo">client.ai.oracle.simulate.<a href="./src/resources/ai/oracle/simulate.ts">monteCarlo</a>({ ...params }) -> void</code>

### Predictions

Types:

- <code><a href="./src/resources/ai/oracle/predictions.ts">PredictionRetrieveInflationResponse</a></code>
- <code><a href="./src/resources/ai/oracle/predictions.ts">PredictionRetrieveMarketCrashProbabilityResponse</a></code>

Methods:

- <code title="get /ai/oracle/predictions/inflation">client.ai.oracle.predictions.<a href="./src/resources/ai/oracle/predictions.ts">retrieveInflation</a>({ ...params }) -> PredictionRetrieveInflationResponse</code>
- <code title="get /ai/oracle/predictions/market-crash-probability">client.ai.oracle.predictions.<a href="./src/resources/ai/oracle/predictions.ts">retrieveMarketCrashProbability</a>() -> PredictionRetrieveMarketCrashProbabilityResponse</code>

### Simulations

Types:

- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/oracle/simulations.ts">SimulationListResponse</a></code>

Methods:

- <code title="get /ai/oracle/simulations/{simulationId}">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">retrieve</a>(simulationID) -> SimulationRetrieveResponse</code>
- <code title="get /ai/oracle/simulations">client.ai.oracle.simulations.<a href="./src/resources/ai/oracle/simulations.ts">list</a>() -> SimulationListResponse</code>

## Incubator

Types:

- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorRetrievePitchesResponse</a></code>
- <code><a href="./src/resources/ai/incubator/incubator.ts">IncubatorValidateResponse</a></code>

Methods:

- <code title="get /ai/incubator/pitches">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">retrievePitches</a>() -> IncubatorRetrievePitchesResponse</code>
- <code title="post /ai/incubator/validate">client.ai.incubator.<a href="./src/resources/ai/incubator/incubator.ts">validate</a>({ ...params }) -> IncubatorValidateResponse</code>

### Pitch

Types:

- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchCreateResponse</a></code>
- <code><a href="./src/resources/ai/incubator/pitch.ts">PitchRetrieveDetailsResponse</a></code>

Methods:

- <code title="post /ai/incubator/pitch">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">create</a>({ ...params }) -> PitchCreateResponse</code>
- <code title="get /ai/incubator/pitch/{pitchId}/details">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">retrieveDetails</a>(pitchID) -> PitchRetrieveDetailsResponse</code>
- <code title="put /ai/incubator/pitch/{pitchId}/feedback">client.ai.incubator.pitch.<a href="./src/resources/ai/incubator/pitch.ts">updateFeedback</a>(pitchID, { ...params }) -> void</code>

### Analysis

Types:

- <code><a href="./src/resources/ai/incubator/analysis.ts">AnalysisCompetitorsResponse</a></code>
- <code><a href="./src/resources/ai/incubator/analysis.ts">AnalysisSwotResponse</a></code>

Methods:

- <code title="post /ai/incubator/analysis/competitors">client.ai.incubator.analysis.<a href="./src/resources/ai/incubator/analysis.ts">competitors</a>({ ...params }) -> AnalysisCompetitorsResponse</code>
- <code title="post /ai/incubator/analysis/swot">client.ai.incubator.analysis.<a href="./src/resources/ai/incubator/analysis.ts">swot</a>({ ...params }) -> AnalysisSwotResponse</code>

## Ads

Types:

- <code><a href="./src/resources/ai/ads/ads.ts">AdRetrieveResponse</a></code>
- <code><a href="./src/resources/ai/ads/ads.ts">AdListResponse</a></code>
- <code><a href="./src/resources/ai/ads/ads.ts">AdOptimizeResponse</a></code>

Methods:

- <code title="get /ai/ads/operations/{operationId}">client.ai.ads.<a href="./src/resources/ai/ads/ads.ts">retrieve</a>(operationID) -> AdRetrieveResponse</code>
- <code title="get /ai/ads">client.ai.ads.<a href="./src/resources/ai/ads/ads.ts">list</a>() -> AdListResponse</code>
- <code title="post /ai/ads/optimize">client.ai.ads.<a href="./src/resources/ai/ads/ads.ts">optimize</a>({ ...params }) -> AdOptimizeResponse</code>

### Generate

Types:

- <code><a href="./src/resources/ai/ads/generate.ts">GenerateCopyResponse</a></code>
- <code><a href="./src/resources/ai/ads/generate.ts">GenerateVideoResponse</a></code>

Methods:

- <code title="post /ai/ads/generate/copy">client.ai.ads.generate.<a href="./src/resources/ai/ads/generate.ts">copy</a>({ ...params }) -> GenerateCopyResponse</code>
- <code title="post /ai/ads/generate/video">client.ai.ads.generate.<a href="./src/resources/ai/ads/generate.ts">video</a>({ ...params }) -> GenerateVideoResponse</code>

## Advisor

### Chat

Types:

- <code><a href="./src/resources/ai/advisor/chat.ts">ChatCreateResponse</a></code>
- <code><a href="./src/resources/ai/advisor/chat.ts">ChatRetrieveHistoryResponse</a></code>

Methods:

- <code title="post /ai/advisor/chat">client.ai.advisor.chat.<a href="./src/resources/ai/advisor/chat.ts">create</a>({ ...params }) -> ChatCreateResponse</code>
- <code title="get /ai/advisor/chat/history">client.ai.advisor.chat.<a href="./src/resources/ai/advisor/chat.ts">retrieveHistory</a>() -> ChatRetrieveHistoryResponse</code>

### Tools

Types:

- <code><a href="./src/resources/ai/advisor/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /ai/advisor/tools">client.ai.advisor.tools.<a href="./src/resources/ai/advisor/tools.ts">list</a>() -> ToolListResponse</code>
- <code title="post /ai/advisor/tools/{toolId}/enable">client.ai.advisor.tools.<a href="./src/resources/ai/advisor/tools.ts">enable</a>(toolID) -> void</code>

## Agent

Types:

- <code><a href="./src/resources/ai/agent/agent.ts">AgentRetrieveCapabilitiesResponse</a></code>

Methods:

- <code title="get /ai/agent/capabilities">client.ai.agent.<a href="./src/resources/ai/agent/agent.ts">retrieveCapabilities</a>() -> AgentRetrieveCapabilitiesResponse</code>

### Prompts

Types:

- <code><a href="./src/resources/ai/agent/prompts.ts">PromptListResponse</a></code>

Methods:

- <code title="put /ai/agent/prompts">client.ai.agent.prompts.<a href="./src/resources/ai/agent/prompts.ts">create</a>({ ...params }) -> void</code>
- <code title="get /ai/agent/prompts">client.ai.agent.prompts.<a href="./src/resources/ai/agent/prompts.ts">list</a>() -> PromptListResponse</code>

## Models

Types:

- <code><a href="./src/resources/ai/models.ts">ModelFineTuneResponse</a></code>
- <code><a href="./src/resources/ai/models.ts">ModelRetrieveVersionsResponse</a></code>

Methods:

- <code title="post /ai/models/fine-tune">client.ai.models.<a href="./src/resources/ai/models.ts">fineTune</a>({ ...params }) -> ModelFineTuneResponse</code>
- <code title="get /ai/models/versions">client.ai.models.<a href="./src/resources/ai/models.ts">retrieveVersions</a>() -> ModelRetrieveVersionsResponse</code>

# Corporate

Types:

- <code><a href="./src/resources/corporate/corporate.ts">CorporateOnboardResponse</a></code>

Methods:

- <code title="post /corporate/onboard">client.corporate.<a href="./src/resources/corporate/corporate.ts">onboard</a>({ ...params }) -> CorporateOnboardResponse</code>

## Compliance

Types:

- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenMediaResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenPepResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/compliance.ts">ComplianceScreenSanctionsResponse</a></code>

Methods:

- <code title="post /corporate/compliance/media">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenMedia</a>({ ...params }) -> ComplianceScreenMediaResponse</code>
- <code title="post /corporate/compliance/pep">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenPep</a>({ ...params }) -> ComplianceScreenPepResponse</code>
- <code title="post /corporate/compliance/sanctions">client.corporate.compliance.<a href="./src/resources/corporate/compliance/compliance.ts">screenSanctions</a>({ ...params }) -> ComplianceScreenSanctionsResponse</code>

### Audits

Types:

- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRequestAuditResponse</a></code>
- <code><a href="./src/resources/corporate/compliance/audits.ts">AuditRetrieveReportResponse</a></code>

Methods:

- <code title="post /corporate/compliance/audits">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">requestAudit</a>({ ...params }) -> AuditRequestAuditResponse</code>
- <code title="get /corporate/compliance/audits/{auditId}/report">client.corporate.compliance.audits.<a href="./src/resources/corporate/compliance/audits.ts">retrieveReport</a>(auditID) -> AuditRetrieveReportResponse</code>

## Treasury

Types:

- <code><a href="./src/resources/corporate/treasury/treasury.ts">TreasuryGetLiquidityPositionsResponse</a></code>

Methods:

- <code title="post /corporate/treasury/bulk-payouts">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">executeBulkPayouts</a>({ ...params }) -> void</code>
- <code title="get /corporate/treasury/liquidity-positions">client.corporate.treasury.<a href="./src/resources/corporate/treasury/treasury.ts">getLiquidityPositions</a>() -> TreasuryGetLiquidityPositionsResponse</code>

### CashFlow

Types:

- <code><a href="./src/resources/corporate/treasury/cash-flow.ts">CashFlowForecastResponse</a></code>

Methods:

- <code title="get /corporate/treasury/cash-flow/forecast">client.corporate.treasury.cashFlow.<a href="./src/resources/corporate/treasury/cash-flow.ts">forecast</a>({ ...params }) -> CashFlowForecastResponse</code>

### Liquidity

Types:

- <code><a href="./src/resources/corporate/treasury/liquidity.ts">LiquidityOptimizeResponse</a></code>

Methods:

- <code title="post /corporate/treasury/liquidity/pooling">client.corporate.treasury.liquidity.<a href="./src/resources/corporate/treasury/liquidity.ts">configurePooling</a>({ ...params }) -> void</code>
- <code title="post /corporate/treasury/liquidity/optimize">client.corporate.treasury.liquidity.<a href="./src/resources/corporate/treasury/liquidity.ts">optimize</a>({ ...params }) -> LiquidityOptimizeResponse</code>

### Sweeping

Methods:

- <code title="post /corporate/treasury/sweeping/rules">client.corporate.treasury.sweeping.<a href="./src/resources/corporate/treasury/sweeping.ts">configureRules</a>({ ...params }) -> void</code>
- <code title="post /corporate/treasury/sweeping/execute">client.corporate.treasury.sweeping.<a href="./src/resources/corporate/treasury/sweeping.ts">executeSweep</a>({ ...params }) -> void</code>

## Cards

Types:

- <code><a href="./src/resources/corporate/cards.ts">CardGetTransactionsResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardIssueVirtualCardResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardListAllResponse</a></code>
- <code><a href="./src/resources/corporate/cards.ts">CardRequestPhysicalCardResponse</a></code>

Methods:

- <code title="get /corporate/cards/{cardId}/transactions">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">getTransactions</a>(cardID) -> CardGetTransactionsResponse</code>
- <code title="post /corporate/cards/virtual">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">issueVirtualCard</a>({ ...params }) -> CardIssueVirtualCardResponse</code>
- <code title="get /corporate/cards">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">listAll</a>({ ...params }) -> CardListAllResponse</code>
- <code title="post /corporate/cards/physical">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">requestPhysicalCard</a>({ ...params }) -> CardRequestPhysicalCardResponse</code>
- <code title="post /corporate/cards/{cardId}/freeze">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">toggleCardLock</a>(cardID, { ...params }) -> void</code>
- <code title="put /corporate/cards/{cardId}/controls">client.corporate.cards.<a href="./src/resources/corporate/cards.ts">updateControls</a>(cardID, { ...params }) -> void</code>

## Risk

Types:

- <code><a href="./src/resources/corporate/risk/risk.ts">RiskGetRiskExposureResponse</a></code>
- <code><a href="./src/resources/corporate/risk/risk.ts">RiskRunStressTestResponse</a></code>

Methods:

- <code title="get /corporate/risk/exposure">client.corporate.risk.<a href="./src/resources/corporate/risk/risk.ts">getRiskExposure</a>() -> RiskGetRiskExposureResponse</code>
- <code title="post /corporate/risk/stress-test">client.corporate.risk.<a href="./src/resources/corporate/risk/risk.ts">runStressTest</a>({ ...params }) -> RiskRunStressTestResponse</code>

### Fraud

Types:

- <code><a href="./src/resources/corporate/risk/fraud/fraud.ts">FraudAnalyzeTransactionResponse</a></code>

Methods:

- <code title="post /corporate/risk/fraud/analyze">client.corporate.risk.fraud.<a href="./src/resources/corporate/risk/fraud/fraud.ts">analyzeTransaction</a>({ ...params }) -> FraudAnalyzeTransactionResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/corporate/risk/fraud/rules.ts">RuleListActiveResponse</a></code>

Methods:

- <code title="post /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">createCustom</a>({ ...params }) -> void</code>
- <code title="get /corporate/risk/fraud/rules">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">listActive</a>() -> RuleListActiveResponse</code>
- <code title="put /corporate/risk/fraud/rules/{ruleId}">client.corporate.risk.fraud.rules.<a href="./src/resources/corporate/risk/fraud/rules.ts">updateRule</a>(ruleID, { ...params }) -> void</code>

## Governance

### Proposals

Types:

- <code><a href="./src/resources/corporate/governance/proposals.ts">ProposalListActiveResponse</a></code>

Methods:

- <code title="post /corporate/governance/proposals/{proposalId}/vote">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">castVote</a>(proposalID, { ...params }) -> void</code>
- <code title="post /corporate/governance/proposals">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">createNew</a>({ ...params }) -> void</code>
- <code title="get /corporate/governance/proposals">client.corporate.governance.proposals.<a href="./src/resources/corporate/governance/proposals.ts">listActive</a>() -> ProposalListActiveResponse</code>

## Anomalies

Types:

- <code><a href="./src/resources/corporate/anomalies.ts">AnomalyListDetectedResponse</a></code>

Methods:

- <code title="get /corporate/anomalies">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">listDetected</a>() -> AnomalyListDetectedResponse</code>
- <code title="put /corporate/anomalies/{anomalyId}/status">client.corporate.anomalies.<a href="./src/resources/corporate/anomalies.ts">updateStatus</a>(anomalyID, { ...params }) -> void</code>

# Web3

## Network

Types:

- <code><a href="./src/resources/web3/network.ts">NetworkGetStatusResponse</a></code>

Methods:

- <code title="get /web3/network/status">client.web3.network.<a href="./src/resources/web3/network.ts">getStatus</a>() -> NetworkGetStatusResponse</code>

## Wallets

Types:

- <code><a href="./src/resources/web3/wallets.ts">WalletCreateResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletListResponse</a></code>
- <code><a href="./src/resources/web3/wallets.ts">WalletGetBalancesResponse</a></code>

Methods:

- <code title="post /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">create</a>({ ...params }) -> WalletCreateResponse</code>
- <code title="get /web3/wallets">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">list</a>() -> WalletListResponse</code>
- <code title="get /web3/wallets/{walletId}/balances">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">getBalances</a>(walletID) -> WalletGetBalancesResponse</code>
- <code title="post /web3/wallets/connect">client.web3.wallets.<a href="./src/resources/web3/wallets.ts">link</a>({ ...params }) -> void</code>

## Transactions

Types:

- <code><a href="./src/resources/web3/transactions.ts">TransactionSendResponse</a></code>

Methods:

- <code title="post /web3/transactions/bridge">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">bridge</a>({ ...params }) -> void</code>
- <code title="post /web3/transactions/initiate">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">initiate</a>({ ...params }) -> void</code>
- <code title="post /web3/transactions/send">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">send</a>({ ...params }) -> TransactionSendResponse</code>
- <code title="post /web3/transactions/swap">client.web3.transactions.<a href="./src/resources/web3/transactions.ts">swap</a>({ ...params }) -> void</code>

## NFTs

Types:

- <code><a href="./src/resources/web3/nfts.ts">NFTListResponse</a></code>

Methods:

- <code title="get /web3/nfts">client.web3.nfts.<a href="./src/resources/web3/nfts.ts">list</a>() -> NFTListResponse</code>
- <code title="post /web3/nfts/mint">client.web3.nfts.<a href="./src/resources/web3/nfts.ts">mint</a>({ ...params }) -> void</code>

## Contracts

Methods:

- <code title="post /web3/contracts/deploy">client.web3.contracts.<a href="./src/resources/web3/contracts.ts">deploy</a>({ ...params }) -> void</code>

# Payments

Types:

- <code><a href="./src/resources/payments/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="get /payments/{paymentId}">client.payments.<a href="./src/resources/payments/payments.ts">retrieve</a>(paymentID) -> void</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments/payments.ts">list</a>() -> PaymentListResponse</code>

## Domestic

Methods:

- <code title="post /payments/domestic/ach">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">executeACH</a>({ ...params }) -> void</code>
- <code title="post /payments/domestic/rtp">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">executeRtp</a>({ ...params }) -> void</code>
- <code title="post /payments/domestic/wire">client.payments.domestic.<a href="./src/resources/payments/domestic.ts">executeWire</a>({ ...params }) -> void</code>

## International

Types:

- <code><a href="./src/resources/payments/international.ts">InternationalGetStatusResponse</a></code>

Methods:

- <code title="post /payments/international/sepa">client.payments.international.<a href="./src/resources/payments/international.ts">executeSepa</a>({ ...params }) -> void</code>
- <code title="post /payments/international/swift">client.payments.international.<a href="./src/resources/payments/international.ts">executeSwift</a>({ ...params }) -> void</code>
- <code title="get /payments/international/{paymentId}/status">client.payments.international.<a href="./src/resources/payments/international.ts">getStatus</a>(paymentID) -> InternationalGetStatusResponse</code>

## Fx

Types:

- <code><a href="./src/resources/payments/fx.ts">FxGetRatesResponse</a></code>

Methods:

- <code title="post /payments/fx/deals">client.payments.fx.<a href="./src/resources/payments/fx.ts">bookDeal</a>({ ...params }) -> void</code>
- <code title="post /payments/fx/convert">client.payments.fx.<a href="./src/resources/payments/fx.ts">executeConversion</a>({ ...params }) -> void</code>
- <code title="get /payments/fx/rates">client.payments.fx.<a href="./src/resources/payments/fx.ts">getRates</a>({ ...params }) -> FxGetRatesResponse</code>

# Sustainability

Types:

- <code><a href="./src/resources/sustainability/sustainability.ts">SustainabilityRetrieveCarbonFootprintResponse</a></code>

Methods:

- <code title="get /sustainability/carbon-footprint">client.sustainability.<a href="./src/resources/sustainability/sustainability.ts">retrieveCarbonFootprint</a>() -> SustainabilityRetrieveCarbonFootprintResponse</code>

## Offsets

Methods:

- <code title="post /sustainability/offsets/purchase">client.sustainability.offsets.<a href="./src/resources/sustainability/offsets.ts">purchaseCredits</a>({ ...params }) -> void</code>
- <code title="post /sustainability/offsets/retire">client.sustainability.offsets.<a href="./src/resources/sustainability/offsets.ts">retireCredits</a>({ ...params }) -> void</code>

## Impact

Types:

- <code><a href="./src/resources/sustainability/impact.ts">ImpactListGlobalGreenProjectsResponse</a></code>
- <code><a href="./src/resources/sustainability/impact.ts">ImpactRetrievePortfolioImpactResponse</a></code>

Methods:

- <code title="get /sustainability/impact/projects">client.sustainability.impact.<a href="./src/resources/sustainability/impact.ts">listGlobalGreenProjects</a>({ ...params }) -> ImpactListGlobalGreenProjectsResponse</code>
- <code title="get /sustainability/impact/portfolio">client.sustainability.impact.<a href="./src/resources/sustainability/impact.ts">retrievePortfolioImpact</a>() -> ImpactRetrievePortfolioImpactResponse</code>

# Marketplace

Types:

- <code><a href="./src/resources/marketplace/marketplace.ts">MarketplaceListProductsResponse</a></code>

Methods:

- <code title="get /marketplace/products">client.marketplace.<a href="./src/resources/marketplace/marketplace.ts">listProducts</a>() -> MarketplaceListProductsResponse</code>

## Offers

Types:

- <code><a href="./src/resources/marketplace/offers.ts">OfferListOffersResponse</a></code>

Methods:

- <code title="get /marketplace/offers">client.marketplace.offers.<a href="./src/resources/marketplace/offers.ts">listOffers</a>() -> OfferListOffersResponse</code>
- <code title="post /marketplace/offers/{offerId}/redeem">client.marketplace.offers.<a href="./src/resources/marketplace/offers.ts">redeemOffer</a>(offerID) -> void</code>

# Lending

## Applications

Types:

- <code><a href="./src/resources/lending/applications.ts">ApplicationSubmitResponse</a></code>
- <code><a href="./src/resources/lending/applications.ts">ApplicationTrackStatusResponse</a></code>

Methods:

- <code title="post /lending/applications">client.lending.applications.<a href="./src/resources/lending/applications.ts">submit</a>({ ...params }) -> ApplicationSubmitResponse</code>
- <code title="get /lending/applications/{appId}/status">client.lending.applications.<a href="./src/resources/lending/applications.ts">trackStatus</a>(appID) -> ApplicationTrackStatusResponse</code>

## Decisions

Types:

- <code><a href="./src/resources/lending/decisions.ts">DecisionGetRationaleResponse</a></code>

Methods:

- <code title="get /lending/decisions/{decisionId}/rationale">client.lending.decisions.<a href="./src/resources/lending/decisions.ts">getRationale</a>(decisionID) -> DecisionGetRationaleResponse</code>

# Investments

## Portfolios

Types:

- <code><a href="./src/resources/investments/portfolios.ts">PortfolioListResponse</a></code>
- <code><a href="./src/resources/investments/portfolios.ts">PortfolioRebalanceResponse</a></code>

Methods:

- <code title="post /investments/portfolios">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">create</a>({ ...params }) -> void</code>
- <code title="get /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">retrieve</a>(portfolioID) -> void</code>
- <code title="put /investments/portfolios/{portfolioId}">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">update</a>(portfolioID, { ...params }) -> void</code>
- <code title="get /investments/portfolios">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">list</a>({ ...params }) -> PortfolioListResponse</code>
- <code title="post /investments/portfolios/{portfolioId}/rebalance">client.investments.portfolios.<a href="./src/resources/investments/portfolios.ts">rebalance</a>(portfolioID, { ...params }) -> PortfolioRebalanceResponse</code>

## Assets

Types:

- <code><a href="./src/resources/investments/assets.ts">AssetSearchResponse</a></code>

Methods:

- <code title="get /investments/assets/search">client.investments.assets.<a href="./src/resources/investments/assets.ts">search</a>({ ...params }) -> AssetSearchResponse</code>

## Performance

Types:

- <code><a href="./src/resources/investments/performance.ts">PerformanceGetHistoricalResponse</a></code>

Methods:

- <code title="get /investments/performance/historical">client.investments.performance.<a href="./src/resources/investments/performance.ts">getHistorical</a>({ ...params }) -> PerformanceGetHistoricalResponse</code>

# System

Types:

- <code><a href="./src/resources/system/system.ts">SystemGetAuditLogsResponse</a></code>
- <code><a href="./src/resources/system/system.ts">SystemGetStatusResponse</a></code>

Methods:

- <code title="get /system/audit-logs">client.system.<a href="./src/resources/system/system.ts">getAuditLogs</a>({ ...params }) -> SystemGetAuditLogsResponse</code>
- <code title="get /system/status">client.system.<a href="./src/resources/system/system.ts">getStatus</a>() -> SystemGetStatusResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/system/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="get /system/webhooks">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /system/webhooks/{webhookId}">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">delete</a>(webhookID) -> void</code>
- <code title="post /system/webhooks">client.system.webhooks.<a href="./src/resources/system/webhooks.ts">register</a>({ ...params }) -> void</code>

## Sandbox

Types:

- <code><a href="./src/resources/system/sandbox.ts">SandboxSimulateErrorResponse</a></code>

Methods:

- <code title="post /system/sandbox/reset">client.system.sandbox.<a href="./src/resources/system/sandbox.ts">reset</a>() -> void</code>
- <code title="post /system/sandbox/simulate-error">client.system.sandbox.<a href="./src/resources/system/sandbox.ts">simulateError</a>({ ...params }) -> SandboxSimulateErrorResponse</code>

## Verification

Methods:

- <code title="post /system/verification/biometric-comparison">client.system.verification.<a href="./src/resources/system/verification.ts">compareBiometric</a>({ ...params }) -> void</code>
- <code title="post /system/verification/document">client.system.verification.<a href="./src/resources/system/verification.ts">verifyDocument</a>() -> void</code>

## Notifications

Types:

- <code><a href="./src/resources/system/notifications.ts">NotificationListTemplatesResponse</a></code>

Methods:

- <code title="get /system/notifications/templates">client.system.notifications.<a href="./src/resources/system/notifications.ts">listTemplates</a>() -> NotificationListTemplatesResponse</code>
- <code title="post /system/notifications/push">client.system.notifications.<a href="./src/resources/system/notifications.ts">sendPush</a>({ ...params }) -> void</code>
