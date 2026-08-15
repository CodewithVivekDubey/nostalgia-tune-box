export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  duration: number; // seconds (fallback until the player reports the real value)
  videoId: string; // rights-holder's own YouTube upload, embedding enabled
};

export type Playlist = {
  id: string;
  name: string;
  tagline: string;
  tracks: Track[];
};

/**
 * Adding a song is a one-line change: drop a new object into a `tracks` array.
 *
 * `videoId` MUST point at an upload owned by the rights holder (label / artist
 * channel) with embedding enabled. Entries with an empty `videoId` are kept as
 * placeholders and are skipped by the engine.
 */
export const PLAYLISTS: Playlist[] = [
  {
    id: "sham-e-sadak",
    name: "Shaam-e-Sadak",
    tagline: "Golden-hour street tape",
    tracks: [
      { id: "t1", title: "Kun Faya Kun", artist: "A. R. Rahman", film: "Rockstar", year: 2011, duration: 468, videoId: "" },
      { id: "t2", title: "Sawaar Loon", artist: "Monali Thakur", film: "Lootera", year: 2013, duration: 253, videoId: "" },
      { id: "t3", title: "Ambarsariya", artist: "Sona Mohapatra", film: "Fukrey", year: 2013, duration: 268, videoId: "" },
      { id: "t4", title: "Monta Re", artist: "Amit Trivedi", film: "Lootera", year: 2013, duration: 297, videoId: "" },
    ],
  },
  {
    id: "chowk-ka-shor",
    name: "Chowk ka Shor",
    tagline: "Loud, gully-cricket loud",
    tracks: [
      { id: "t5", title: "Genda Phool", artist: "Rekha Bhardwaj", film: "Delhi-6", year: 2009, duration: 260, videoId: "" },
      { id: "t6", title: "Mehbooba Mehbooba", artist: "R. D. Burman", film: "Sholay", year: 1975, duration: 224, videoId: "" },
      { id: "t7", title: "High Heels Te Nachche", artist: "Jaz Dhami", film: "Ki & Ka", year: 2016, duration: 205, videoId: "" },
      { id: "t8", title: "Kamariya Lachke Re", artist: "Shreya Ghoshal", film: "Mera Saaya", year: 2019, duration: 236, videoId: "" },
    ],
  },
  {
    id: "raat-ki-dhun",
    name: "Raat ki Dhun",
    tagline: "For the walk back home",
    tracks: [
      { id: "t9", title: "O O Jaane Jaana", artist: "Kamaal Khan", film: "Pyaar Kiya To Darna Kya", year: 1998, duration: 292, videoId: "" },
      { id: "t10", title: "Dekha Ek Khwab", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 335, videoId: "" },
      { id: "t11", title: "Ekla Cholo Re", artist: "Amitabh Bachchan", film: "Kahaani", year: 2012, duration: 209, videoId: "" },
      { id: "t12", title: "Taare", artist: "Independent", film: "Single", year: 2020, duration: 231, videoId: "" },
    ],
  },
];
