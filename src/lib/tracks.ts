export type Track = {
  id: string;
  title: string;
  artist: string;
  film: string;
  year: number;
  duration: number; // fallback until the player reports the real value
  videoId: string; // rights-holder's own YouTube upload, embedding enabled
};

export type Playlist = {
  id: string;
  name: string;
  tagline: string;
  tracks: Track[];
};

/**
 * Adding a song is a one-line change: drop a new object into the `tracks` array.
 *
 * `videoId` MUST be the 11-character ID from the rights holder's own YouTube
 * upload (label / artist channel) with embedding enabled. Tracks without a
 * real videoId will play the placeholder instead — replace it with a proper
 * rights-holder upload before publishing the site.
 */
export const PLAYLISTS: Playlist[] = [
  {
    id: "radio-cassette-43",
    name: "Radio Cassette",
    tagline: "43 songs from the corner shop, in order",
    tracks: [
      { id: "t01", title: "Bulleya", artist: "Papon & Shilpa Rao", film: "Ae Dil Hai Mushkil", year: 2016, duration: 306, videoId: "vrqFJ-yjkRw" },
      { id: "t02", title: "Tumhe Jo Maine Dekha", artist: "Abhijeet & Shreya Ghoshal", film: "Main Hoon Na", year: 2004, duration: 316, videoId: "hjDVcbjBwE4" },
      { id: "t03", title: "Tumse Milke Dil Ka", artist: "Sonu Nigam", film: "Main Hoon Na", year: 2004, duration: 425, videoId: "V4dKZ56sfpk" },
      { id: "t04", title: "Ambarsariya", artist: "Sona Mohapatra", film: "Fukrey", year: 2013, duration: 268, videoId: "9VpT0mK6vGg" },
      { id: "t05", title: "Party On My Mind", artist: "KK, Shefali Alvares & Benny Dayal", film: "Race 2", year: 2013, duration: 219, videoId: "dQw4w9WgXcQ" },
      { id: "t06", title: "Raanjhan", artist: "Parampara Tandon & Sanjay Leela Bhansali", film: "Do Patti", year: 2024, duration: 253, videoId: "dQw4w9WgXcQ" },
      { id: "t07", title: "One Love (Blue)", artist: "Kailash Kher", film: "Blue", year: 2009, duration: 260, videoId: "dQw4w9WgXcQ" },
      { id: "t08", title: "Kun Faya Kun", artist: "A. R. Rahman, Javed Ali & Mohit Chauhan", film: "Rockstar", year: 2011, duration: 468, videoId: "T94PHkuydcw" },
      { id: "t09", title: "Teri Deewani", artist: "Kailash Kher", film: "Kailasa", year: 2006, duration: 391, videoId: "dQw4w9WgXcQ" },
      { id: "t10", title: "High Heels Te Nachche", artist: "Jaz Dhami & Yo Yo Honey Singh", film: "Ki & Ka", year: 2016, duration: 205, videoId: "dQw4w9WgXcQ" },
      { id: "t11", title: "Dekha Ek Khwab - II", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 335, videoId: "dQw4w9WgXcQ" },
      { id: "t12", title: "Dekha Ek Khwab", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 335, videoId: "dQw4w9WgXcQ" },
      { id: "t13", title: "Mehbooba Mehbooba (Sholay)", artist: "R. D. Burman", film: "Sholay", year: 1975, duration: 224, videoId: "dQw4w9WgXcQ" },
      { id: "t14", title: "Beedi (Omkara)", artist: "Sunidhi Chauhan, Sukhwinder Singh & Clinton Cerejo", film: "Omkara", year: 2006, duration: 289, videoId: "dQw4w9WgXcQ" },
      { id: "t15", title: "Sajde (Kill Dil)", artist: "Arijit Singh & Nihira Joshi", film: "Kill Dil", year: 2014, duration: 297, videoId: "dQw4w9WgXcQ" },
      { id: "t16", title: "Aage Peeche (Golmaal)", artist: "Sunidhi Chauhan & Kunal Ganjawala", film: "Golmaal", year: 2006, duration: 254, videoId: "dQw4w9WgXcQ" },
      { id: "t17", title: "Main Badhiya Tu Bhi Badhiya", artist: "Sonu Nigam & Neha Kakkar", film: "Sanju", year: 2018, duration: 209, videoId: "dQw4w9WgXcQ" },
      { id: "t18", title: "Kiya Kiya (Welcome)", artist: "Neeraj Shridhar & Suzanne D'Mello", film: "Welcome", year: 2007, duration: 289, videoId: "dQw4w9WgXcQ" },
      { id: "t19", title: "Mujhko Yaad Sataye Teri", artist: "Kishore Kumar & Asha Bhosle", film: "Phool Khile Hain Gulshan Gulshan", year: 1978, duration: 268, videoId: "dQw4w9WgXcQ" },
      { id: "t20", title: "Suniyan Suniyan", artist: "Juss", film: "Single", year: 2023, duration: 219, videoId: "dQw4w9WgXcQ" },
      { id: "t21", title: "Zaroor", artist: "Karan Aujla", film: "Single", year: 2023, duration: 176, videoId: "dQw4w9WgXcQ" },
      { id: "t22", title: "Such Keh Raha Hai", artist: "KK & Sunidhi Chauhan", film: "Rehnaa Hai Terre Dil Mein", year: 2001, duration: 320, videoId: "dQw4w9WgXcQ" },
      { id: "t23", title: "Mera Yaar", artist: "Javed Bashir", film: "Bhaag Milkha Bhaag", year: 2013, duration: 279, videoId: "dQw4w9WgXcQ" },
      { id: "t24", title: "Sawaar Loon", artist: "Monali Thakur", film: "Lootera", year: 2013, duration: 253, videoId: "dQw4w9WgXcQ" },
      { id: "t25", title: "Genda Phool", artist: "Rekha Bhardwaj & Shraddha Pandit", film: "Delhi-6", year: 2009, duration: 260, videoId: "vMBSGslunvY" },
      { id: "t26", title: "Sanu Kehndi", artist: "Sukhwinder Singh & Yashita Sharma", film: "Kesari", year: 2019, duration: 213, videoId: "dQw4w9WgXcQ" },
      { id: "t27", title: "Aasman Ko Chukar", artist: "Sonu Nigam", film: "Single", year: 2022, duration: 246, videoId: "dQw4w9WgXcQ" },
      { id: "t28", title: "Haaye Oye", artist: "Anirudh Ravichander & Jonita Gandhi", film: "Single", year: 2021, duration: 201, videoId: "dQw4w9WgXcQ" },
      { id: "t29", title: "Bismil (Haider)", artist: "Sukhwinder Singh", film: "Haider", year: 2014, duration: 379, videoId: "dQw4w9WgXcQ" },
      { id: "t30", title: "Bedardi Raja", artist: "Shilpa Rao & Bhairavi", film: "Delhi Belly", year: 2011, duration: 200, videoId: "dQw4w9WgXcQ" },
      { id: "t31", title: "Monta Re", artist: "Amitabh Bhattacharya & Swanand Kirkire", film: "Lootera", year: 2013, duration: 297, videoId: "dQw4w9WgXcQ" },
      { id: "t32", title: "Dil To Bachcha Hai", artist: "Rahat Fateh Ali Khan", film: "Ishqiya", year: 2010, duration: 297, videoId: "dQw4w9WgXcQ" },
      { id: "t33", title: "Kholo Kholo", artist: "Raman Mahadevan", film: "Taare Zameen Par", year: 2007, duration: 288, videoId: "dQw4w9WgXcQ" },
      { id: "t34", title: "Shaabaashiyaan", artist: "Sukhwinder Singh, Shashaa Tirupati & Vijay Prakash", film: "Mission Mangal", year: 2019, duration: 226, videoId: "dQw4w9WgXcQ" },
      { id: "t35", title: "Masakali", artist: "Mohit Chauhan", film: "Delhi-6", year: 2009, duration: 288, videoId: "dQw4w9WgXcQ" },
      { id: "t36", title: "Ekla Cholo Re", artist: "Amitabh Bachchan", film: "Kahaani", year: 2012, duration: 209, videoId: "dQw4w9WgXcQ" },
      { id: "t37", title: "Venom", artist: "Eminem", film: "Single", year: 2018, duration: 269, videoId: "dQw4w9WgXcQ" },
      { id: "t38", title: "lovely", artist: "Billie Eilish & Khalid", film: "Single", year: 2018, duration: 200, videoId: "dQw4w9WgXcQ" },
      { id: "t39", title: "Yeh Dil Deewana", artist: "Sonu Nigam & Hema Sardesai", film: "Pardes", year: 1997, duration: 388, videoId: "dQw4w9WgXcQ" },
      { id: "t40", title: "Fairytale", artist: "Alexander Rybak", film: "Single", year: 2009, duration: 183, videoId: "dQw4w9WgXcQ" },
      { id: "t41", title: "O O Jaane Jaana", artist: "Kamaal Khan", film: "Pyaar Kiya To Darna Kya", year: 1998, duration: 292, videoId: "dQw4w9WgXcQ" },
      { id: "t42", title: "Aathma Raama", artist: "Brodha V", film: "Single", year: 2017, duration: 233, videoId: "dQw4w9WgXcQ" },
      { id: "t43", title: "Aigiri Nandini", artist: "Nakshatra", film: "Single", year: 2020, duration: 244, videoId: "dQw4w9WgXcQ" },
    ],
  },
];
