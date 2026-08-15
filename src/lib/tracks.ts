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
 * `videoId` MUST be the 11-character ID from the rights holder's own YouTube
 * upload (label / artist channel) with embedding enabled — the part after
 * `watch?v=`. Entries with an empty `videoId` show an "add a video ID" state
 * and are skipped when a track ends.
 */
export const PLAYLISTS: Playlist[] = [
  {
    id: "chowk-ka-shor",
    name: "Chowk ka Shor",
    tagline: "Gully-cricket loud, speaker-on-the-counter loud",
    tracks: [
      { id: "t01", title: "Bulleya", artist: "Papon & Shilpa Rao", film: "Ae Dil Hai Mushkil", year: 2016, duration: 306, videoId: "" },
      { id: "t02", title: "Tumhe Jo Maine Dekha", artist: "Abhijeet & Alka Yagnik", film: "Main Hoon Na", year: 2004, duration: 316, videoId: "" },
      { id: "t03", title: "Tumse Milke Dil Ka", artist: "Sonu Nigam", film: "Main Hoon Na", year: 2004, duration: 425, videoId: "" },
      { id: "t04", title: "Ambarsariya", artist: "Sona Mohapatra", film: "Fukrey", year: 2013, duration: 268, videoId: "" },
      { id: "t05", title: "Party On My Mind", artist: "KK, Shefali Alvares & Benny Dayal", film: "Race 2", year: 2013, duration: 219, videoId: "" },
      { id: "t06", title: "Raanjhan", artist: "Parampara Tandon & Sanjay Leela Bhansali", film: "Do Patti", year: 2024, duration: 253, videoId: "" },
      { id: "t07", title: "One Love", artist: "Kailash Kher", film: "Blue", year: 2009, duration: 260, videoId: "" },
      { id: "t08", title: "Kun Faya Kun", artist: "A. R. Rahman, Javed Ali & Mohit Chauhan", film: "Rockstar", year: 2011, duration: 468, videoId: "" },
      { id: "t09", title: "Teri Deewani", artist: "Kailash Kher", film: "Kailasa", year: 2006, duration: 391, videoId: "" },
      { id: "t10", title: "High Heels Te Nachche", artist: "Jaz Dhami & Yo Yo Honey Singh", film: "Ki & Ka", year: 2016, duration: 205, videoId: "" },
      { id: "t11", title: "Dekha Ek Khwab", artist: "Kishore Kumar & Lata Mangeshkar", film: "Silsila", year: 1981, duration: 335, videoId: "" },
      { id: "t12", title: "Mehbooba Mehbooba", artist: "R. D. Burman", film: "Sholay", year: 1975, duration: 224, videoId: "" },
      { id: "t13", title: "Beedi", artist: "Sukhwinder Singh, Sunidhi Chauhan & Clinton Cerejo", film: "Omkara", year: 2006, duration: 289, videoId: "" },
      { id: "t14", title: "Sajde", artist: "Arijit Singh & Nihira Joshi", film: "Kill Dil", year: 2014, duration: 297, videoId: "" },
      { id: "t15", title: "Aage Peeche", artist: "Sunidhi Chauhan & Kunal Ganjawala", film: "Golmaal", year: 2006, duration: 254, videoId: "" },
    ],
  },
  {
    id: "shaam-e-sadak",
    name: "Shaam-e-Sadak",
    tagline: "Golden-hour street tape",
    tracks: [
      { id: "t16", title: "Main Badhiya Tu Bhi Badhiya", artist: "Sonu Nigam & Neha Kakkar", film: "Sanju", year: 2018, duration: 209, videoId: "" },
      { id: "t17", title: "Kiya Kiya", artist: "Neeraj Shridhar & Suzanne D'Mello", film: "Welcome", year: 2007, duration: 289, videoId: "7H9DGVUkHeg" },
      { id: "t18", title: "Mujhko Yaad Sataye Teri", artist: "Kishore Kumar & Asha Bhosle", film: "Phool Khile Hain Gulshan Gulshan", year: 1978, duration: 268, videoId: "" },
      { id: "t19", title: "Suniyan Suniyan", artist: "Juss", film: "Single", year: 2023, duration: 219, videoId: "" },
      { id: "t20", title: "Zaroor", artist: "Karan Aujla", film: "Single", year: 2023, duration: 176, videoId: "" },
      { id: "t21", title: "Such Keh Raha Hai Deewana", artist: "KK & Sunidhi Chauhan", film: "Rehnaa Hai Terre Dil Mein", year: 2001, duration: 320, videoId: "" },
      { id: "t22", title: "Mera Yaar", artist: "Javed Bashir", film: "Bhaag Milkha Bhaag", year: 2013, duration: 279, videoId: "" },
      { id: "t23", title: "Sawaar Loon", artist: "Monali Thakur", film: "Lootera", year: 2013, duration: 253, videoId: "" },
      { id: "t24", title: "Genda Phool", artist: "Rekha Bhardwaj & Shraddha Pandit", film: "Delhi-6", year: 2009, duration: 260, videoId: "" },
      { id: "t25", title: "Sanu Kehndi", artist: "Sukhwinder Singh & Yashita Sharma", film: "Kesari", year: 2019, duration: 213, videoId: "" },
      { id: "t26", title: "Aasman Ko Chukar", artist: "Sonu Nigam", film: "Aasman Ko Chukar", year: 2022, duration: 246, videoId: "" },
      { id: "t27", title: "Haaye Oye", artist: "Anirudh Ravichander & Jonita Gandhi", film: "Single", year: 2021, duration: 201, videoId: "" },
      { id: "t28", title: "Bismil", artist: "Sukhwinder Singh", film: "Haider", year: 2014, duration: 379, videoId: "" },
      { id: "t29", title: "Bedardi Raja", artist: "Bhairavi & Chinmayi Sripada", film: "Delhi Belly", year: 2011, duration: 200, videoId: "" },
      { id: "t30", title: "Monta Re", artist: "Amitabh Bhattacharya & Swanand Kirkire", film: "Lootera", year: 2013, duration: 297, videoId: "" },
    ],
  },
  {
    id: "raat-ki-dhun",
    name: "Raat ki Dhun",
    tagline: "For the walk back home",
    tracks: [
      { id: "t31", title: "Dil To Bachcha Hai Ji", artist: "Rahat Fateh Ali Khan", film: "Ishqiya", year: 2010, duration: 297, videoId: "" },
      { id: "t32", title: "Kholo Kholo", artist: "Raman Mahadevan", film: "Taare Zameen Par", year: 2007, duration: 288, videoId: "" },
      { id: "t33", title: "Shaabaashiyaan", artist: "Sukhwinder Singh, Shashaa Tirupati & Vijay Prakash", film: "Mission Mangal", year: 2019, duration: 226, videoId: "" },
      { id: "t34", title: "Masakali", artist: "Mohit Chauhan", film: "Delhi-6", year: 2009, duration: 288, videoId: "" },
      { id: "t35", title: "Ekla Cholo Re", artist: "Amitabh Bachchan", film: "Kahaani", year: 2012, duration: 209, videoId: "" },
      { id: "t36", title: "Yeh Dil Deewana", artist: "Sonu Nigam & Hema Sardesai", film: "Pardes", year: 1997, duration: 388, videoId: "" },
      { id: "t37", title: "O O Jaane Jaana", artist: "Kamaal Khan", film: "Pyaar Kiya To Darna Kya", year: 1998, duration: 292, videoId: "" },
      { id: "t38", title: "Aathma Raama", artist: "Brodha V", film: "Single", year: 2017, duration: 233, videoId: "" },
      { id: "t39", title: "Psycho Saiyaan", artist: "Dhvani Bhanushali & Sachet Tandon", film: "Saaho", year: 2019, duration: 217, videoId: "" },
      { id: "t40", title: "Chala Jata Hoon", artist: "Kishore Kumar", film: "Mere Jeevan Saathi", year: 1972, duration: 260, videoId: "" },
      { id: "t41", title: "Bairan", artist: "Independent", film: "Single", year: 2023, duration: 236, videoId: "n0kh1gSdPFc" },
      { id: "t42", title: "Kamariya Lachke Re", artist: "Shreya Ghoshal", film: "Mera Saaya", year: 2019, duration: 236, videoId: "PE5AXJlZn8I" },
      { id: "t43", title: "Parwaaz", artist: "Independent", film: "Single", year: 2023, duration: 244, videoId: "BfM86k78AO0" },
    ],
  },
];
