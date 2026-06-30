import cheese from "../assets/images/Cheesy Pizza.png";
import pepperoni from "../assets/images/Pepperoni Pizza.png";
import sausage from "../assets/images/Sausage Pizza.png";
import veggie from "../assets/images/Veggie Pizza Single Slice.png";
import meatLovers from "../assets/images/Meat Lover Pizza.png";
import bbqChicken from "../assets/images/BBQ Chicken.png";
import buffaloChicken from "../assets/images/Buffalo chicken .png";
import chickenSupreme from "../assets/images/Chicken supreme.png";
import eggSausageCheese from "../assets/images/Egg n Sausage Pizza.png";
import eggBaconCheese from "../assets/images/Egg n Bacons Pizza.png";
import eggCheese from "../assets/images/Egg n Cheese Pizza.png";
import caramelApple from "../assets/images/Caramel Apple Sweet Slice Pizza.jpeg";
import chocolateBliss from "../assets/images/Chocolate Bliss Sweet Slice Pizza.jpeg";
import churroSupreme from "../assets/images/Churro Supreme Sweet Slice .jpeg";
import garlicSticks from "../assets/images/Cheesy garlic sticks.png";

export interface MenuItem {
  name: string;
  ingredients: string;
  image: string;
  alt: string;
}

export interface MenuCategoryData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  columns: 4 | 3 | 1;
  items: MenuItem[];
}

export const menuCategories: MenuCategoryData[] = [
  {
    id: "signature-pizzas",
    tabLabel: "Signature Pizzas",
    title: "Signature Pizzas",
    subtitle: "The classics. Made the right way.",
    columns: 4,
    items: [
      {
        name: "Cheese",
        ingredients: "Pizza crust, pizza sauce, cheese",
        image: cheese,
        alt: "Cheese pizza slice",
      },
      {
        name: "Pepperoni",
        ingredients: "Pizza crust, pizza sauce, cheese, pepperoni",
        image: pepperoni,
        alt: "Pepperoni pizza slice",
      },
      {
        name: "Sausage",
        ingredients: "Pizza crust, pizza sauce, cheese, sausage",
        image: sausage,
        alt: "Sausage pizza slice",
      },
      {
        name: "Veggie",
        ingredients: "Pizza crust, pizza sauce, cheese, bell pepper, onion, mushrooms",
        image: veggie,
        alt: "Veggie pizza slice with bell pepper, onion, and mushrooms",
      },
      {
        name: "Meat Lovers",
        ingredients: "Pizza crust, pizza sauce, cheese, sausage, pepperoni, beef",
        image: meatLovers,
        alt: "Meat Lovers pizza slice",
      },
      {
        name: "BBQ Chicken",
        ingredients: "Pizza crust, BBQ sauce, cheese, grilled chicken, red onion",
        image: bbqChicken,
        alt: "BBQ Chicken pizza slice",
      },
      {
        name: "Buffalo Chicken",
        ingredients: "Pizza crust, buffalo sauce, cheese, grilled chicken, ranch drizzle",
        image: buffaloChicken,
        alt: "Buffalo Chicken pizza slice",
      },
      {
        name: "Chicken Supreme",
        ingredients: "Pizza crust, pizza sauce, cheese, grilled chicken, bell pepper, onion, mushrooms",
        image: chickenSupreme,
        alt: "Chicken Supreme pizza slice",
      },
    ],
  },
  {
    id: "breakfast-pizza",
    tabLabel: "Breakfast Pizza",
    title: "Breakfast Pizza",
    subtitle: "A hearty start. In every slice.",
    columns: 3,
    items: [
      {
        name: "Egg, Sausage & Cheese",
        ingredients: "Pizza crust, cheese sauce, eggs, sausage",
        image: eggSausageCheese,
        alt: "Egg, sausage, and cheese breakfast pizza slice",
      },
      {
        name: "Egg, Bacon & Cheese",
        ingredients: "Pizza crust, cheese sauce, eggs, bacon",
        image: eggBaconCheese,
        alt: "Egg, bacon, and cheese breakfast pizza slice",
      },
      {
        name: "Egg & Cheese",
        ingredients: "Pizza crust, cheese sauce, eggs",
        image: eggCheese,
        alt: "Egg and cheese breakfast pizza slice",
      },
    ],
  },
  {
    id: "sweet-slices",
    tabLabel: "Sweet Slices",
    title: "Sweet Slices",
    subtitle: "Dessert worth saving room for.",
    columns: 3,
    items: [
      {
        name: "Caramel Apple",
        ingredients: "Sweet apples, caramel drizzle, crumb topping",
        image: caramelApple,
        alt: "Caramel Apple sweet slice pizza",
      },
      {
        name: "Chocolate Bliss",
        ingredients: "Rich chocolate, marshmallows, chocolate drizzle",
        image: chocolateBliss,
        alt: "Chocolate Bliss sweet slice pizza",
      },
      {
        name: "Churro Supreme",
        ingredients: "Cinnamon sugar, caramel drizzle, sweet icing",
        image: churroSupreme,
        alt: "Churro Supreme sweet slice pizza",
      },
    ],
  },
  {
    id: "snacks",
    tabLabel: "Snacks",
    title: "Snacks",
    subtitle: "Perfect on the side.",
    columns: 1,
    items: [
      {
        name: "Cheesy Garlic Sticks",
        ingredients: "Warm, cheesy, garlicky perfection.",
        image: garlicSticks,
        alt: "Cheesy Garlic Sticks",
      },
    ],
  },
];
