import axios from "axios";
import { encryptICICI } from "../utils/iciciCrypto.js";
import { requestMeta, payload } from "./payload.js";

async function run() {
  const encryptedReq = encryptICICI(requestMeta, payload);

  const res = await axios.post(
    "http://localhost:3000/msgHold",
    encryptedReq,
    { headers: { "Content-Type": "application/json" } }
  );

  console.log("\n=== API ENCRYPTED RESPONSE ===\n");
  console.log(res.data);
}

run();
