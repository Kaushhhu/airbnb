const sampleListings = [
    {
      "title": "Serenity Beachfront Villa",
      "description": "A luxurious beachfront villa with breathtaking views of the ocean, offering privacy, comfort, and easy access to pristine beaches. Ideal for a relaxing getaway.",
      "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200",
      "price": 450,
      "location": "Bora Bora, Tahiti",
      "country": "French Polynesia"
    },
    {
      "title": "Mountain View Estate",
      "description": "Nestled in the heart of the Swiss Alps, this villa offers stunning panoramic mountain views, an infinity pool, and spacious living areas for the ultimate luxury retreat.",
      "image": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "price": 700,
      "location": "Zermatt, Valais",
      "country": "Switzerland"
    },
    {
      "title": "Villa Toscana",
      "description": "An elegant villa set in the rolling hills of Tuscany, Italy, featuring a private garden, vineyard, and rustic charm combined with modern amenities.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1682377521697-bc598b52b08a%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=XM9DvstjFkHDUM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECE0QAA..i&w=3000&h=1903&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECE0QAA",
      "price": 550,
      "location": "Florence, Tuscany",
      "country": "Italy"
    },
    {
      "title": "Luxury Desert Villa",
      "description": "Located in the heart of the Dubai desert, this villa boasts contemporary architecture, a private pool, and unparalleled views of the sand dunes.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1580587771525-78b9dba3b914%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=G92QaVps96UnfM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECGYQAA..i&w=3000&h=2250&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECGYQAA",
      "price": 650,
      "location": "Dubai, Emirate of Dubai",
      "country": "United Arab Emirates"
    },
    {
      "title": "Oceanfront Retreat",
      "description": "This stunning oceanfront villa in Bali offers a serene escape with infinity views of the Indian Ocean, a yoga pavilion, and lavish bedrooms perfect for relaxation.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1661915661139-5b6a4e4a6fcc%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=4rMdh8Yy11TvUM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECH8QAA..i&w=3000&h=1800&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECH8QAA",
      "price": 520,
      "location": "Uluwatu, Bali",
      "country": "Indonesia"
    },
    {
      "title": "Mansion in the Sky",
      "description": "A sprawling penthouse villa with panoramic city views, infinity pool, and a sleek, modern design located at the top of a skyscraper.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1613977257363-707ba9348227%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlsbGFzfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvillas&docid=Zn-WveSxawd-dM&tbnid=jk1XDovx_cyufM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBwQAA..i&w=3000&h=2001&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBwQAA",
      "price": 1000,
      "location": "New York City, New York",
      "country": "USA"
    },
    {
      "title": "Sunset Villa",
      "description": "A tranquil hideaway offering stunning sunset views, private infinity pool, and luxurious interiors perfect for a romantic getaway.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1613490493576-7fde63acd811%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFzfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvillas&docid=Zn-WveSxawd-dM&tbnid=C2DCcrOKX0gk0M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFUQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFUQAA",
      "price": 750,
      "location": "Santorini, Aegean Islands",
      "country": "Greece"
    },
    {
      "title": "Alpine Luxury Chalet",
      "description": "A cozy, luxurious chalet in the heart of the French Alps, perfect for skiing enthusiasts. Includes a fireplace, sauna, and private hot tub.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1564013799919-ab600027ffc6%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=Y9LRt7rPeg1zpM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHcQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHcQAA",
      "price": 650,
      "location": "Chamonix, Haute-Savoie",
      "country": "France"
    },
    {
      "title": "Tropical Paradise Villa",
      "description": "Nestled in a lush tropical jungle, this villa offers stunning views of the ocean, a private pool, and plenty of space for relaxation and exploration.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1622015663319-e97e697503ee%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhbmlzaCUyMHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fspanish-villa&docid=0z1I9fMdIiFL9M&tbnid=NvlZpjxi2tuI5M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oFCIQBEAA..i&w=3000&h=1617&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oFCIQBEAA",
      "price": 600,
      "location": "Koh Samui, Surat Thani",
      "country": "Thailand"
    },
    {
      "title": "Coastal Retreat Villa",
      "description": "A sophisticated coastal villa offering unparalleled views of the Mediterranean, with a private beach and stylish outdoor living spaces.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1582268611958-ebfd161ef9cf%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=MZTRrg0lqIJEnM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBYQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBYQAA",
      "price": 700,
      "location": "Amalfi Coast, Campania",
      "country": "Italy"
    },
    {
      "title": "Modern Villa in the City",
      "description": "This ultra-modern villa is located in the heart of Los Angeles, offering sleek design, private garden, and proximity to city attractions.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fopengraph%2F1x1.png%3Fmark%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fopengraph%252Flogo.png%26mark-w%3D64%26mark-align%3Dtop%252Cleft%26mark-pad%3D50%26h%3D630%26w%3D1200%26blend%3Dhttps%253A%252F%252Fimages.unsplash.com%252Fphoto-1602343168117-bb8ffe3e2e9f%253Fcrop%253Dfaces%25252Cedges%2526h%253D630%2526w%253D1200%2526blend%253D000000%2526blend-mode%253Dnormal%2526blend-alpha%253D10%2526mark-w%253D750%2526mark-align%253Dmiddle%25252Ccenter%2526mark%253Dhttps%25253A%25252F%25252Fimages.unsplash.com%25252Fopengraph%25252Fsearch-input.png%25253Fw%25253D750%252526h%25253D84%252526txt%25253Dvilla%252526txt-pad%25253D80%252526txt-align%25253Dmiddle%2525252Cleft%252526txt-color%25253D%25252523000000%252526txt-size%25253D40%252526txt-width%25253D660%252526txt-clip%25253Dellipsis%252526auto%25253Dformat%252526fit%25253Dcrop%252526q%25253D60%2526auto%253Dformat%2526fit%253Dcrop%2526q%253D60%2526ixid%253DM3wxMjA3fDB8MXxzZWFyY2h8Nnx8dmlsbGF8ZW58MHx8fHwxNzQxMjc2OTc4fDA%2526ixlib%253Drb-4.0.3%26blend-w%3D1%26auto%3Dformat%26fit%3Dcrop%26q%3D60&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=SH5mQgsc7VPJcM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECDYQAA..i&w=1200&h=630&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECDYQAA",
      "price": 800,
      "location": "Los Angeles, California",
      "country": "USA"
    },
    {
      "title": "Island Hideaway Villa",
      "description": "Escape to your own private island in the Caribbean, where luxury meets nature. This villa offers exclusive beachfront access and first-class amenities.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1661954372617-15780178eb2e%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-villa&docid=Mo1MYZ5cQ76iDM&tbnid=eSScTt8tYPBbtM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECEgQAA..i&w=3000&h=1500&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECEgQAA",
      "price": 1200,
      "location": "Turks and Caicos Islands",
      "country": "Caribbean"
    },
    {
      "title": "Secluded Mountain Villa",
      "description": "Located in the secluded mountains of New Zealand, this villa offers stunning landscapes, a hot tub, and the ultimate privacy for nature lovers.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1543489822-c49534f3271f%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjB2aWxsYXxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach-villa&docid=JNlQ4iU3JNV02M&tbnid=YKgYxZKmwBkr0M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFsQAA..i&w=3000&h=1688&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFsQAA",
      "price": 600,
      "location": "Queenstown, Otago",
      "country": "New Zealand"
    },
    {
      "title": "The Vineyard Estate",
      "description": "Set amidst sprawling vineyards, this estate offers a unique blend of luxury and rustic charm, perfect for wine lovers seeking relaxation and beauty.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1564501049412-61c2a3083791%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=-FAW7AyE7QUOPM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHsQAA..i&w=3000&h=1688&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHsQAA",
      "price": 550,
      "location": "Napa Valley, California",
      "country": "USA"
    },
    {
      "title": "Lagoon View Villa",
      "description": "Overlooking a pristine lagoon, this villa combines modern luxury with natural beauty, offering a tranquil retreat with water sports and adventure nearby.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600585154340-be6161a56a0c%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlsbGF8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=mDuj5nZvDfpBSM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oFCIABEAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oFCIABEAA",
      "price": 680,
      "location": "Maldives",
      "country": "Maldives"
    },
    {
      "title": "Exclusive Ocean Villa",
      "description": "A lavish villa situated directly on the beach with uninterrupted ocean views, private infinity pool, and a full-service staff.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1568605114967-8130f3a36994%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla&docid=XEPK3FQUeR-6lM&tbnid=t83GSqwC0AgMjM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBkQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECBkQAA",
      "price": 1000,
      "location": "Phuket, Thailand",
      "country": "Thailand"
    },
    {
      "title": "The Cliffside Residence",
      "description": "A stunning villa perched on the edge of a cliff, offering breathtaking panoramic views of the coastline, complete with an outdoor fireplace and hot tub.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1687960117069-567a456fe5f3%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGElMjBnYXJkZW58ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-garden&docid=STMlQpnM_XkJxM&tbnid=ntC5Orhs_f1jeM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECCYQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECCYQAA",
      "price": 950,
      "location": "Big Sur, California",
      "country": "USA"
    },
    {
      "title": "Luxury Villa in Bali",
      "description": "This stunning Bali villa combines traditional architecture with modern luxury, featuring a large pool, garden, and a peaceful atmosphere.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1571635685743-db0db8e31d9a%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpbGxhc3xlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvillas&docid=Zn-WveSxawd-dM&tbnid=tXTBj1AyD_8qNM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECD4QAA..i&w=3000&h=1993&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECD4QAA",
      "price": 520,
      "location": "Seminyak, Bali",
      "country": "Indonesia"
    },
    {
      "title": "Mediterranean Dream Villa",
      "description": "A luxurious villa with Mediterranean charm, offering panoramic views of the coastline, an elegant design, and an infinity pool for ultimate relaxation.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1600596542815-ffad4c1539a9%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhouse&docid=1JW_FH9kGW8MiM&tbnid=rW3dj1YXjHyriM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFcQAA..i&w=3000&h=1990&hcb=2&itg=1&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFcQAA",
      "price": 750,
      "location": "Costa Brava, Catalonia",
      "country": "Spain"
    },
    {
      "title": "Majestic Lakeview Villa",
      "description": "This villa offers stunning views over a serene lake, with large windows, an open-plan living area, and an outdoor patio perfect for sunset dinners.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1596178067639-5c6e68aea6dc%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8N3x8cG9vbCUyMHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpool-villa&docid=t9CqQSIHnwuhnM&tbnid=-9cZghkybs2UqM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECEsQAA..i&w=3000&h=2002&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECEsQAA",
      "price": 600,
      "location": "Lake Como, Lombardy",
      "country": "Italy"
    },
    {
      "title": "Royal Palm Villa",
      "description": "Located in a private estate, this villa offers regal luxury with a private pool, spa, and landscaped gardens, perfect for relaxation and rejuvenation.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1542314831-068cd1dbfeeb%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fGx1eHVyeSUyMHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fluxury-villa&docid=Mo1MYZ5cQ76iDM&tbnid=Rcy9uo9JH2hpVM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFoQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFoQAA",
      "price": 850,
      "location": "Boca Raton, Florida",
      "country": "USA"
    },
    {
      "title": "Lagoon Breeze Villa",
      "description": "An exotic, luxurious villa situated beside a tranquil lagoon, offering easy access to water activities, serene views, and a private beach.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1582610116397-edb318620f90%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhc3xlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvillas&docid=Zn-WveSxawd-dM&tbnid=TUntRxltptkeuM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECF0QAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECF0QAA",
      "price": 650,
      "location": "Mauritius",
      "country": "Mauritius"
    },
    {
      "title": "Seaside Serenity Villa",
      "description": "This peaceful villa is set on a cliffside, offering stunning views of the ocean and a relaxing atmosphere with outdoor dining areas and a private infinity pool.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1613152184920-bc1c4ab7fd1d%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vbCUyMHZpbGxhfGVufDB8fDB8fHww&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpool-villa&docid=t9CqQSIHnwuhnM&tbnid=RAJ-tPZhqqNndM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECGEQAA..i&w=3000&h=1688&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECGEQAA",
      "price": 780,
      "location": "Cabo San Lucas, Baja California",
      "country": "Mexico"
    },
    {
      "title": "Panoramic Hilltop Villa",
      "description": "Perched atop a hill, this villa offers sweeping panoramic views of the countryside, perfect for those seeking privacy, luxury, and tranquility.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1602774895672-b553538bceb9%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvb2wlMjB2aWxsYXxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fpool-villa&docid=t9CqQSIHnwuhnM&tbnid=hh8A2HKF97YC9M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHUQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECHUQAA",
      "price": 900,
      "location": "Vail, Colorado",
      "country": "USA"
    },
    {
      "title": "Ocean Breeze Villa",
      "description": "Set in a tropical paradise, this villa offers the ultimate beach escape, with direct access to the beach, an infinity pool, and spacious outdoor living.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1675745329659-29044cb6adbb%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGElMjBnYXJkZW58ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-garden&docid=STMlQpnM_XkJxM&tbnid=prZnh0pvZaDv_M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFQQAA..i&w=3000&h=2001&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECFQQAA",
      "price": 720,
      "location": "Maui, Hawaii",
      "country": "USA"
    },
    {
      "title": "The Desert Oasis Villa",
      "description": "A luxurious villa in the desert, offering ultimate privacy, stunning views, and a private pool surrounded by lush gardens and desert landscapes.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fplus.unsplash.com%2Fpremium_photo-1661906854568-8964f58ed859%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlsbGElMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%253D%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-interior&docid=8zHB8x4K8FvdkM&tbnid=U-IizBlqBJtt3M&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECD8QAA..i&w=3000&h=1688&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECD8QAA",
      "price": 800,
      "location": "Palm Springs, California",
      "country": "USA"
    },
    {
      "title": "Villa Mirage",
      "description": "An ultra-modern, sleek villa with stunning architecture, located in an exclusive neighborhood, featuring spacious interiors and a serene outdoor pool area.",
      "image": "https://www.google.com/imgres?q=unsplash%20villa&imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1623298460174-371443cc45f0%3Ffm%3Djpg%26q%3D60%26w%3D3000%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZpbGxhJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%253D&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fvilla-interior&docid=8zHB8x4K8FvdkM&tbnid=uyAO2Jjx5k3KRM&vet=12ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECDgQAA..i&w=3000&h=2000&hcb=2&ved=2ahUKEwjc0vTS4v-LAxVmmq8BHVRuHm8QM3oECDgQAA",
      "price": 950,
      "location": "Dubai, UAE",
      "country": "United Arab Emirates"
    },
  ];

  module.exports =  { data: sampleListings };
  