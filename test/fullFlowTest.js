import axios from "axios";
import { encryptICICI, decryptICICI } from "../utils/iciciCrypto.js";
import { requestMeta, payload } from "./payload.js";

async function test() {
  console.log("\n1️⃣ Encrypting request like ICICI...");

  const encryptedReq = encryptICICI(requestMeta, payload);

  console.log("Encrypted request created.");

  console.log("\n2️⃣ Calling API...");
  const res = await axios.post(
    "http://localhost:3000/msgHold",
    encryptedReq
  );

  console.log("API responded.");

  console.log("\n3️⃣ Decrypting response like ICICI...");

  const decrypted = decryptICICI(
    res.data.encryptedKey,
    res.data.encryptedData
  );

  console.log("\n=== FINAL DECRYPTED RESPONSE ===");
  console.log(decrypted);
}

test();
