import { 
  Shield, 
  Users, 
  Heart, 
  BookOpen, 
  Sun, 
  Music, 
} from "lucide-react"; 
 
// ============================================================
// GALLERY IMAGE PATHS
// ============================================================

const gallery01 = "/092103e2d22144dd80325082e2c7fb47.jpg";
const gallery02 = "/1712059193735.jpg";
const gallery03 = "/1712494680226.jpg";
const gallery04 = "/1712494692946.jpg";
const gallery05 = "/1765231802310.jpg";
const gallery06 = "/1766857609468.jpg";
const gallery07 = "/1774992089883.jpg";
const gallery08 = "/1777733693570.jpg";
const gallery09 = "/1777733706922.jpg";
const gallery10 = "/1777733726018.jpg";
const gallery11 = "/1777733760453.jpg";
const gallery12 = "/1777733783893.jpg";
const gallery13 = "/1778520841412.jpg";
const gallery14 = "/1778520852001.jpg";
const gallery15 = "/1778520855615.jpg";
const gallery16 = "/1778520859147.jpg";
const gallery17 = "/1778520866638.jpg";
const gallery18 = "/1778520870243.jpg";
const gallery19 = "/1778520874274.jpg";
const gallery20 = "/615dab0031fc4998aeb212f3852f6f00.jpg";
const gallery21 = "/Building.jpg";
const gallery22 = "/Cong 3.jpg";
const gallery23 = "/Congreation 2.jpg";
const gallery24 = "/Congregation.jpg";
const gallery25 = "/IMG-20240814-WA0205.jpg";

// ============================================================
// AUXILIARY LOGO PATHS
// ============================================================

const mmuLogo = "/mmu_logo.png";
const wmuLogo = "/WMU-LOGO.png";
const raLogo = "/RA-LOGO.png";
const lydiaLogo = "/LYDIA-LOGO.jpeg";
const gaLogo = "/GA-LOGO.jpeg";
const sunbeamLogo = "/SUNBEAM-LOGO.png";
const bsfLogo = "/BSF-LOGO.png";
const youthLogo = "/YOUTH-LOGO.png"; 
 
// ============================================================ 
// CHURCH INFORMATION 
// ============================================================ 
 
export const CHURCH_INFO = { 
  name: "Okegboho Baptist Church", 
  tagline: "Cathedral of Mercy", 
  location: "Igboho, Oyo State, Nigeria", 
  foundedYear: 1943, 
 
  theme2026: { 
    title: "A Season of Walking in Dominion", 
    watchword: "Psalm 8:6", 
    verseText: 
      "You made them rulers over the works of your hands; you put everything under their feet.", 
  }, 
 
  motto: "We are Ambassadors for Christ (2 Corinthians 5:20)", 
}; 
 
// ============================================================ 
// CHURCH LEADERSHIP 
// ============================================================ 
 
export const LEADERSHIP = [ 
  { 
    id: 1, 
    name: "Dn. C.F Adesope", 
    title: "Chairman, Board of Deacons", 
    image: "/deacon-1.jpg", 
    phone: "+2348146736880", 
    whatsapp: "+2348146736880", 
    email: "adewale@okegbohobaptistchurch.org", 
    role: "Spiritual Oversight & Church Administration", 
    bio: 
      "Serving God faithfully as a Deacon for over 15 years. Dn. Adewale oversees general administration and coordinates the church council in executing vision and spiritual development.", 
  }, 
 
  { 
    id: 2, 
    name: "Dn. Simon Alaba", 
    title: "Deacon", 
    image: "/deacon-2.jpg", 
    phone: "+23480777743823", 
    whatsapp: "+23480777743823", 
    email: "ojo@okegbohobaptistchurch.org", 
    role: "Welfare & Counseling", 
    bio: 
      "Passionate about women's ministry, family counseling, and welfare outreach. Dn. Ojo works closely with the WMU and church welfare team.", 
  }, 
 
  { 
    id: 3, 
    name: "Dn. A. O. Olabisi", 
    title: "Deacon", 
    image: "/deacon-3.jpg", 
    phone: "+2348052990797", 
    whatsapp: "+2348052990797", 
    email: "secretary@okegbohobaptistchurch.org", 
    role: "Records & Communications", 
    bio: 
      "Manages official church records, executive minutes, and communications between church departments and the Baptist Conference.", 
  }, 
 
  { 
    id: 4, 
    name: "Dn. O. T. Alabi", 
    title: "Deacon", 
    image: "/deacon-3.jpg", 
    phone: "+2347066874994", 
    whatsapp: "+2347066874994", 
    email: "alabioyeniyi2@gmail.com", 
    role: "Records & Communications", 
    bio: 
      "Manages official church records, executive minutes, and communications between church departments and the Baptist Conference.", 
  }, 
 
  { 
    id: 5, 
    name: "Dns. Felicia Babalola", 
    title: "Deaconess", 
    image: "/deacon-4.jpg", 
    phone: "+2348071799008", 
    whatsapp: "+2348071799008", 
    email: "finance@okegbohobaptistchurch.org", 
    role: "Financial Stewardship", 
    bio: 
      "Oversees church asset maintenance, financial auditing, and infrastructure expansion projects.", 
  }, 
 
  { 
    id: 6, 
    name: "Dns. M. O. Oyelowo", 
    title: "Deaconess", 
    image: "/deacon-4.jpg", 
    phone: "+2348074675961", 
    whatsapp: "+2348074675961", 
    email: "finance@okegbohobaptistchurch.org", 
    role: "Financial Stewardship", 
    bio: 
      "Oversees church asset maintenance, financial auditing, and infrastructure expansion projects.", 
  }, 
]; 
 
// ============================================================ 
// BANK DETAILS 
// ============================================================ 
 
export const BANK_DETAILS = [ 
  { 
    title: "Primary Tithe & Offering Account", 
    bank: "Wema Bank", 
    accountNumber: "0221053935", 
    name: "Okegboho Baptist Church", 
  }, 
 
  { 
    title: "Mission & Auxiliary Operations", 
    bank: "Wema Bank", 
    accountNumber: "XXXXXXX789", 
    name: "Okegboho Baptist Church Development", 
  }, 
]; 
 
// ============================================================ 
// CHURCH AUXILIARIES 
// ============================================================ 
 
export const AUXILIARIES = [ 
  { 
    id: "mmu", 
    name: "Men's Missionary Union (MMU)", 
    tag: "Adult Males", 
    logo: mmuLogo, 
    icon: Sun, 
    motto: "In all things showing yourself to be a pattern of good works", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc: 
      "Gathering Christian men to fulfill their priestly roles in their homes, church, and society.", 
    objectives: [ 
      "Equip men for spiritual leadership at home.", 
      "Drive church infrastructure and financial growth.", 
      "Mentor young men in RA and youth groups.", 
    ], 
    activities: [ 
      "Men's Sunday", 
      "Building Projects Support", 
      "Prayer Retreats", 
    ], 
  }, 
 
  { 
    id: "wmu", 
    name: "Women's Missionary Union (WMU)", 
    tag: "Adult Females", 
    logo: wmuLogo, 
    icon: Users, 
    motto: "Workers together with God", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc: 
      "Uniting adult women in prayer, home evangelism, community care, and supporting church mission projects.", 
    objectives: [ 
      "Promote missionary awareness and giving.", 
      "Build strong Christian homes and marriages.", 
      "Support vulnerable community members.", 
    ], 
    activities: [ 
      "WMU Annual Congress", 
      "Welfare Visitation", 
      "Mothers' Day Outreach", 
    ], 
  }, 
 
  { 
    id: "ra", 
    name: "Royal Ambassadors (RA)", 
    tag: "Boys & Young Men", 
    logo: raLogo, 
    icon: Shield, 
    motto: "Ambassadors for Christ", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc:  
      "Building discipline, spiritual vigor, missionawareness, and godly leadership among young boys andteenagers.", 
    objectives: [ 
      "Promote spiritual growth through scripture memorization.", 
      "Instill physical fitness and outdoor leadership skills.", 
      "Engage in community outreach and missionary work.", 
    ], 
    activities: [ 
      "Annual RA Camp", 
      "Parade & Sports", 
      "Evangelism Outreaches", 
    ], 
  }, 
 
  { 
    id: "lydia", 
    name: "Lydia Auxiliary", 
    tag: "Young Women", 
    logo: lydiaLogo, 
    icon: Heart, 
    motto: "Laborers together with God", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc: 
      "Empowering young single women through fellowship, Christian character, vocational skills, and active mission work.", 
    objectives: [ 
      "Foster Christian sisterhood and spiritual guidance.", 
      "Develop domestic and professional life skills.", 
      "Support local missions and church welfare.", 
    ], 
    activities: [ 
      "Lydia Week Celebration", 
      "Skills Workshops", 
      "Prayer Retreats", 
    ], 
  }, 
 
  { 
    id: "ga", 
    name: "Girls' Auxiliary (G.A.)", 
    tag: "Girls Ages 10â€“16", 
    logo: gaLogo, 
    icon: Heart, 
    motto: 
      "Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc: 
      "A Baptist girls' ministry that helps young girls grow in their relationship with Christ, develop Christian character, discover their gifts, and developa heart for missions and service.", 
    objectives: [ 
      "Develop a strong personal relationship with Jesus Christ.", 
      "Build Christian character through Bible study, prayer, and discipleship.", 
      "Develop missionary awareness and a heart for Christian service.", 
      "Prepare girls to become responsible Christianwomen and leaders.", 
    ], 
    activities: [ 
      "Bible Study", 
      "Mission Study", 
      "Prayer & Fellowship", 
      "Evangelism & Outreach", 
      "Leadership Development", 
    ], 
  }, 
 
  { 
    id: "sunbeam", 
    name: "Sunbeam Band", 
    tag: "Children Ages 4â€“9", 
    logo: sunbeamLogo, 
    icon: Sun, 
    motto: 
      "Let your light so shine before men, that theymay see your good works.", 
    schedule: "Tuesdays @ 5:00 PM", 
    desc: 
      "A children's ministry designed to introduce young boys and girls to the love of God through Bible teaching, prayer, missions, Christian service, and joyful fellowship.", 
    objectives: [ 
      "Help children develop a personal love for Godand His Word.", 
      "Teach children to pray and grow in Christian faith.", 
      "Introduce children to missions, generosity, and service.", 
      "Develop Christian character through age-appropriate activities.", 
    ], 
    activities: [ 
      "Bible Memory", 
      "Mission Study", 
      "Prayer", 
      "Bible Stories", 
      "Day Camps", 
      "Sunbeam Week", 
    ], 
  }, 
 
  { 
    id: "bsf", 
    name: "Baptist Student Fellowship (BSF)", 
    tag: "Students", 
    logo: bsfLogo, 
    icon: BookOpen, 
    motto: "Growing in Christ and serving with purpose", 
    schedule: "Saturdays @ 5:00 PM", 
    desc: 
      "A student-focused fellowship that helps youngpeople grow spiritually, build godly relationships, develop leadership skills, and remain committed to Christ while pursuing their education.", 
    objectives: [ 
      "Encourage students to grow in their relationship with Christ.", 
      "Provide a supportive Christian community for students.", 
      "Develop leadership, discipline, and service-mindedness.", 
      "Encourage students to share their faith with others.", 
    ], 
    activities: [ 
      "Bible Study", 
      "Prayer Meetings", 
      "Campus Outreach", 
      "Leadership Training", 
      "Christian Fellowship", 
    ], 
  }, 
 
  { 
    id: "youth", 
    name: "Youth Fellowship", 
    tag: "Young People", 
    logo: youthLogo, 
    icon: Music, 
    motto: "Remember now thy Creator in the days of thy youth", 
    schedule: "Wednesdays @ 5:00 PM", 
    desc: 
      "A vibrant community for young people to grow in Christ, discover their purpose, build godly relationships, develop their gifts, and serve God and the church.", 
    objectives: [ 
      "Help young people establish a strong Christian foundation.", 
      "Encourage purposeful and godly living.", 
      "Develop spiritual gifts, talents, and leadership abilities.", 
      "Engage young people in evangelism and community service.", 
    ], 
    activities: [ 
      "Youth Sunday", 
      "Bible Study", 
      "Prayer Meetings", 
      "Evangelism", 
      "Music & Creative Arts", 
      "Youth Conferences", 
    ], 
  }, 
]; 
 
// ============================================================ 
// RECENT SERMONS 
// ============================================================ 
export const RECENT_SERMONS = [
  {
    id: 1,
    title: "Walking in Divine Dominion",
    preacher: "Rev'd Dr. Matthew Ade' Eniola, JP",
    scripture: "Psalm 8:6",
    duration: "45 mins",
    date: "August 2026",
    youtubeUrl: "https://www.youtube.com/@OKEGBOHOBAPTISTCHURCH",
  },

  {
    id: 2,
    title: "The Power of the Cathedral of Mercy",
    preacher: "Rev'd Dr. Matthew Ade' Eniola, JP",
    scripture: "Hebrews 4:16",
    duration: "40 mins",
    date: "July 2026",
    youtubeUrl: "https://www.youtube.com/@OKEGBOHOBAPTISTCHURCH",
  },
]; 
 
// ============================================================ 
// GALLERY IMAGES 
// ============================================================ 
 
export const GALLERY_IMAGES = [ 
  gallery01, 
  gallery02, 
  gallery03, 
  gallery04, 
  gallery05, 
  gallery06, 
  gallery07, 
  gallery08, 
  gallery09, 
  gallery10, 
  gallery11, 
  gallery12, 
  gallery13, 
  gallery14, 
  gallery15, 
  gallery16, 
  gallery17, 
  gallery18, 
  gallery19, 
  gallery20, 
  gallery21, 
  gallery22, 
  gallery23, 
  gallery24, 
  gallery25, 
]; 
 
// ============================================================ 
// GALLERY ITEMS 
// ============================================================ 
 
export const GALLERY_ITEMS = GALLERY_IMAGES.map((image, index) => ({ 
  id: index + 1, 
  image, 
  title: `Okegboho Baptist Church Gallery ${index + 1}`, 
})); 