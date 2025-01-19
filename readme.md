# Coursework for Turbin3

In this repo I will add the code of the class exercices that I've done.

## Classes

- Class 1 : I created token accounts and transfered a token from a wallet to another (added code in files [__spl_init__](ts/cluster1/spl_init.ts), [__spl_mint__](ts/cluster1/spl_mint.ts), [__spl_transfer__](ts/cluster1/spl_transfer.ts))
  - spl_init: [transaction](https://explorer.solana.com/tx/2f4wYubSEk4SDKoLwBgMpT5V5GXFc6fsfv1gJJGK9jenBLWt13UfhJzdwVPNcsmJ8WUwVgS3HHc7rkV2U4oMqNde?cluster=devnet)
  - spl_mint: [create ata](https://explorer.solana.com/tx/3ZNPYmQUUVhrQnwuxr97i4LaSHHtBgjK7drLCYUUqYaxzGzxQSrZ5K6d1dFZcFhQcc526LoXzrtwNFeEKJ74yeyp?cluster=devnet), [mint tokens](https://explorer.solana.com/tx/5oFJFBy74481o795uLvGJ4hMWA7mEM4GrhYyuT2KVYWWrp4JQagF62qjG7xPxKySjwgkG9k3bkn23FFSAWzWX3XR?cluster=devnet)
  - spl_transfer: [create destination ata](https://explorer.solana.com/tx/Z365TaSnxSCRvowma2LZcTV3jB7hQMvvdfGrLcARSdLLZYALrqLZcFCkPVuZd4nquj1tsCxPgHue8NYRFxfDqEw?cluster=devnet), [transfer](https://explorer.solana.com/tx/5sLRakGYSsZ1FVCfdgKRGE25UR8ypEAdTvFBYsYgNNnzxqRGnTVJxnUoCH7nC8zAKm9TatkoP2wS2mY7XEQYEMjb?cluster=devnet)

- Class 2: Added metadata to the mint previously created in class 1
  - spl_metadata: [add metadata transaction](https://explorer.solana.com/tx/RwN4r8hVEVYTxkXC2drycHcxpPpaGwHJwwn5RVoRmXxqVzKEo1HDMctYBQZgpWx4jsxux2HBKMkju33QNG3CLwi?cluster=devnet), [send to cadet](https://explorer.solana.com/tx/2aYEUvNKhHwPkSxyhMrS84aaqq6fRyDXop6X6EzafTnyaW9syVUK9d2XL5Gced21jdC4jQ36uVSbL55rGMh6fX5a?cluster=devnet)

- Class 3: Created rug NFT
  - nft_image: [image](https://devnet.irys.xyz/2shZx5QZgv11bR4G4B59ZmjjS6wTXn7paPMhebQBVMFn)
  - nft_metadata: [metadata](https://devnet.irys.xyz/7etD6DpaM1FJ5uVtvoWEBj23A87xHBRLwzD7gKMi9WjT)
  - nft_mint: [transaction](https://explorer.solana.com/tx/3weWZoCU6yzBpagT4LksqVWYxM3gWKUnacMHskQJm7nDUjihbQgsyz9w4RKqhcrJiKEkH8UNrTBMitAvwHnQq5G6?cluster=devnet)
