const elliptic = require('elliptic');
const ec = new elliptic.ec('secp256k1');

// Generate ECC key pair
const keyPair = ec.genKeyPair();

const privateKey = keyPair.getPrivate();
const publicKey = keyPair.getPublic();

const message = Buffer.from("Hello, world!");

// Sign the message
const signature = ec.sign(message, privateKey);
console.log("Signature:", signature.toDER('hex'));

// Verify the signature
const isValid = ec.verify(message, signature, publicKey);
if (isValid) {
  console.log(" valid signature");
} else {
  console.log("Signature is not valid");
}


// Encrypt and Decrypt using a different encryption library or method if needed