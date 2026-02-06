export const requestMeta = {
  requestId: "REQ123456",
  service: "MSGHOLD",
  clientInfo: "TEST_CLIENT",
  optionalParam: ""
};

export const payload = {
  ClientCode: "ABC",
  VirtualAccountNumber: "ABC1001",
  Mode: "NEFT",
  UTR: "UTR" + Date.now(),
  SenderRemark: "Test Payment",
  ClientAccountNo: "1234567890",
  Amount: "1000",
  PayerName: "Test User",
  PayerAccNumber: "9876543210",
  PayerBankIFSC: "ICIC0001234",
  PayerPaymentDate: "20240101",
  BankInternalTransactionNumber: "TXN" + Date.now()
};
