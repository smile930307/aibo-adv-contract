Pochi Inu NFT
(probably duplicate of dogDao Contract – same logic/concepts) 
•NFT's with growth stages (puppies/dogs)
    Upon mint, the initial image presented in the NFT will be of a puppy.
    The concept is: By Staking the $Pochi Token, users will ‘feed’ their Pochi NFTs.
    ◦A token amount/time locked algorithm will be used to determine how quickly the dog NFT grows.
    As each stage is reached, the image is updated and the attributes may be modified (upgraded).
    Eventually it will reach it’s full-adult Dog stage.
    Failure to feed (stake $Pochi) will result in the Dog reverting back down in stages/attributes.
    Only full-adult Pochi NFTs will be eligible for future mints (new NFT puppies).  


    you can call giveFeed() function when user stake Pochi Token.
    tokenUri changes by the age.
    for example if the age of the dog is 2 the token uri is baseTokenUri + "/" + tokenId + "/" + 2 (age of the dog)


•10k total
•use erc721a – for lower multi-mint gas fees
•Contract allows for 3 mint phases – Admin, Presale, Public
    ◦write function to set mint MAX limit
    ◦write function to set enable datetime
    ◦write function to update whitelisted wallet list
    ◦write function to set Presale mint price (Y)
    ◦write function to set Public mint price (Z)
    ◦write function for updating/upgrading Attribute set

•Admin mint – first X amount (NFT #’s 1 through X) – minted (no fee, just gas) 
    ◦minted NFTs go to Payment Address wallet
    ◦can be done anytime, before whitelist start date

•Presale mint – enables whitelisted wallets to mint one to MAX limit at lower price (Y)
    ◦enabled at specific datetime

•Public mint – enables public mint availability to any wallet without MAX already at price (Z)
    ◦enabled 24 hours after enabled datetime

•Naming Feature (name your NFT)
    Users will be able to go to our Dapp and (for a fee/tokens/something) be able to enter a Name for their NFT. 
    The Name shows up in OpenSea/etc…
	(For Naming Feature - see Shiboshi’s, 0x11450058d796b02eb53e65374be59cff65d3fe7f   	https://opensea.io/collection/theshiboshis)

    for this you have to use standard metadata.
    like this.
    {
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/3", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
        "name": "Dave Starbelly",
        "attributes": [ ... ], 
    }
    To change the name, just change the name item attribute of metadata.

•Attribute set containing string/integer/percentage types
    ◦We have graphics/attribute folks building the image set and attribute json set

•Open Policy - Write Functions for Creator to update individual NFT attributes/traits post mint
    ◦this will be an update/remint process

•Using the Bored Cliff contract (below) as a starting point, we’d like to add/ensure the above features are built into the Contract(s)
    
    for this you have to use standard metadata.
    like this.
    {
        "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
        "external_url": "https://openseacreatures.io/3", 
        "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
        "name": "Dave Starbelly",
        "attributes": [ ... ], 
    }
    To change the name, just change the name item attribute of metadata.

•We need:  Contract(s), mint engine plugin(s) for website
    Due to the interactions between the NFTs and Staking, let me know how the Contracts need to be setup/built/etc...