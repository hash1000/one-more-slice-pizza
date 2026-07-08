// Signature
import cheese from "../assets/images/menu/signature/cheese.png";
import pepperoni from "../assets/images/menu/signature/pepperoni.png";
import sausage from "../assets/images/menu/signature/sausauge.png";
import veggie from "../assets/images/menu/signature/veggie.png";
import meatLovers from "../assets/images/menu/signature/meat-lover.png";
import bbqChicken from "../assets/images/menu/signature/bbq-chicken.png";
import buffaloRanch from "../assets/images/menu/signature/buffalo-ranch.png";
import chickenSupreme from "../assets/images/menu/signature/chicken-supreme.png";

// Breakfast
import eggSausageCheese from "../assets/images/menu/breakfast/egg-n-sausage.png";
import eggBaconCheese from "../assets/images/menu/breakfast/egg-n-bacon.png";
import eggCheese from "../assets/images/menu/breakfast/egg-n-cheese.png";

// Sweet slices
import caramelApple from "../assets/images/menu/sweet-slices/caramel-apple-sweet-slice.png";
import chocolateBliss from "../assets/images/menu/sweet-slices/choco-bliss-weet-slice.png";
import churroSupreme from "../assets/images/menu/sweet-slices/churro-supreme-sweet-slice.png";

// Snacks
import garlicDippers from "../assets/images/menu/snacks/garlic-sticks.png";

export interface MenuItem {
  name: string;
  ingredients: string;
  image: string;
  alt: string;
  price: string;
  badge?: string;
}

export interface MenuCategoryData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  columns: 4 | 3;
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
      { name: "Cheese", ingredients: "Melty five-cheese blend on our signature sauce and golden crust.", image: cheese, alt: "Cheese pizza slice", price: "$X.XX" },
      { name: "Pepperoni", ingredients: "Loaded edge-to-edge with crispy pepperoni over melted five-cheese blend.", image: pepperoni, alt: "Pepperoni pizza slice", price: "$X.XX" },
      { name: "Sausage", ingredients: "Savory Italian sausage crumbles over rich sauce and melted cheese.", image: sausage, alt: "Sausage pizza slice", price: "$X.XX" },
      { name: "Veggie", ingredients: "Red onions, green bell peppers, and mushrooms over bubbling cheese.", image: veggie, alt: "Veggie pizza slice", price: "$X.XX" },
      { name: "Meat Lovers", ingredients: "Pepperoni, Italian sausage, and smoky bacon piled on melted five-cheese blend.", image: meatLovers, alt: "Meat Lovers pizza slice", price: "$X.XX" },
      { name: "BBQ Chicken", ingredients: "Grilled chicken and red onions on sweet & smoky BBQ sauce.", image: bbqChicken, alt: "BBQ Chicken pizza slice", price: "$X.XX" },
      { name: "Buffalo Ranch", ingredients: "Grilled chicken on spicy buffalo sauce, finished with a cool ranch drizzle.", image: buffaloRanch, alt: "Buffalo Ranch pizza slice", price: "$X.XX" },
      { name: "Chicken Supreme", ingredients: "Grilled chicken, mushrooms, bell peppers, and red onions on classic sauce.", image: chickenSupreme, alt: "Chicken Supreme pizza slice", price: "$X.XX" },
    ],
  },
  {
    id: "breakfast-pizza",
    tabLabel: "Breakfast Pizza",
    title: "Breakfast Pizza",
    subtitle: "A hearty start. In every slice.",
    columns: 4,
    items: [
      { name: "Egg & Cheese", ingredients: "Fluffy scrambled eggs over creamy cheddar sauce and five-cheese blend.", image: eggCheese, alt: "Egg and cheese breakfast pizza", price: "$X.XX" },
      { name: "Egg, Bacon & Cheese", ingredients: "Scrambled eggs and crispy bacon over creamy cheddar cheese sauce.", image: eggBaconCheese, alt: "Egg, bacon, and cheese breakfast pizza", price: "$X.XX" },
      { name: "Egg, Sausage & Cheese", ingredients: "Scrambled eggs and savory sausage crumbles over creamy cheddar sauce.", image: eggSausageCheese, alt: "Egg, sausage, and cheese breakfast pizza", price: "$X.XX" },
    ],
  },
  {
    id: "sweet-slices",
    tabLabel: "Sweet Slices",
    title: "Sweet Slices & Snacks",
    subtitle: "Dessert worth saving room for.",
    columns: 4,
    items: [
      { name: "Caramel Apple", ingredients: "Warm apple pie filling on cinnamon-sugar crust with cream cheese icing and caramel drizzle.", image: caramelApple, alt: "Caramel Apple sweet slice", price: "$X.XX" },
      { name: "Chocolate Bliss", ingredients: "Warm chocolate hazelnut spread with toasted marshmallows, chocolate chips, and powdered sugar.", image: chocolateBliss, alt: "Chocolate Bliss sweet slice", price: "$X.XX" },
      { name: "Churro Supreme", ingredients: "Caramelized cinnamon-sugar crust drizzled with cream cheese icing and caramel.", image: churroSupreme, alt: "Churro Supreme sweet slice", price: "$X.XX" },
      { name: "Cheesy Garlic Dippers", ingredients: "Golden-baked cheesy garlic crust cut into 12 dippers, served with dipping sauce.", image: garlicDippers, alt: "Cheesy Garlic Dippers", price: "$X.XX", badge: "SNACK" },
    ],
  },
];
