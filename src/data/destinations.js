
const destinations = [
  {
    id: Math.random().toString(36).slice(2, 11),
    titre: "Suisse",
    country: "Switzerland",
    description:
      "Découvrez les Alpes suisses, les lacs cristallins et les magnifiques villages de montagne. Une destination idéale pour les amoureux de la nature.",
    prix: 3500,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600",
    flightDuration: "2h 30min",
    airline: "Tunisair",
    bestSeason: "June - September"
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    titre: "Maldives",
    country: "Maldives",
    description:
      "Profitez des plages de sable blanc, des eaux turquoise et des villas sur pilotis pour un séjour paradisiaque au bord de l'océan Indien.",
    prix: 4800,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600",
    flightDuration: "12h 00min",
    airline: "Qatar Airways",
    bestSeason: "November - April"
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    titre: "Bali, Indonésie",
    country: "Indonesia",
    description:
      "Explorez les temples traditionnels, les rizières verdoyantes et les plages tropicales de Bali pour une expérience entre culture et détente.",
    prix: 2900,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600",
    flightDuration: "16h 30min",
    airline: "Emirates",
    bestSeason: "April - October"
  },
  {
    id: Math.random().toString(36).slice(2, 11),
    titre: "Santorin, Grèce",
    country: "Greece",
    description:
      "Admirez les maisons blanches aux dômes bleus, les couchers de soleil spectaculaires et les panoramas exceptionnels sur la mer Égée.",
    prix: 2200,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600",
    flightDuration: "2h 00min",
    airline: "Aegean Airlines",
    bestSeason: "May - October"
  }
];

export default destinations;

