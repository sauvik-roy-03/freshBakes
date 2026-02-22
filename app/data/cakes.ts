import { StaticImageData } from "next/image";
import blackFudge from '@/app/assets/images/black-fudge.jpg'
import christmasCake from '@/app/assets/images/christmas-cake.jpeg'
import butterscotchCake from '@/app/assets/images/butterscotch.jpg'
import blackForest from '@/app/assets/images/black-forest.jpeg'
import cricketCake from '@/app/assets/images/cricket-cake.jpeg'
import heartShaped from '@/app/assets/images/heartShaped.jpeg'
export interface Cake{
    id:string;
    name:string;
    description:string;
    price:number;
    imageURL:StaticImageData;
}

export const cakeDetails:Cake[]=[
    {
    id: "1",
    name: "Crimson Heart Red Velvet",
    description: "Heart-shaped velvet sponge layered with tangy cream cheese frosting and dusted with fine cocoa.",
    price: 470,
    imageURL: heartShaped
},

  
    {
    id: "2",
    name: "Christmas Cake",
    description: "Rich chocolate sponge layered with festive peppermint cream and topped with holiday decorations.",
    price: 420,
    imageURL: christmasCake
},
{
    id: "3",
    name: "Butterscotch Delight",
    description: "Fluffy vanilla sponge layered with crunchy butterscotch and caramel glaze.",
    price: 450,
    imageURL: butterscotchCake
},
{
    id: "4",
    name: "Black Forest Classic",
    description: "Chocolate sponge layered with whipped cream and juicy cherries.",
    price: 500,
    imageURL: blackForest
},
{
    id: "5",
    name: "Cricket-Themed Chocolate Cake",
    description: "Rich chocolate sponge layered with smooth ganache and topped with handcrafted cricket-themed accents.",
    price: 470,
    imageURL: cricketCake
}
,  {
        id:"6",
        name:"Chocolate Fudge Cake",
        description:"Rich and decadent chocolate cake layered with creamy fudge frosting.",
        price:480,
        imageURL:blackFudge
    }
    
    
]