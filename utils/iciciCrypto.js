import crypto from 'crypto';
import fs from 'fs';
import NodeRSA from 'node-rsa';
import forge from 'node-forge';

const iciciPublicKey = fs.readFileSync("./certs/icici-public-key.pem", "utf8");
const clientPrivateKey = fs.readFileSync("./certs/client-private-key.pem", "utf8"); // enc
// const clientPrivateKey = fs.readFileSync("./certs/icici-private-key.pem", "utf8"); //dec


export function encryptICICI(request, payload, sessionKeyLength = 16) {
  try {
    // Step 1: Generate random session key (16 or 32 bytes)
    const sessionKey = crypto.randomBytes(sessionKeyLength);

    // Step 2: Encrypt session key using RSA/ECB/PKCS1
    const key = new NodeRSA(iciciPublicKey);
    key.setOptions({ encryptionScheme: 'pkcs1' });
    const encryptedSessionKey = key.encrypt(sessionKey, 'base64');

    // Step 3: Generate IV (16 bytes) for AES
    const iv = crypto.randomBytes(16);

    // Convert payload to string if it's an object
    const requestData = typeof payload === 'object' ? JSON.stringify(payload) : payload;

    // Perform AES/CBC/PKCS5Padding encryption
    const cipher = crypto.createCipheriv('aes-128-cbc', sessionKey, iv);
    let encryptedPayload = cipher.update(requestData, 'utf8');
    encryptedPayload = Buffer.concat([encryptedPayload, cipher.final()]);

    // Step 4: Option b - Prepend IV to encrypted data
    const combined = Buffer.concat([iv, encryptedPayload]);
    const encryptedData = combined.toString('base64');

    // Step 5: Return complete request format
    return {
      requestId: request.requestId, // Generate unique request ID
      service: request.service, // Update as needed
      encryptedKey: encryptedSessionKey,
      oaepHashingAlgorithm: "NONE",
      iv: "",
      encryptedData: encryptedData,
      clientInfo: request.clientInfo,
      optionalParam: request.optionalParam,
    };

  } catch (error) {
    throw new Error(`Encryption failed: ${error.message}`);
  }
}

export function decryptICICI(encryptedKey, encryptedData, passphrase = null) {
  try {
    // Step 1 & 2: Decrypt the session key using RSA/ECB/PKCS1
    let privateKey;
    if (passphrase) {
      privateKey = forge.pki.decryptRsaPrivateKey(clientPrivateKey, passphrase);
    } else {
      privateKey = forge.pki.privateKeyFromPem(clientPrivateKey);
    }

    // Base64 decode the encrypted key and decrypt with PKCS1 v1.5
    const encryptedKeyBinary = forge.util.decode64(encryptedKey);
    const sessionKeyBinary = privateKey.decrypt(encryptedKeyBinary, 'RSAES-PKCS1-V1_5');
    const sessionKey = Buffer.from(sessionKeyBinary, 'binary');

    // Step 3: Base64 decode the encrypted data
    const encryptedDataBuffer = Buffer.from(encryptedData, 'base64');

    // Step 4: Extract first 16 bytes as IV
    const iv = encryptedDataBuffer.slice(0, 16);

    // Get the actual ciphertext (everything after IV)
    const ciphertext = encryptedDataBuffer.slice(16);

    // Step 5: Decrypt using AES/CBC/PKCS5
    const decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv);
    let decrypted = decipher.update(ciphertext);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    // Step 6: Convert to string and try to parse as JSON
    const decryptedString = decrypted.toString('utf8');

    try {
      return JSON.parse(decryptedString);
    } catch (e) {
      // If not JSON, return as string
      return decryptedString;
    }

  } catch (error) {
    throw error;
  }
}
 