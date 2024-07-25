import logo from "../../src/18157366.jpg";
import rating from "../assets/rating.png";
import add from "../assets/icons8-add-50.png";
import minus from "../assets/icons8-minus-50.png";
import footerLogo from "../assets/food-delivery.png";
import userIcon from "../assets/user.png";
import orderIcon from "../assets/orderbox.png";

const set={
    logo,
    rating,
    add,
    minus,
    footerLogo,
    userIcon,
    orderIcon,
}
const menu_list=[
    {menu_name:"Pasta",
      menu_image:"https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=900&t=st=1715929570~exp=1715930170~hmac=968117b09d074f0cd1a852790ef010310596b93997a3f97379fc30b5d8f41c8d"  
    },
    {menu_name:" Momos",
    menu_image:"https://img.freepik.com/premium-photo/nepali-steamed-dumplings-momo-with-sause_1472-73844.jpg?w=900"  
  },
  {menu_name:" Pizza",
    menu_image:"https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1715929836~exp=1715930436~hmac=9d4c0d785e1b342eabcc9abf4e62f01536023acd7b993056efd914a99a039388"  
  },
  {menu_name:"PanCake",
  menu_image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
},
{menu_name:"Seafood",
menu_image:"https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"  
},

{menu_name:"Fried pottatos",
menu_image:"https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
},

{menu_name:"Chicken",
menu_image:"https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  
},
];
const food_list=[
{
  _id:"1",
  name:"macaroni",
  image:"https://sancarlo.co.uk/app/uploads/2019/12/macaroni-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pasta",
  price:"120"
},
{
  _id:"2",
  name:"Rigatoni",
  image:"https://sancarlo.co.uk/app/uploads/2019/12/farfalle.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pasta",
  price:"150"
},
{
  _id:"3",
  name:"Penne",
  image:"https://sancarlo.co.uk/app/uploads/2019/12/lasagne.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pasta",
  price:"200"
},
{
  _id:"4",
  name:"Spagetti",
  image:"https://www.archanaskitchen.com/images/archanaskitchen/10-Brands/DelMonte-KidsRecipes/Spaghetti_Pasta_Recipe_In_Creamy_Tomato_Sauce_-_Kids_Recipes_Made_With_Del_Monte-3.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pasta",
  price:"120"
},
{
  _id:"5",
  name:"Lasange",
  image:"https://media.istockphoto.com/id/543663322/photo/meat-lasagna.jpg?s=612x612&w=0&k=20&c=nYLF1yuCTxIMwQ0JjnAT3_fd7ZqsAds1RO4FOinimZ4=",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pasta",
  price:"120"
},
{
  _id:"6",
  name:"Steamed momo",
  image:"https://www.thespruceeats.com/thmb/T_R22QniykdQ9aPCLKIk-O22Gh4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"7",
  name:"Kothey momo",
  image:"https://kathmandumomo.com.au/wp-content/uploads/2020/03/KathMoMoHouseAndBar_KotheyMoMoChickenDumplings.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"8",
  name:"Chilly momo",
  image:"https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2023/03/IMG_2733-scaled.jpg?fit=2560%2C1829&ssl=1",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"9",
  name:"Open momo",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUhVYDghQTanwob_4uDOo6I4zeM6TVvNETY5Icoh5ilg&s",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"10",
  name:"Choclate momo",
  image:"https://bluepinefoods.com/wp-content/uploads/2024/05/Choco-Luv-Dumplings.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"11",
  name:"Sadheko momo",
  image:"https://www.themomoking.com/wp-content/uploads/2018/11/sandheko-momo-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"12",
  name:"Soup momo",
  image:"https://c.ndtvimg.com/2020-09/ae7d9ct_manchow-soup_640x480_12_September_20.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"13",
  name:"Tandoori momo",
  image:"https://www.bigbasket.com/media/uploads/recipe/w-l/4389_2_1.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Momos",
  price:"120"
},
{
  _id:"14",
  name:"Pepperoni",
  image:"https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"15",
  name:"Supreme",
  image:"https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"16",
  name:"Hawaiin",
  image:"https://img.freepik.com/free-photo/cheese-pizza-with-black-olives_140725-172.jpg?w=826&t=st=1716283676~exp=1716284276~hmac=1497b3a4d891c454df172cef794f12bac939148a3447791983a72862ef5e1c53",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"17",
  name:"BBQ",
  image:"https://c8.alamy.com/comp/2BXWDJT/savory-homemade-meat-lovers-pizza-with-pepperoni-and-bacon-2BXWDJT.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"18",
  name:"Sausage & kail",
  image:"https://www.recipetineats.com/wp-content/uploads/2020/05/Sausage-and-kale-pizza.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"19",
  name:"Margerata",
  image:"https://www.recipetineats.com/wp-content/uploads/2020/05/Margherita-pizza-overhead.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"20",
  name:"Bagel",
  image:"https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-01-Bagel-Pizza%2Fpizza_bagels_3_of_3",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"21",
  name:"Garlic cheese",
  image:"https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:" Pizza",
  price:"120"
},
{
  _id:"22",
  name:"Banana",
  image:"https://img.delicious.com.au/RanKitWN/del/2017/04/choc-banoffee-pancakes-44869-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"23",
  name:"Choc banofee",
  image:"https://img.delicious.com.au/20Ie1PHz/del/2021/05/blender-banana-bread-pancakes-151106-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"24",
  name:"Honeycomp butter",
  image:"https://img.delicious.com.au/AWu9PWw0/del/2021/07/choc-berry-pancakes-155467-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"25",
  name:"Fennel seed",
  image:"https://img.delicious.com.au/xQ6dsu1d/del/2021/08/blackberry-pancakes-with-peanut-butter-and-honey-155811-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"25",
  name:"Fennel seed",
  image:"https://img.delicious.com.au/xQ6dsu1d/del/2021/08/blackberry-pancakes-with-peanut-butter-and-honey-155811-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"26",
  name:"Peanet butter",
  image:"https://img.delicious.com.au/E6tVbp36/del/2016/04/blueberry-pancakes-with-honeycomb-and-bacon-butter-29507-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"27",
  name:"Blueberry",
  image:"https://img.delicious.com.au/Gi7t4rc_/del/2019/04/blueberry-ricotta-hotcakes-105167-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"28",
  name:"Labanes",
  image:"https://img.delicious.com.au/dBPnzhL5/del/2020/07/italian-cannoli-crepes-136670-1.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"29",
  name:"Italian cannoli",
  image:"https://img.delicious.com.au/KEc73g_U/del/2019/03/banana-rum-and-hazelnut-crepes-102723-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"30",
  name:"Bruleed",
  image:"https://img.delicious.com.au/sNL3zrvf/del/2015/12/crepes-with-banana-and-greek-yoghurt-25533-2.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"PanCake",
  price:"120"
},
{
  _id:"31",
  name:"Abalone",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/abalone-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"32",
  name:"Catfish",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/catfish-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"33",
  name:"Crab",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/crab-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"34",
  name:"Tilapia",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/tilapia-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"35",
  name:"Lobster",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/lobster-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"36",
  name:"Squid",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/squid-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"37",
  name:"Salmon",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/salmon-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"38",
  name:"Shrimp",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/shrimp-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"39",
  name:"Caviar",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/caviar-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"40",
  name:"Sardines",
  image:"https://www.tastingtable.com/img/gallery/20-popular-types-of-seafood-ranked/sardines-1680118642.webp",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Seafood",
  price:"120"
},
{
  _id:"41",
  name:"Spiced potatos",
  image:"https://www.allrecipes.com/thmb/Xi5ZSN_sbS5SKRv3z5CWgbO0Gp0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4058172-35d63afa0d8545a88a72b899fd79bd38.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"42",
  name:"Scaloped",
  image:"https://www.allrecipes.com/thmb/RNz8KKaMcxcoiFcMrYFQNmASEO0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1006451-0655cb54367248dfae04ec42555c2ace.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"43",
  name:"Oven fried",
  image:"https://www.allrecipes.com/thmb/xtXKdtRWZN0zSNd85nL_yBZYO_E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2290256-4fb3d626c78b4a20b0f0e1e29fcf4eec.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"44",
  name:"Belle rose marry",
  image:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F409206.jpg&q=60&c=sc&poi=auto&orient=true&h=512",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"45",
  name:"Garlic red",
  image:"https://www.allrecipes.com/thmb/iKYqJ48B6dfTEhwCIZ5jCkb9VSI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/44536-garlic-red-potatoes-cookinmama-4x3-1-863523a6fe28498caf5e5efb55ed505e.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"46",
  name:"Pepper",
  image:"https://www.allrecipes.com/thmb/L7-MckMm4pjRlZOBbU6oBX7a1Rg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/793931-34b4a653d13543598ead3ba7e2a31281.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"47",
  name:"Roasted",
  image:"https://www.allrecipes.com/thmb/mCcIvm77dgVrK7d0ALfM2FmyvU4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4616147-75824ac96a90493dae6343d927525549.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"48",
  name:"Vegan",
  image:"https://www.allrecipes.com/thmb/LgyfTX00z0limvD_2FCXkd9Hksc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/9058420-522c264cec33422cb696afdebb696806.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"49",
  name:"Green potatos",
  image:"https://www.allrecipes.com/thmb/3uCSYfCZKyW_kRofbbHzpbfnGyQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7674155-4b1f6426f6034a8b853d9573e2725fe0.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"50",
  name:"Parsley",
  image:"https://www.allrecipes.com/thmb/DRCSGDQiFJwRo8nYIbNCX905g98=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/585-ccad1a570c334decbd25e83c4ab58591.jpg",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Fried pottatos",
  price:"120"
},
{
  _id:"51",
  name:"Air frier",
  image:"https://hips.hearstapps.com/hmg-prod/images/air-fryer-chicken-parmesan-air-fryer-recipes-65e74613e5252.jpg?crop=0.668xw:1.00xh;0.332xw,0&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"52",
  name:"Roasted chickpea",
  image:"https://hips.hearstapps.com/hmg-prod/images/roasted-chickpea-tomato-and-chicken-bowls-healthy-chicken-recipes-65e8aa3ca8395.jpg?crop=0.621xw:0.929xh;0.189xw,0.0356xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"53",
  name:"Strips",
  image:"https://hips.hearstapps.com/hmg-prod/images/air-fryer-chicken-strips-65e74686117f8.jpg?crop=0.886xw:0.886xh;0.114xw,0.0647xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"54",
  name:"Japanees curry",
  image:"https://hips.hearstapps.com/hmg-prod/images/japanese-chicken-curry-65e8ace0d21c5.jpg?crop=0.806xw:0.807xh;0.0663xw,0&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"55",
  name:"Baby romani",
  image:"https://hips.hearstapps.com/hmg-prod/images/smoky-chicken-thighs-on-baby-romaine-65e8adf68f4b3.jpg?crop=0.898xw:0.899xh;0.0663xw,0.0658xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"56",
  name:"Balsamic",
  image:"https://hips.hearstapps.com/hmg-prod/images/balsamic-chicken-caprese-65e8af5332299.jpg?crop=0.752xw:0.753xh;0.0901xw,0.157xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"57",
  name:"Sheet pam roasted",
  image:"https://hips.hearstapps.com/hmg-prod/images/sheet-pan-roasted-chicken-65e8afd4a66f1.jpg?crop=0.752xw:0.753xh;0.173xw,0.156xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"58",
  name:"Pepper and tomatos",
  image:"https://hips.hearstapps.com/hmg-prod/images/chicken-with-stewed-peppers-1673465799-6411dcdb48116.jpg?crop=0.668xw:1.00xh;0.156xw,0&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"59",
  name:"Italian-marinated",
  image:"https://hips.hearstapps.com/hmg-prod/images/italian-marinated-chicken-1675725505-6411dc97183f9.jpg?crop=0.668xw:1.00xh;0.204xw,0&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
{
  _id:"60",
  name:"Tandoori",
  image:"https://hips.hearstapps.com/hmg-prod/images/tandoori-spiced-cauliflower-chicken-flatbreads-6413274270454.jpg?crop=0.825xw:0.825xh;0.175xw,0.0375xh&resize=980:*",
  description:"Food provides essential nutrients for overall health and well-being",
  category:"Chicken",
  price:"120"
},
]
export  {set,menu_list,food_list}