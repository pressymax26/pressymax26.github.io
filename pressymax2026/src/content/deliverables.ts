export interface Article {
  id: string;
  title: string;
  agency: string;
  agencyLogo?: string;
  articleThumbnail?:string;
  content: string;
  deck: string;
};

export interface Podcast {
  id: string;
  title: string;
  agency: string;
  content: string;
};

export interface sussArticle {
  id: string;
  title: string;
  content: string;
  deck?: string;
  articleThumbnail?: string;
}

export const sussArticles: sussArticle[] = [
  {
    id: "on-j*bs",
    title: "On J*bs - Still trying to SUSS out your career path?",
    deck: "By Yeoh Tian Huai and Leslie Tan",
    content: `<p>Even though employment may not be high (or even present) on most teenagers’ list of priorities, it’s always good to know your choices. Scrolling through the list of full-time Undergraduate programmes under the Singapore University of Social Sciences (SUSS), we were somewhat bewildered upon reading some of their titles. Bachelor of Public Safety and Security? Bachelor of Science in Supply Chain Management? What is a Bachelor’s Degree in Human Resource Management about?</p>

<p>Well, these programmes all seem to be part of SUSS’s unique mission, which aims to provide an applied education for both fresh school leavers and adult learners in the social sciences. Thus, it provides programmes that may be seen as intriguing, especially if you claim to be undertaking its unique undergraduate programmes at a family gathering. Its focus on applied learning provides a distinctive advantage in today’s society, where prior experience for fresh graduates is steadily becoming the norm. Therefore, let us explore some of the niche and fulfilling careers that SUSS Undergraduate degrees open up in this article!</p>

<h2>Bachelor of Science in Supply Chain Management</h2>

<p>As delegates from the ASEAN Maritime Forum and the ASEAN Council on Petroleum and Fuel might know, Singapore, and ASEAN as a whole, are becoming key locations for manufacturing and supply chain management activities. The BSc in Supply Chain Management aims to equip students with the skillsets needed to leverage this advantage in the global supply chain.</p>

<p>A glance at the curriculum of this degree will reveal that it consists of studying about 5 separate functions in-depth, each key to a successful supply chain:</p>

<ol>
  <li>Supply Chain Planning</li>
  <li>Sourcing and Procurement</li>
  <li>Manufacturing and Operations</li>
  <li>Distribution and Logistics</li>
  <li>Supply Chain Enablers</li>
</ol>

<p>In addition to learning journeys through collaborations with local and international partners, students can also choose to specialise in different aspects of Supply Chain Management with an extra Minor. This includes:</p>

<ol>
  <li>Aviation Management</li>
  <li>International Trade Management</li>
  <li>Maritime Management</li>
  <li>Procurement Management</li>
</ol>

<p>As many of you can tell, this opens up many career paths, especially catered to Singapore’s role as a global trading hub. Apart from being able to go all-in on any one of the 5 key functions of supply chain management and come out as an expert irreplaceable in their field, students will be able to further hone their skills in particular aspects of management. Whether it be developing air freight and maritime networks, or even navigating international law to optimise cross-border operations, students will be guaranteed to graduate with highly-specialised and irreplaceable skillsets.</p>

<p>Overall, this course provides students with the ability to effectively adapt in the overlooked yet crucial supply chain industry. Through gaining industry knowledge, students can expect interesting careers as supply chain data analysts, freight executives, or even production planners. Thus, this ensures that students will be able to excel and uphold Singapore and Southeast Asia’s status as a lucrative region for global trade!</p>

<h2>Bachelor of Public Safety and Security</h2>

<p>“Public Safety and Security” may seem like just another buzzword consistently restated by various government agencies in their missions and outreach attempts – surprising considering the breadth of application and paramount importance this field plays in our society. Amidst a rapidly changing world order where uncertainty is not just expected but also normalised, governments and businesses require specialists who can tackle the looming threats of cyberattacks, terrorism, industrial espionage, and other key hazards.</p>

<p>This degree provides structured instruction balanced between practical application and theoretical knowledge, focusing on the areas of policing, emergency management, investigations and rehabilitation among other specialties.</p>

<p>Some interesting modules of note include the following:</p>

<ol>
  <li>Introduction to the Singapore Legal System</li>
  <li>Countering Violent Extremism in Southeast Asia</li>
  <li>Psychological Perspective to Public Safety</li>
  <li>Cybersecurity and Digital Transformation</li>
  <li>Research Methods for the Social and Behavioural Sciences</li>
</ol>

<p>The smorgasbord of modules showcases the diversity present in this degree, meant to develop students into strong, well-rounded professionals who are able to effectively handle various threats upon graduation.</p>

<p>Moreover, students are also able to pursue Public Safety and Security with both minors and a second major from other programs, further expanding their horizons to more fields where they may apply their knowledge from PSS. Interestingly, the aforementioned Supply Chain Management is a potential second major for PSS students, exemplifying the versatility of this degree and its potential applications in multiple other fields.</p>

<h2>Bachelor of Human Resource Management (HRM)</h2>

<p>Looking beyond the term “Human Resource” (HR), you’ll find a fulfilling degree that is one-of-a-kind in Singapore, being our country’s first full-time bachelor's degree in HRM. Students should expect a mix of practical experiences and theoretical knowledge (sound familiar?), alongside a 24-week work attachment and an overseas engagement.</p>

<p>The interdisciplinary approach the HRM curriculum takes has resulted in a variety of rigorous modules crafted to produce a comprehensive education for students:</p>

<ul>
  <li>Talent Management</li>
  <li>Training and Development</li>
  <li>Employment Law and Industrial Relations</li>
  <li>Performance Management</li>
  <li>Workforce Planning</li>
</ul>

<p>These modules provide knowledge and skills to navigate each aspect of HRM, from hiring, to employee retention, to ensuring their satisfaction with their work. Such an education gives students the confidence to handle HR roles across different niches, providing a strong start in their HR career. Another advantage that this degree provides is the exemption from certain components in the IHRP-CA certification, which kickstarts one’s career from the get-go.</p>

<p>Our founding fathers once understood the reality us Singaporeans face: we are a land-scarce country with practically zero natural resources. Their leadership produced an education system that churned out quality human capital at an astounding rate, the only resource that we could offer. Now, as Singapore consolidates its position as a leading finance and business hub, especially in Asia, the management of these resources has proven to be imperative. Enhancing employee experience, rewarding them for their work, and ensuring each and every individual cares for the company is no mean feat, but it is of utmost importance for a successful business. HRM is the key to unlocking the potential of each employee, and in turn the firm, exemplifying this degree’s crucial role in our society.</p>

<p>After reading this article, we are sure that delegates still have many questions lingering in their mind about what SUSS has to offer. Hence, we strongly encourage everyone to continue reading up about the young university’s various programmes – not just their undergraduate programmes, but also their graduate programmes. Remember, stay curious!</p>`,
    articleThumbnail: "/suss-jobs.png",
  },
  {
    id: "yummers",
    title: "Motion To Set The Agenda – On Where To Have Committee Dinner",
    deck: "By Olivia Yeoh and Lin Yi",
    articleThumbnail:"/pplEating.jpeg",
    content:`
    <p>With the concluding bang of the gavel at the end of the day’s final Committee Session, what motion to propose next is no longer the question. Rather, you are now faced with an arguably trickier problem: where will you eat for Committee dinner? If you are exhausted after a day of mentally strenuous Committee debate and refuse to rack your brains about your Committee dinner venue, this article is for you!</p>
    <h2>Options in SUSS' Backyard</h2>
    <p>Fortunately, the Singapore University of Social Sciences (SUSS), Singapore Institute of Management (SIM) and Ngee Ann Polytechnic (NP) are rich in their food options. Collectively, the three schools boast a whopping total of 5 food courts, with a plethora of cuisines available. Their names, locations and opening hours (accurate as of time of writing) have been compiled in the following table:</p>
    <table style={{width:'100%'}}>
      <thead>
        <tr>
          <th>Food Court</th>
          <th>Location</th>
          <th>Opening Hours (Weekdays)</th>
          </tr>
          </thead>
          <tr>
          <td> FoodClique </td>
          <td> SUSS/SIM (Blk A, Level 3)</td>
          <td> 7:30am - 8:00pm </td></tr>
          <tr><td> Food Gallery </td>
          <td> SUSS/SIM (Blk A, Level 3)</td>
          <td> 7:30am - 8:00pm </td></tr>
          <tr><td> Food Fest </td>
          <td> SUSS/SIM (Blk B, Level 1)</td>
          <td> 7:30am - 8:00pm </td></tr>
          <tr><td> Munch </td>
          <td> NP (Block 73)</td>
          <td> 7:30am - 7:00pm </td></tr>
          <tr><td> Makan Place </td>
          <td> NP (Block 51)</td>
          <td> 7:30am - 7:00pm </td></tr>
          </table>
          <p>The Editors’ personal favourite is the Taiwan Ichiban stall at Foodclique, SUSS. Its offerings are primarily centered around Taiwanese crispy fried chicken, the hallmark of Taiwan’s street food culture. The lacy batter of the flattened chicken cutlets coupled with the fluffy grains of rice creates a satisfying bite, and the slight sweetness of the rice melds harmoniously together with the savouriness of the well-seasoned chicken. If you fancy a drink to wash that down, Food Fest (which is just next to Foodclique) sells what the Press Editors claim to be ‘the best Milo we have ever tasted’. If your stomach is grumbling just after reading that, fret not, Food Clique and Food Fest are a mere stone’s throw away from your Committee venues! </p>

          <img src="/taiwan-ichiban.png" width="100%"></img>
          <p><strong>Pictured:</strong> Just some of Taiwan Ichiban's Offerings</p>
          <p>Note: If you require some guidance with navigating NP, you may refer to the NP campus map in the Appendix below! </p>

          <h2>It Would'nt be YMAX Without ASEAN </h2>
          <p>If you’d like to showcase your love for ASEAN and its cultural diversity, what better way is there than to explore its cuisine? Our recommendations for establishments serving food from the ASEAN Member States (or rather, most of them) are compiled in the table below. Unfortunately, we were unable to find places selling Bruneian and Laotian food.</p>
          <table border='1'  style={{max-width:"80%"}}>
    <thead>
        <tr>
            <th>Country</th>
            <th>Establishment Name</th>
            <th>Address</th>
            <th>Distance from SUSS</th>
            <th>Opening Hours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Malaysia/<br/>Singapore</td>
            <td style={{width:"20%"}}>Springleaf Prata</td>
            <td style={{width:"50%"}}>The Rail Mall, 396 Upper Bukit Timah Road, Singapore 678048</td>
            <td>16 minute journey via bus</td>
            <td>8am to 11pm</td>
        </tr>
        <tr>
            <td>Myanmar</td>
            <td style={{width:"20%"}}>Little Myanmar</td>
            <td style={{width:"50%"}}>328 Clementi Avenue 2, #01-220, Singapore 120328</td>
            <td>20 minute journey via bus</td>
            <td>9am to 8:30pm</td>
        </tr>
        <tr>
            <td>Thailand</td>
            <td style={{width:"20%"}}>Time for Thai</td>
            <td style={{width:"50%"}}>15 Cheong Chin Nam Road, Singapore 599739</td>
            <td>10 minute journey via bus</td>
            <td>11am to 1am</td>
        </tr>
        <tr>
            <td>Vietnam</td>
            <td style={{width:"20%"}}>So Pho</td>
            <td style={{width:"50%"}}>Clementi Mall, 3155 Commonwealth Ave W, #04-34, Singapore 129588</td>
            <td>15 minute journey via bus</td>
            <td>11am to 10pm</td>
        </tr>
        <tr>
            <td>Indonesia</td>
            <td style={{width:"20%"}}>Padang Express</td>
            <td>NP Munch</td>
            <td>10 minute walk</td>
            <td>See above</td>
        </tr>
        <tr>
            <td>Philippines</td>
            <td style={{width:"20%"}}>JT’s Manukan Grille</td>
            <td>IMM Building, Jurong East Street 21, #3F, Makan Street, Singapore 609601</td>
            <td>30 minute journey via bus</td>
            <td>10am to 9pm</td>
        </tr>
    </tbody>
</table>
<p>While Singaporeans and Malaysians may be perennially feuding over whether Malaysian or Singaporean cuisine is superior, many on both sides can agree that Roti Prata/Canai is a childhood favourite. The chewiness of the dough, juxtaposed with the crispiness of the edges and the subtle spice of the accompanying curry, makes Roti Prata/Canai well loved by many. No doubt, after a day of heated discussions with your Committee members, relishing Roti Prata/Canai together would be a soul-warming reward.</p>
<img src="springleaf.png" width="100%"></img>
<p><strong>Pictured:</strong> Springleaf's iconic Roti Prata</p>
<p>YMAX is not just a platform for discussing political, social and economic issues; it is also a chance to expand our horizons. Whether or not you have experienced the heartiness of a bowl of phở (Vietnamese rice noodles) or the flavours of Indonesian Nasi Padang exploding in your mouth, perhaps YMAX can be an opportunity for you to explore new cuisines!</p>
<h2>Beyond Campus Grounds: Hidden-Eats Near SUSS </h2>
<p>For delegates wishing to explore beyond the usual campus fare and delve into a vibrant and lively dining experience with new-found friends, Cha Cha Cha Mexican Restaurant offers you exactly that. Just a 17-minute bus ride away, Singapore’s oldest Mexican establishment in Holland Village serves up Mexican staples such as cheesy quesadillas, crunchy tacos, and sizzling fajitas, that are sure to satisfy even the most famished delegate. Whether you are unwinding after a long day of debate, or getting to know your fellow delegates over a spirited dinner, Cha Cha Cha provides the perfect, flavourful setting for your ‘unmoderated caucus’.</p>
<p>Address: 32 Lor Mambong, Singapore 277690 </p>
<img src="/chimi-changa.png" width="100%"></img>
<p><strong>Pictured:</strong> Cross section of pulled pork Chimi Changa </p>
<p>Hmm… but what is a complete dinner without a sweet treat to conclude the evening? If your committee is in the mood for a hearty dessert, Hundred Acre Creamery is a delightful option tucked away in the tranquil enclave of Sunset Way. Specialised in artisanal gelato and waffles, this cosy dessert spot is ideal for delegates looking to indulge after a long day of negotiations.</p>

<p>Address: 109 Clementi Street 11, #01-37, Singapore 120109 </p>

<img src="/Waffle.png" width="100%"></img>
<p><strong>Pictured:</strong> Coconut Pandan Waffle with Chrysanthemum Honey gelato & Ispahan Sorbet (rose, lychee, raspberry) (Bottom), Coco Affogato (Top-left), and Vietnamese Egg Coffee (Top-right)</p>
<p>If you’re craving steaming, hot dishes that feel like the rich, comforting taste of home-cooked food, the Editors have got you covered. After a day of mental exertion, what some might need are fragrant, flavour-packed options. While they can’t give you a BD (Best Delegate), Baan Chadar Thai Cuisine can provide a different BD (Beautiful Dishes). Offering a wide array of Thai classics such as Tom Yum soup, Pad Thai, Moo Ping, and green curry, the restaurant delivers a balance of sweet, sour, spicy and savoury flavours. Whether dining in a small group or as a full committee, Baan Chadar offers a warm, convivial setting to ‘lobby’ with your fellow delegates, away from your cold seminar rooms. </p>

<p>Address: 1 Jalan Anak Bukit, #01-09 Bukit Timah Plaza, Singapore 588996 </p>
<img src="assortedFoods.png" width="100%"></img>
<p><strong>Pictured:</strong> Pictured: Grilled Pork (Top-left), Thai Pork Omelette (Centre-left), Crispy Seabass with Tamarind Sauce (Centre-right), Thai Bandung Iced (Bottom-left), Pad Thai (Bottom-right)</p>

<p>If the above options still do not cater to your cravings, the Editors have compiled even more dining recommendations below! 
</p>

<strong>Beauty World</strong>
<table border="1" cellspacing="0" cellpadding="5" style={{width:'100%'}}>
    <thead>
        <tr>
            <th>Establishment Name</th>
            <th>Address</th>
            <th>Distance from SUSS</th>
            <th>Opening Hours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Beauty World Food Centre</td>
            <td>144 Upper Bukit Timah Rd, Level 4, Singapore 588177</td>
            <td>11 minute journey via bus</td>
            <td>7am to 9pm</td>
        </tr>
        <tr>
            <td>DING TE LE Shanghai Panfried Dumplings</td>
            <td>6 Cheong Chin Nam Rd, Singapore 599731</td>
            <td>8 minute journey via bus</td>
            <td>11am to 12:15am</td>
        </tr>
        <tr>
            <td>Al-Azhar Restaurant</td>
            <td>11 Cheong Chin Nam Rd, Singapore 599736</td>
            <td>9 minute journey via bus</td>
            <td>7am to 3am</td>
        </tr>
        <tr>
            <td>Time for Thai</td>
            <td>15 Cheong Chin Nam Rd, Singapore 599739</td>
            <td>9 minute journey via bus</td>
            <td>11am to 1am</td>
        </tr>
        <tr>
            <td>CJ Malatang</td>
            <td>21 Cheong Chin Nam Rd, Singapore 599745</td>
            <td>8 minute journey via bus</td>
            <td>11:30am to 2am</td>
        </tr>
    </tbody>
</table>
<strong>King Albert Park</strong>
<table border="1" cellspacing="0" cellpadding="5" style={{width:'100%'}}>
    <thead>
        <tr>
            <th>Establishment Name</th>
            <th>Address</th>
            <th>Distance from SUSS</th>
            <th>Opening Hours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Yeast Side</td>
            <td>9 King Albert Park, #01-09, Singapore 598332</td>
            <td>10 minute journey via bus</td>
            <td>11am to 11pm</td>
        </tr>
        <tr>
            <td>Chirashizushi Shou</td>
            <td>1 Jalan Anak Bukit, Bukit Timah Plaza, #B1-60, Singapore 588996</td>
            <td>10 minute journey via bus</td>
            <td>12pm to 3pm<br>5:30pm to 12am<br>Closed on Mondays</td>
        </tr>
        <tr>
            <td>EagleWingsLoft</td>
            <td>9 King Albert Park, #01-33/34/56/57, KAP Residences Mall, Singapore 598332</td>
            <td>10 minute journey via bus</td>
            <td>10am to 10pm</td>
        </tr>
    </tbody>
</table>

<strong>Dessert Options</strong>
<table border="1" cellspacing="0" cellpadding="5" style={{width:'100%'}}>
    <thead>
        <tr>
            <th>Establishment Name</th>
            <th>Address</th>
            <th>Distance from SUSS</th>
            <th>Opening Hours</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>i’m acai</td>
            <td>6 Clementi Rd, #01-02, Singapore 129741</td>
            <td>22 minute journey via bus</td>
            <td>12:30pm to 12am<br>Closed on Tuesdays</td>
        </tr>
        <tr>
            <td>AcaiGuru</td>
            <td>9 King Albert Park, #01-55, KAP Residences Mall, Singapore 598332</td>
            <td>11 minute journey via bus</td>
            <td>11:30am to 10pm</td>
        </tr>
        <tr>
            <td>Waffle Town</td>
            <td>1 West Coast Drive, #01-106, NEWest, Singapore 128020</td>
            <td>22 minute journey via bus</td>
            <td>11am to 10pm</td>
        </tr>
        <tr>
            <td>Yo-Chi</td>
            <td>1 Vista Exchange Green, B1-12, Singapore 138617</td>
            <td>25 minute journey via bus</td>
            <td>10am to 10pm</td>
        </tr>
    </tbody>
</table>

<p>Though Model UN/Model ASEAN conferences are certainly spaces to hone your public speaking, writing and negotiation skills, they are also wonderful spaces to form connections that could last beyond the conference. Whether you decide to try new cuisines, or indulge in the comforts of familiar foods, we hope that your Committee dinners will see the dawn of new friendships filled with warmth, laughter, and joy. After all, as the adage goes, breaking bread together unites the heart. Hopefully, even after debate in the Committee room is suspended, your unmoderated caucuses outside the Committee room can help you learn about each other – not as delegations, but also as people.   </p>
   
<h2> Appendix A </h2>
<img src="/np-map.png" width="100%"></img>
`
  }
];

export const articles: Article[] = [
  //{id:"agency-articleNO", title:"Title", agency:"Agency", content:`aticle stuff`}

]

export const podcasts: Podcast[] = [

]

// export const podcasts: Podcast[] = [
//   {
//     id:"tass-podcast1",
//     title:"Classical Music",
//     agency:"TASS",
//     content:"/01.Overture.mp3"
//   },
//   {
//     id:"xinhua-podcast1",
//     title:"Music",
//     agency:"Xinhua News Agency",
//     content:"/yellowRiver.mp3"
//   }

// ]