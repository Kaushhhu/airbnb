const sampleListings = [
    {
      "title": "Serenity Beachfront Villa",
      "description": "A luxurious beachfront villa with breathtaking views of the ocean, offering privacy, comfort, and easy access to pristine beaches. Ideal for a relaxing getaway.",
      "image": "/images/airbnb11.jpg",
      "price": 450,
      "location": "Bora Bora, Tahiti",
      "country": "French Polynesia"
    },
    {
      "title": "Mountain View Estate",
      "description": "Nestled in the heart of the Swiss Alps, this villa offers stunning panoramic mountain views, an infinity pool, and spacious living areas for the ultimate luxury retreat.",
      "image": "/images/airbnb27.jpg",
      "price": 700,
      "location": "Zermatt, Valais",
      "country": "Switzerland"
    },
    {
      "title": "Villa Toscana",
      "description": "An elegant villa set in the rolling hills of Tuscany, Italy, featuring a private garden, vineyard, and rustic charm combined with modern amenities.",
      "image": "/images/airbnb1.jpg",
      "price": 550,
      "location": "Florence, Tuscany",
      "country": "Italy"
    },
    {
      "title": "Luxury Desert Villa",
      "description": "Located in the heart of the Dubai desert, this villa boasts contemporary architecture, a private pool, and unparalleled views of the sand dunes.",
      "image": " /images/airbnb22.jpg",
      "price": 650,
      "location": "Dubai, Emirate of Dubai",
      "country": "United Arab Emirates"
    },
    {
      "title": "Oceanfront Retreat",
      "description": "This stunning oceanfront villa in Bali offers a serene escape with infinity views of the Indian Ocean, a yoga pavilion, and lavish bedrooms perfect for relaxation.",
      "image": "/images/3airbnb33.jpg",
      "price": 520,
      "location": "Uluwatu, Bali",
      "country": "Indonesia"
    },
    {
      "title": "Mansion in the Sky",
      "description": "A sprawling penthouse villa with panoramic city views, infinity pool, and a sleek, modern design located at the top of a skyscraper.",
      "image": "/images/airbnb4.jpg",
      "price": 1000,
      "location": "New York City, New York",
      "country": "USA"
    },
    {
      "title": "Sunset Villa",
      "description": "A tranquil hideaway offering stunning sunset views, private infinity pool, and luxurious interiors perfect for a romantic getaway.",
      "image": "/images/airbnb5.jpg",
      "price": 750,
      "location": "Santorini, Aegean Islands",
      "country": "Greece"
    },
    {
      "title": "Alpine Luxury Chalet",
      "description": "A cozy, luxurious chalet in the heart of the French Alps, perfect for skiing enthusiasts. Includes a fireplace, sauna, and private hot tub.",
      "image": "/images/airbnb6.jpg",
      "price": 650,
      "location": "Chamonix, Haute-Savoie",
      "country": "France"
    },
    {
      "title": "Tropical Paradise Villa",
      "description": "Nestled in a lush tropical jungle, this villa offers stunning views of the ocean, a private pool, and plenty of space for relaxation and exploration.",
      "image": "/images/airbnb7.jpg",
      "price": 600,
      "location": "Koh Samui, Surat Thani",
      "country": "Thailand"
    },
    {
      "title": "Coastal Retreat Villa",
      "description": "A sophisticated coastal villa offering unparalleled views of the Mediterranean, with a private beach and stylish outdoor living spaces.",
      "image": "/images/airbnb8.jpg",
      "price": 700,
      "location": "Amalfi Coast, Campania",
      "country": "Italy"
    },
    {
      "title": "Modern Villa in the City",
      "description": "This ultra-modern villa is located in the heart of Los Angeles, offering sleek design, private garden, and proximity to city attractions.",
      "image": "/images/airbnb9.jpg",
      "price": 800,
      "location": "Los Angeles, California",
      "country": "USA"
    },
    {
      "title": "Island Hideaway Villa",
      "description": "Escape to your own private island in the Caribbean, where luxury meets nature. This villa offers exclusive beachfront access and first-class amenities.",
      "image": "/images/airbnb10.jpg",
      "price": 1200,
      "location": "Turks and Caicos Islands",
      "country": "Caribbean"
    },
    {
      "title": "Secluded Mountain Villa",
      "description": "Located in the secluded mountains of New Zealand, this villa offers stunning landscapes, a hot tub, and the ultimate privacy for nature lovers.",
      "image": "/images/airbnb011.jpg",
      "price": 600,
      "location": "Queenstown, Otago",
      "country": "New Zealand"
    },
    {
      "title": "The Vineyard Estate",
      "description": "Set amidst sprawling vineyards, this estate offers a unique blend of luxury and rustic charm, perfect for wine lovers seeking relaxation and beauty.",
      "image": "/images/airbnb12.jpg",
      "price": 550,
      "location": "Napa Valley, California",
      "country": "USA"
    },
    {
      "title": "Lagoon View Villa",
      "description": "Overlooking a pristine lagoon, this villa combines modern luxury with natural beauty, offering a tranquil retreat with water sports and adventure nearby.",
      "image": "/images/airbnb13.jpg",
      "price": 680,
      "location": "Maldives",
      "country": "Maldives"
    },
    {
      "title": "Exclusive Ocean Villa",
      "description": "A lavish villa situated directly on the beach with uninterrupted ocean views, private infinity pool, and a full-service staff.",
      "image": "/images/airbnb14.jpg",
      "price": 1000,
      "location": "Phuket, Thailand",
      "country": "Thailand"
    },
    {
      "title": "The Cliffside Residence",
      "description": "A stunning villa perched on the edge of a cliff, offering breathtaking panoramic views of the coastline, complete with an outdoor fireplace and hot tub.",
      "image": "/images/airbnb15.jpg",
      "location": "Big Sur, California",
      "country": "USA"
    },
    {
      "title": "Luxury Villa in Bali",
      "description": "This stunning Bali villa combines traditional architecture with modern luxury, featuring a large pool, garden, and a peaceful atmosphere.",
      "image": "/images/airbnb16.jpg",
      "location": "Seminyak, Bali",
      "country": "Indonesia"
    },
    {
      "title": "Mediterranean Dream Villa",
      "description": "A luxurious villa with Mediterranean charm, offering panoramic views of the coastline, an elegant design, and an infinity pool for ultimate relaxation.",
      "image": "/images/airbnb17.jpg",
      "price": 750,
      "location": "Costa Brava, Catalonia",
      "country": "Spain"
    },
    {
      "title": "Majestic Lakeview Villa",
      "description": "This villa offers stunning views over a serene lake, with large windows, an open-plan living area, and an outdoor patio perfect for sunset dinners.",
      "image": "/images/airbnb18.jpg",
      "price": 600,
      "location": "Lake Como, Lombardy",
      "country": "Italy"
    },
    {
      "title": "Royal Palm Villa",
      "description": "Located in a private estate, this villa offers regal luxury with a private pool, spa, and landscaped gardens, perfect for relaxation and rejuvenation.",
      "image": " /images/airbnb19.jpg",
      "price": 850,
      "location": "Boca Raton, Florida",
      "country": "USA"
    },
    {
      "title": "Lagoon Breeze Villa",
      "description": "An exotic, luxurious villa situated beside a tranquil lagoon, offering easy access to water activities, serene views, and a private beach.",
      "image": "/images/airbnb20.jpg",
      "price": 650,
      "location": "Mauritius",
      "country": "Mauritius"
    },
    {
      "title": "Seaside Serenity Villa",
      "description": "This peaceful villa is set on a cliffside, offering stunning views of the ocean and a relaxing atmosphere with outdoor dining areas and a private infinity pool.",
      "image": "/images/airbnb21.jpg",
      "price": 780,
      "location": "Cabo San Lucas, Baja California",
      "country": "Mexico"
    },
    {
      "title": "Panoramic Hilltop Villa",
      "description": "Perched atop a hill, this villa offers sweeping panoramic views of the countryside, perfect for those seeking privacy, luxury, and tranquility.",
      "image": "/images/airbnb23.jpg",
      "price": 900,
      "location": "Vail, Colorado",
      "country": "USA"
    },
    {
      "title": "Ocean Breeze Villa",
      "description": "Set in a tropical paradise, this villa offers the ultimate beach escape, with direct access to the beach, an infinity pool, and spacious outdoor living.",
      "image": "/images/airbnb24.jpg",
      "price": 720,
      "location": "Maui, Hawaii",
      "country": "USA"
    },
    {
      "title": "The Desert Oasis Villa",
      "description": "A luxurious villa in the desert, offering ultimate privacy, stunning views, and a private pool surrounded by lush gardens and desert landscapes.",
      "image": "/images/airbnb25.jpg",
      "price": 800,
      "location": "Palm Springs, California",
      "country": "USA"
    },
    {
      "title": "Villa Mirage",
      "description": "An ultra-modern, sleek villa with stunning architecture, located in an exclusive neighborhood, featuring spacious interiors and a serene outdoor pool area.",
      "image": "/images/airbnb26.jpg",
      "price": 950,
      "location": "Dubai, UAE",
      "country": "United Arab Emirates"
    },
  ];

  module.exports =  { data: sampleListings };
  