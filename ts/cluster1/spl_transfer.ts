import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "./wallet/turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("6AN6iUV7Jod61tUUXuHYBxiXqg9oWUy2NbbfpFiGnmVu")

// Recipient address
const to = new PublicKey("Drwvm1toxn7DctpZJmpticqMA59q7HBVy4vY5areGnFM");


(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, keypair.publicKey);

        // Get the token account of the toWallet address, and if it does not exist, create it
        const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, keypair, mint, to)

        // Transfer the new token to the "toTokenAccount" we just created

        let tx = await transfer(connection, keypair, fromTokenAccount.address, toTokenAccount.address, keypair, 2000000);
        console.log("transaction: ", tx);
    
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();