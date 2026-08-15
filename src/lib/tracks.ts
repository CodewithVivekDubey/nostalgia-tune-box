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

/** Stand-in ID used wherever the real rights-holder upload is still pending. */
export const PLACEHOLDER_VIDEO_ID = "dQw4w9WgXcQ";

/**
 * The full tape, in order. Adding a song is a one-line change.
 *
 * `videoId` is the 11-character ID from the rights holder's own YouTube upload
 * (the part after `watch?v=`). Rows still on PLACEHOLDER_VIDEO_ID are flagged
 * in the menu so it is obvious which ones need the real ID.
 */
export const ALL_TRACKS: Track[] = [
  { id: "t01", title: "Bulleya", artist: "Papon & Shilpa Rao", film: "Ae Dil Hai Mushkil", year: 2016, duration: 306, videoId: "vrqFJ-yjkRw" },
  { id: "t02", title: "Tumhe Jo Maine Dekha", artist: "Abhijeet & Alka Yagnik", film: "Main Hoon Na", year: 2004, duration: 316, videoId: "hjDVcbjBwE4" },
  { id: "t03", title: "Tumse Milke Dil Ka", artist: "Sonu Nigam", film: "Main Hoon Na", year: 2004, duration: 425, videoId: "V4dKZ56sfpk" },
  { id: "t04", title: "Ambarsariya", artist: "Sona Mohapatra", film: "Fukrey", year: 2013, duration: 268, videoId: "9VpT0mK6vGg" },
  { id: "t05", title: "Party On My Mind", artist: "KK, Shefali Alvares & Benny Dayal", film: "Race 2", year: 2013, duration: 219, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t06", title: "Raanjhan", artist: "Parampara Tandon", film: "Do Patti", year: 2024, duration: 253, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t07", title: "One Love", artist: "Kailash Kher", film: "Blue", year: 2009, duration: 260, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t08", title: "Kun Faya Kun", artist: "A. R. Rahman, Javed Ali & Mohit Chauhan", film: "Rockstar", year: 2011, duration: 468, videoId: "T94PHkuydcw" },
  { id: "t09", title: "Teri Deewani", artist: "Kailash Kher", film: "Kailasa", year: 2006, duration: 391, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t10", title: "High Heels Te Nachche", artist: "Jaz Dhami & Honey Singh", film: "Ki & Ka", year: 2016, duration: 205, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t11", title: "Dekha Ek Khwab - II", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 298, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t12", title: "Dekha Ek Khwab", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 335, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t13", title: "Mehbooba Mehbooba", artist: "R. D. Burman", film: "Sholay", year: 1975, duration: 224, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t14", title: "Beedi", artist: "Sukhwinder Singh & Sunidhi Chauhan", film: "Omkara", year: 2006, duration: 289, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t15", title: "Sajde", artist: "Arijit Singh & Nihira Joshi", film: "Kill Dil", year: 2014, duration: 297, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t16", title: "Aage Peeche", artist: "Sunidhi Chauhan & Kunal Ganjawala", film: "Golmaal", year: 2006, duration: 254, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t17", title: "Main Badhiya Tu Bhi Badhiya", artist: "Sonu Nigam & Neha Kakkar", film: "Sanju", year: 2018, duration: 209, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t18", title: "Kiya Kiya", artist: "Neeraj Shridhar & Suzanne D'Mello", film: "Welcome", year: 2007, duration: 289, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t19", title: "Mujhko Yaad Sataye Teri", artist: "Kishore Kumar & Asha Bhosle", film: "Phool Khile Hain Gulshan Gulshan", year: 1978, duration: 268, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t20", title: "Suniyan Suniyan", artist: "Juss", film: "Single", year: 2023, duration: 219, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t21", title: "Zaroor", artist: "Karan Aujla", film: "Single", year: 2023, duration: 176, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t22", title: "Such Keh Raha Hai", artist: "KK & Sunidhi Chauhan", film: "Rehnaa Hai Terre Dil Mein", year: 2001, duration: 320, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t23", title: "Mera Yaar", artist: "Javed Bashir", film: "Bhaag Milkha Bhaag", year: 2013, duration: 279, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t24", title: "Sawaar Loon", artist: "Monali Thakur", film: "Lootera", year: 2013, duration: 253, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t25", title: "Genda Phool", artist: "Rekha Bhardwaj & Shraddha Pandit", film: "Delhi-6", year: 2009, duration: 260, videoId: "vMBSGslunvY" },
  { id: "t26", title: "Sanu Kehndi", artist: "Sukhwinder Singh & Yashita Sharma", film: "Kesari", year: 2019, duration: 213, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t27", title: "Aasman Ko Chukar", artist: "Sonu Nigam", film: "Single", year: 2022, duration: 246, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t28", title: "Haaye Oye", artist: "Anirudh Ravichander & Jonita Gandhi", film: "Single", year: 2021, duration: 201, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t29", title: "Bismil", artist: "Sukhwinder Singh", film: "Haider", year: 2014, duration: 379, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t30", title: "Bedardi Raja", artist: "Bhairavi & Chinmayi Sripada", film: "Delhi Belly", year: 2011, duration: 200, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t31", title: "Monta Re", artist: "Amitabh Bhattacharya & Swanand Kirkire", film: "Lootera", year: 2013, duration: 297, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t32", title: "Dil To Bachcha Hai", artist: "Rahat Fateh Ali Khan", film: "Ishqiya", year: 2010, duration: 297, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t33", title: "Kholo Kholo", artist: "Raman Mahadevan", film: "Taare Zameen Par", year: 2007, duration: 288, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t34", title: "Shaabaashiyaan", artist: "Sukhwinder Singh & Shashaa Tirupati", film: "Mission Mangal", year: 2019, duration: 226, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t35", title: "Masakali", artist: "Mohit Chauhan", film: "Delhi-6", year: 2009, duration: 288, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t36", title: "Ekla Cholo Re", artist: "Amitabh Bachchan", film: "Kahaani", year: 2012, duration: 209, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t37", title: "Venom", artist: "Independent", film: "Single", year: 2020, duration: 224, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t38", title: "lovely", artist: "Independent", film: "Single", year: 2018, duration: 200, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t39", title: "Yeh Dil Deewana", artist: "Sonu Nigam & Hema Sardesai", film: "Pardes", year: 1997, duration: 388, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t40", title: "Fairytale", artist: "Independent", film: "Single", year: 2019, duration: 213, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t41", title: "O O Jaane Jaana", artist: "Kamaal Khan", film: "Pyaar Kiya To Darna Kya", year: 1998, duration: 292, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t42", title: "Aathma Raama", artist: "Brodha V", film: "Single", year: 2017, duration: 233, videoId: PLACEHOLDER_VIDEO_ID },
  { id: "t43", title: "Aigiri Nandini", artist: "Traditional", film: "Devotional", year: 2019, duration: 264, videoId: PLACEHOLDER_VIDEO_ID },
];

const pick = (...ids: string[]): Track[] =>
  ids.map((id) => ALL_TRACKS.find((t) => t.id === id)!).filter(Boolean);

export const PLAYLISTS: Playlist[] = [
  {
    id: "full-tape",
    name: `Full Tape · ${ALL_TRACKS.length}`,
    tagline: "Every song, in the order you sent them",
    tracks: ALL_TRACKS,
  },
  {
    id: "chowk-ka-shor",
    name: "Chowk ka Shor",
    tagline: "Gully-cricket loud, speaker-on-the-counter loud",
    tracks: pick("t05", "t10", "t13", "t14", "t16", "t18", "t20", "t21", "t26", "t28", "t34", "t42", "t43"),
  },
  {
    id: "raat-ki-dhun",
    name: "Raat ki Dhun",
    tagline: "For the walk back home",
    tracks: pick("t01", "t04", "t08", "t09", "t11", "t12", "t15", "t19", "t23", "t24", "t29", "t31", "t32", "t35", "t36", "t39"),
  },
];
