import wallet from "./wallet/turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { createGenericFile, createSignerFromKeypair, signerIdentity } from "@metaplex-foundation/umi"
import { irysUploader } from "@metaplex-foundation/umi-uploader-irys"

// Create a devnet connection
const umi = createUmi('https://api.devnet.solana.com');

let keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);

umi.use(irysUploader({ address: "https://devnet.irys.xyz" }));
umi.use(signerIdentity(signer));

(async () => {
    try {
        //Follow this JSON structure
        //https://docs.metaplex.com/programs/token-metadata/changelog/v1.0#json-structure

        const image = "https://devnet.irys.xyz/2shZx5QZgv11bR4G4B59ZmjjS6wTXn7paPMhebQBVMFn";
        const metadata = {
            name: "Rutesophierug",
            symbol: "rsr",
            description: "rute sophies rug of turbin3 class 3",
            image: image,
            attributes: [
                {trait_type: 'type', value: 'portuguese'},
                {trait_type: 'color', value: 'yellow'},
            ],
            properties: {
                files: [
                    {
                        type: "image/png",
                        uri: image
                    },
                ]
            },
            creators: [keypair.publicKey]
        };
        const myUri = await umi.uploader.uploadJson(metadata)
        console.log("Your metadata URI: ", myUri);
    }
    catch(error) {
        console.log("Oops.. Something went wrong", error);
    }
})();
