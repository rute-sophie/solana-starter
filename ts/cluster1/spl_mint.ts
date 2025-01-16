import { Keypair, PublicKey, Connection, Commitment } from "@solana/web3.js";
import { getOrCreateAssociatedTokenAccount, mintTo, getMint } from '@solana/spl-token';
import wallet from "./wallet/turbin3-wallet.json"
import { get } from "prompt";

// Import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

const mint_amount = 444;

// Mint address
const mint = new PublicKey("6AN6iUV7Jod61tUUXuHYBxiXqg9oWUy2NbbfpFiGnmVu");

(async () => {
    try {
        // Create an ATA
        const ata = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);
        console.log(`Your ata is: ${ata.address.toBase58()}`);

        const mintAccount =  await getMint(connection, mint);

        let amount = Math.pow(10, mintAccount.decimals)*mint_amount;

        // Mint to ATA
        const mintTx = await mintTo(connection, keypair, mint, ata.address, keypair.publicKey, amount);
        console.log(`Your mint txid: ${mintTx}`);

    } catch(error) {
        console.log(`Oops, something went wrong: ${error}`)
    }
})()
