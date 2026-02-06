import { encryptICICI } from "../utils/iciciCrypto.js";
import { requestMeta, payload } from "./payload.js";

const encrypted = encryptICICI(requestMeta, payload);

console.log("\n=== ENCRYPTED REQUEST ===\n");
console.log(JSON.stringify(encrypted, null, 2));
