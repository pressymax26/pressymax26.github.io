export interface Article {
  id: string;
  title: string;
  content: string;
  deck: string;
}

export const articles: Article[] = [
   {
    id: "1",
    title: "Cheng Jie is peak",
    content: "line break test <br/> This is a paragraph. <br/> <strong>This is bold text.</strong> Thank god this works",
    deck: "cjspeaknow is a cool boss who is very chill and awesome.",
  },
  
];