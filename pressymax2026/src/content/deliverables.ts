export interface Article {
  id: string;
  title: string;
  agency: string;
  content: string;
  deck: string;
}

export const articles: Article[] = [
   {
    id: "agency1",
    title: "Cheng Jie is peak",
    agency:"whatever",
    content: "line break test <br/> This is a paragraph. <br/> <strong>This is bold text.</strong> Thank god this works",
    deck: "cjspeaknow is a cool boss who is very chill and awesome.",
  },
  {
    id: "agency2",
    title: "Cheng Jie is also peak",
    agency:"CNA",
    content: "line break test <br/> This is a paragraph. <br/> <strong>This is bold text.</strong> Thank god this works",
    deck: "cjspeaknow is a cool boss who is very chill and awesome.",
  },
  
];