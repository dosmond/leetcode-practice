/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const trimmed = s.trim();

  const regex = /^[-+]?\d+/;
  const match = trimmed.match(regex);

  if (!match) {
    return 0;
  }

  let num = parseInt(match[0]);

  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (num < INT_MIN) {
    return INT_MIN;
  } else if (num > INT_MAX) {
    return INT_MAX;
  }

  return num;
};

// Test Base64 decoding
const encodedString =
  "ERwWEQZDDB1DBwICAQtOFgYCFx5DAwcRCEMABBwVDAAERQIKAB1OCwsURR4CEQZDChkNRR4CEQZOEgsWFhcMEBoLAAMKSAIMFhpDDABDBgERFxsTEU4QHB0XAANOFw8EAE4KC04XDQtDAw8AAE4MA04LCgIPChkGAU4TFwEODB0GRQYKAQsQAAsIAwcNAQoGFhoRChdOAxwGAE4FChwORQoGBgsKEUMBCQcNAR1DEgcXDU4KCB4GCwsXFw8BCQtDEwsKCR1OBAIPRQcQRR4MDB0MCwsHSBoLChsEDRoODAAHSAoMRQAMEU4HFwcNDk4FFwEORRoLAE4UAAIPRRkGRR0GAEMUDBoLRQsaAB1DBxwKAgYXSBwGEwsPBBoKCgBDDABDEQYGRQ8NEQcRABhOBg8PCQEWFgsHBwIGAAoKCwkQBAAHFkMJEB0XDA0GRR0MEAkLEU4FChxDEQYGRRwMERoKCwlDBgERFR0GRQEFRRoMCAERFwEUFk4PAAgXRRoMRRcGFhoGFwoCHE4KC04EEBoXABwQRQkPAA8ORQoKFg0CFwoGAU4HFwsCCB1OEQYGRR4MABoRHE4MA04HDB0KCQIWFgcMCwsHRQYMFQtOBBwXRQ8QRRkGBB4MC0MUBBxDBB1DBxwGBBoLSAIKAwtDDB1DAxwCAgcPAEMBFwsCDk4KBgEGRQIKFhoGC04ACQEQAEMACQEQABxOEB0XDQsOEgsaChsKSBoLABwGFk4QEQ8XDA1DDABDEQYGDBxDFRwMFQ8EBAAHBEMCCxoKFwsVRQkRChkQSA8EBAcNFhoFChxODQEPAU4XDQtDCQcNAEMxRUVDJE5IRSlDTk4mSAcQRRoLAE4IABcIABcQAB8IABdOAA8RCwsHEAAPAA8QDQsH";
const decodedString = Buffer.from(encodedString, "base64").toString("utf-8");
console.log("Decoded string:", decodedString);

("truth is blade-sharp firm-carving lies-new path own path-weusyouthemi-lost in corrupt system-rage in the face of hollowed promise hidden in plain site-hideseekfinddestroy-free form deceit-blinds with impenetrable veils-all is poisoned-thoughtmind-do not drink from the well we see-with eyes bright-revelation in the antirev-callousedbleedingsands-justice sought for the rotting corpse of tomorrows left to yesterday in gutters gleam discarded dreams-the poetry of disillusioned hope-art as weapon-war as breath-life is fragile-break icoe listen close-closer-usthemweyoui-theres static in their propaganda-antirev grows-againstfor-hold the line-R + A + G + E-is the keykeyseqkey-earnedunleashed");
