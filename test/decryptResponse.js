import { decryptICICI } from "../utils/iciciCrypto.js";

// paste API response here
const apiResponse = {
    
  "requestId": "REQ123456",
  "service": "MSGHOLD",
  "encryptedKey": "B7FUTkygHr552jxikDReD6LqhpfXga4sG9WP6j/u8ZwUgdhX+M+4B5ZCKtLem+M8rJuazTO3ULnPdjBbLrb78D62d6db4XJmdKUJ+8KhHbJLiAl9SMzKvqQqYPbWJOIMT0jYa9XksB3yZ12y3TenE1JYdMHSS4N66UXEplMrHmqYjyoX+1Ejly1CqeN0BFXqnf1hiGtmFdQn2ZnstZeOci2Dqu+wURLvv3MXczto4zn1w3O74Mk1PZ1xxNVdGIyWIK4v30nWDwNhQ9dRGqvsA32c7OcNdObSBRwRIGEH1rob9mjt9//kD6224/i/FKTlsa74/YjCqaRSTyVbssSvCw==",
  "oaepHashingAlgorithm": "NONE",
  "iv": "",
  "encryptedData": "uAsp4pFWTF72pinoMrHxoD05QQV0A+f83B7WsJ9PpV0Axvhr/A3qjoRmgoCf/fEZYxtrGlTduMNcTefRpyCfsxpJGH8sCoxr4o+Sk74mrySJscdlCQTgOE6TrQd8rgEN1gYuSKd86IGJ6mJc0dekkLRNSCo6qvmTn0S79Tbw7rg0o4xTDdX0DF0h2pvhpvaX0s/IORdqGcjMwtK8sZgTzFMX4pWAweLYX485mWLSh+sjRXKIs5jFtDvnbjoRgzMFRraWG78T3DHwLnicc+B7xL+tNSLKqbfo4sVntjYWa7U4+KxbHr1AXMv4ZBmZD/MMoGIvDjhXcgHLXAFIbJ3HAwEEjLc9DG7BrkJY8tGDFDi9HFTEqPU7TQI+er0cSRSmMd8vUALZq3640Wh3PiR6fDcrxxjN9jPrwS/A7gE1tbMoxVYzdKph5y6oKYThdP575NiYk0In7C0z+tbHhFMNRQ==",
  "clientInfo": "TEST_CLIENT",
  "optionalParam": ""

};

const decrypted = decryptICICI(
  apiResponse.encryptedKey,
  apiResponse.encryptedData
);

console.log("\n=== DECRYPTED RESPONSE ===\n");
console.log(decrypted);
