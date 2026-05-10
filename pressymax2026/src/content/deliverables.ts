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

export const articles: Article[] = [
   {
    id: "ap-article1",
    title: "Fossil Fuels are bad",
    articleThumbnail:"/fossilFuels.jpg",
    agency:"Associated Press",
    content: "line break test <br/> This is a paragraph. <br/> <strong>This is bold text.</strong> Thank god this works",
    deck: "Yes yes fossil fuels are bad for the environment.",
  },
  {
    id: "guardian-article1",
    title: "UNCHR",
    agency:"The Guardian",
    articleThumbnail:"/refugeeUNHCRexample.jpg",
    content:"In 2022 alone, a whopping 108.4 million people were displaced from their homes, and forced to seek refuge from the vices of conflict and human rights violations. As the world bears witness to this staggering influx of refugees, the plight of the refugees demands immediate attention. However, besides threats faced in their origin countries, these individuals find themselves navigating through a series of challenges upon arriving at host countries. These challenges not only threaten their welfare, but also the success of their integration into society. <br/>The UNHCR has long remained at the forefront of rendering assistance to refugees, providing access to essential services like healthcare, education, and social support. Top contributors to funding for refugee protection include the United States, Germany, and Japan. Despite receiving monetary aid, refugees continue to grapple with a multitude of challenges, such as a lack of legal representation and understanding, leaving them vulnerable to detention and deportation. Financial constraints also worsen their struggle to rebuild their future as they heavily rely on basic humanitarian aid. Language barriers further pile on to these hurdles, hindering effective communication and leaving refugees susceptible to discrimination. In places such as Iran, Afghan refugees have faced physical abuse from the authorities and even civilians. <br/> However, a harrowing reality is that the abuse refugees face extends beyond physical abuse, into sexual exploitation and abuse, as seen by how Syrian refugees have suffered from sexual assault in the process of seeking refuge in Ethiopia and some European countries. Furthermore, in times of desperation, vulnerable refugees resort to unimaginable measures such as prostitution when humanitarian aid provided is insufficient. This is concerning as the exploitation is perpetrated by humanitarian workers entrusted with the protection of refugees. Even schools, which are meant to be sanctuaries of education, have become breeding grounds for exploitation. Children have been forced to provide sexual services in refugee camp schools for passing grades from teachers, posing a grave threat to their well-being and dignity. <br/> With a lack of accountability and the impunity of perpetrators, the exploitation of refugees flourishes in plain sight. In countries such as Libya, ongoing conflict and laws with weak enforcement allow perpetrators of refugee exploitation, such as smugglers, traffickers, and the military, to get away scot-free. Authorities have turned a blind eye to the suffering of the most vulnerable in spite of the chilling brutality. Without concrete plans for the protection and integration of refugees, their predicament will only get more dire, leaving them trapped in a vicious cycle of panic and uncertainty. <br/> Amidst this dire situation, international cooperation offers a glimmer of hope for refugees. The UNHCR’s Comprehensive Refugee Response Framework (CRRF) stresses upon the need for collective action to tackle refugee protection. Host countries are unable to shoulder the burden of harbouring refugees on their own, and it is incumbent that the international community extends support, resources, and resettlement opportunities to benefit refugees. Additionally, integration of refugees will require inclusive policies to foster diversity and social cohesion for the displaced individuals who seek acceptance and belonging. The path to successful protection and integration of refugees will require empathy and respect for human rights, calling for justice and solidarity.",
    deck: "Written by Ng Cheng Jie"
  },
  {
    id: "cna-article1",
    title: "Cheng Jie is also peak",
    agency:"CNA",
    content: "line break test <br/> This is a paragraph. <br/> <strong>This is bold text.</strong> Thank god this works",
    deck: "Corroborated with another article you may have seen.",
  },
  {
    id: "guardian-article2",
    title: "PSA by the Guardian",
    agency:"The Guardian",
    content:"The Guardian is not the Guardian pharmaceutical company. <br/> Rather, it is a news agency",
    deck: "Very important info about the Guardian."
  },
];

export const podcasts: Podcast[] = [
  {
    id:"tass-podcast1",
    title:"Classical Music",
    agency:"TASS",
    content:"/01.Overture.mp3"
  },
  {
    id:"xinhua-podcast1",
    title:"Music",
    agency:"Xinhua News Agency",
    content:"/yellowRiver.mp3"
  }

]