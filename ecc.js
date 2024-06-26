const crypto = require('crypto');
const EC = require('elliptic');

const ec = new EC.ec('secp256k1'); // Use the desired elliptic curve

const keyPair = ec.genKeyPair();
const publicKeyHex = keyPair.getPublic('hex');
const privateKeyHex = keyPair.getPrivate('hex');

console.log('Public Key:', publicKeyHex);
console.log('Private Key:', privateKeyHex);

const plaintext = 'Hello, ECC Encryption!';

const aesKey = crypto.randomBytes(32); // 256-bit key for AES encryption
const iv = crypto.randomBytes(16); // Initialization vector (IV)

const cipher = crypto.createCipheriv('aes-256-cbc', aesKey, iv);
let encrypted = cipher.update(plaintext, 'utf-8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted Data:', encrypted);


const decipher = crypto.createDecipheriv('aes-256-cbc', aesKey, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');

console.log('Decrypted Data:', decrypted);
