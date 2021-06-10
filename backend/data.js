import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Mansi",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("admin", 8),
      isAdmin: true,
    },
    {
      name: "Severus Snape",
      email: "severusSnape@gmail.com",
      password: bcrypt.hashSync("severus", 8),
      isAdmin: false,
    },
    {
      name: "Hermione Granger",
      email: "hermioneGranger@gmail.com",
      password: bcrypt.hashSync("hermione", 8),
      isAdmin: false,
    },
    {
      name: "Sabastian Snape",
      email: "sebastianSnape@gmail.com",
      password: bcrypt.hashSync("sabastian", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Slim Tshirt",
      category: "Tshirts",
      images: "/images/p1.jpg",
      brand: "Nike",
      rating: 4.3,
      numReviews: 10,
      price: 199,
      countInStock: 10,
      description: "high quality comfortable tshirt",
    },
    {
      name: "Grey Contrast Sleeve Hoodie",
      category: "Hoodie",
      images:
        "/images/anthra-melange--grey-melange-contrast-sleeves-hoodie-sweatshirt-women-s-plain-contrast-sleeves-melange-hoodie-sweatshirt-291389-1605611625.jpg",
      brand: "Anthra Melange",
      price: 299,
      rating: 4.3,
      countInStock: 20,
      numReviews: 8,
      description:
        "Amp your cool-day look with this Anthra Melange - Grey Melange Contrast Sleeve Hoodie Sweatshirt. Pair this sweatshirt with a pair of joggers and wayfarers for a smart look.",
    },
    {
      name: "Anthra Melange Hoodie Sweatshirt",
      category: "Hoddie",
      images:
        "/images/anthra-melange-hoodie-sweatshirt-women-s-plain-melange-sweatshirt-hoodie-287632-1606805286.jpg",
      brand: "Anthra Melange",
      rating: 4.8,
      price: 399,
      countInStock: 10,
      numReviews: 9,
      description:
        "Fend off the chill with this Women Grey Anthra Melange Hoodie Sweatshirt. Pair the hoodie up with casual and comfortable joggers and some sneakers for a sporty look.",
    },
    {
      name: "Avengers Typo Men Printed T-Shirt",
      category: "Tshirts",
      images:
        "/images/avengers-typo-men-s-printed-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-324629-1611833597.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4.5,
      price: 299,
      numReviews: 9,
      countInStock: 5,
      description:
        "Wear your fandom on your tee with this Avengers Typo Men Printed Full Sleeve T-Shirt. Couple this Official Marvel t-shirt with a pair of relaxed-fit jeans, sneakers and a bomber jacket for a hangout session with friends.",
    },
    {
      name: "Black Widow Round Neck T-Shirts",
      category: "MARVEL X BEWAKOOF MERCHANDISE",
      images:
        "/images/black-widow-round-neck-3-4-sleeve-t-shirts-avl-women-s-printed-round-neck-3-4-sleeve-t-shirts-321819-1611833667.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4.7,
      numReviews: 9.2,
      countInStock: 5,
      price: 299,
      description:
        "Unlock the beast mode in this Marvel Black Widow Women Printed Round Neck 3/4 Sleeve T-Shirt. Partner this Official Blue t-shirt with a pair of joggers and sneakers for a workout session.",
    },
    {
      name: "Chibi Marvel Men Printed T-Shirts",
      category: "Tshirts",
      images:
        "/images/chibi-marvel-men-s-printed-t-shirts-men-s-printed-t-shirts-324628-1611834730.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4.6,
      numReviews: 9.7,
      countInStock: 5,
      price: 299,
      description:
        "Wear your fandom with this Chibi Marvel Men Printed T-Shirt. Couple this Official white t-shirt with a pair of comfortable joggers and sneakers for a workout look.",
    },
    {
      name: "Bold Red Boyfriend T-Shirt",
      category: "Tshirts",
      images:
        "/images/bold-red-boyfriend-t-shirt-women-s-plain-boyfriend-t-shirts-170465-1587961757.jpg",
      brand: "For TriBe Members",
      rating: 3.5,
      numReviews: 9.1,
      countInStock: 0,
      price: 399,
      description:
        "Get ready to look gorgeous in this Bold Red Boyfriend T-Shirt. Known for its versatility, this boyfriend t-shirt can be paired with baggy jeans or simply tucked inside a skirt for a uber-chic look.",
    },
    {
      name: "Couple Boyfriend T-Shirts (WVL)",
      category: "Tshirts",
      images:
        "/images/couple-boyfriend-t-shirts-wvl-women-s-printed-boyfriend-t-shirts-321850-1611834863.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4,
      price: 245,
      countInStock: 0,
      numReviews: 9,
      description:
        "Join the Marvel madness with this Official Couple Women Printed Boyfriend T-Shirt. Partner this blue t-shirt with a pair of shorts, high heels and a denim jacket for a fashionable look.",
    },
    {
      name: "Women Olive Green Solid Hooded ",
      category: "Hoodie",
      images: "/images/efd423a4-e730-4bab-b164-89d40ed7f50a1572937640521-1.jpg",
      brand: "Campus Sutra",
      rating: 4.0,
      price: 399,
      countInStock: 15,
      numReviews: 8,
      description:
        "Olive green solid sweatshirt, has a hood, one pocket, long sleeves, straight hem",
    },
    {
      name: "Women White Round Neck T-shirt",
      category: "Tshirts",
      images:
        "/images/b4a2b438-8183-4a60-8f43-b33b6fc98bff1552563548653-Roadster-Women-White-Solid-Round-Neck-T-shirt-32115525635468-1.jpg",
      brand: "Roadster",
      rating: 4.2,
      price: 245,
      countInStock: 25,
      numReviews: 10,
      description: "White solid T-shirt, has a round neck, short sleeves",
    },
    {
      name: "Lost Mountains Boyfriend T-Shirt",
      category: "Tshirts",
      images:
        "/images/lost-mountains-boyfriend-t-shirt-women-s-printed-boyfriend-t-shirts-272013-1594787420.jpg",
      brand: "Bewkoof",
      rating: 4.0,
      price: 345,
      countInStock: 20,
      numReviews: 8.8,
      description: "Falls loosely on the body.",
    },
    {
      name: "Minnie Love Sweatshirt Hoodie",
      category: "Hoodie",
      images:
        "/images/minnie-love-sweatshirt-hoodie-women-s-printed-sweatshirt-hoodie-305299-1608288842.jpg",
      brand: "DISNEY X BEWAKOOF MERCHANDISE",
      rating: 3.9,
      price: 345,
      countInStock: 0,
      numReviews: 7,
      description: "Fits just right - not too tight, not too loose.",
    },
    {
      name: " Round Neck T-Shirts Misty Pink",
      category: "Tshirts",
      images:
        "/images/my-best-life-round-neck-3-4-sleeve-t-shirts-misty-pink-frl-women-s-printed-round-neck-3-4-sleeve-t-shirts-327489-1611905874.jpg",
      brand: "FRIENDS BEWAKOOF MERCHANDISE",
      rating: 4.3,
      price: 199,
      countInStock: 1,
      numReviews: 6,
      description:
        "Eat, sleep and binge-watch F.R.I.E.N.D.S in this Official My Best Life Women 3/4th Sleeve T-Shirt. Fashion this pink t-shirt with a pair of solid jeans, sneakers and a sling bag for a cool look.",
    },
    {
      name: "Not Ordinary Boyfriend T-Shirt",
      category: "Tshirts",
      images:
        "/images/not-ordinary-boyfriend-t-shirt-women-s-printed-boyfriend-t-shirts-218334-1587984382.jpg",
      brand: "Bewkoof",
      rating: 3.5,
      price: 445,
      countInStock: 7,
      numReviews: 6,
      description:
        "Nothing beats class but class, and with this Not Ordinary Boyfriend T-Shirt, you can slay the street look with ease. Pair this versatile tee with your favorite denim shorts/ pants & sneakers for a perfect laid-back attire.",
    },
    {
      name: "Women Olive Green & Red Hooded",
      category: "Hoodie",
      images: "/images/product2.jpg",
      brand: "Campus Sutra",
      rating: 3.7,
      price: 445,
      countInStock: 145,
      numReviews: 7,
      description:
        "Olive Green and red printed sweatshirt, has a hood, one pockets, long sleeves, straight hem",
    },
    {
      name: "Women Mustard Solid Hooded",
      category: "Hoodie",
      images: "/images/product3.jpg",
      brand: "Campus Sutra",
      rating: 3.1,
      price: 554,
      countInStock: 45,
      numReviews: 7,
      description:
        "Mustard yellow solid sweatshirt, has a hood, long sleeves, 1 kangaroo pocket, straight hem",
    },
    {
      name: " White & Dusty Pink T-shirt",
      category: "Tshirt",
      images:
        "/images/b5dd3b04-72e5-4e96-affc-63ff67e7f8191605175875166-Mast--Harbour-Women-Tshirts-6941605175872294-1.jpg",
      brand: "Mast & Harbour",
      rating: 3.3,
      countInStock: 0,
      price: 355,
      numReviews: 7.1,
      description:
        "White and Dusty Pink printed T-shirt, has a round neck, and short sleeves",
    },
    {
      name: "Women Mustard Yellow Hoodie",
      category: "Hoodie",
      images: "/images/product4.jpg",
      brand: "Roadster",
      rating: 3.9,
      countInStock: 0,
      price: 699,
      numReviews: 10,
      description:
        "Mustard yellow printed sweatshirt, has a hood, long sleeves, straight hem",
    },
    {
      name: "Wanda Round Neck T-Shirts",
      category: "Tshirts",
      images:
        "/images/wanda-round-neck-3-4-sleeve-t-shirts-wvl-women-s-printed-round-neck-3-4-sleeve-t-shirts-321853-1611837083.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4.9,
      price: 345,
      countInStock: 5,
      numReviews: 9.9,
      description:
        "Get superhero vision in this Marvel Wanda Women Printed Round Neck 3/4 Sleeve T-Shirt. Couple this Official blue t-shirt with a pair of shorts and pumps for a statement look",
    },
    {
      name: "Men Blue Colourblocked T-shirt",
      category: "Tshirts",
      images:
        "/images/b5caaca7-b5e8-4134-9283-65473a2388031561026348090-Campus-Sutra-Men-Blue-Colourblocked-Round-Neck-T-shirt-99915-1.jpg",
      brand: "Campus Sutra",
      rating: 4.1,
      price: 299,
      countInStock: 5,
      numReviews: 9,
      description:
        "Blue colourblocked T-shirt, has a round neck, and long sleeves",
    },
    {
      name: " Grey Melange & Black T-shirt",
      category: "Tshirts",
      images:
        "/images/cabd0aa5-6067-4ff1-b490-d72a80762fe51559130170714-Roadster-Men-Grey-Melange--Black-Colourblocked-T-shirt-62615-1.jpg",
      brand: "Roadster",
      rating: 4.6,
      price: 454,
      countInStock: 0,
      numReviews: 7,
      description:
        "Grey Melange and black colourblocked T-shirt, has a round neck, long sleeves",
    },
    {
      name: "Men Black Slim Fit Formal Shirt",
      category: "Shirts",
      images: "/images/11adb5a6-9666-4bd2-8ed8-03fd20291f9d1581635929903-1.jpg",
      brand: "English Navy",
      rating: 3.6,
      price: 799,
      countInStock: 55,
      numReviews: 6,
      description:
        "Black solid formal shirt, has a spread collar, long sleeves, button placket, and straight hem",
    },
    {
      name: " Red & Black Checked Casual Shirt",
      category: "Shirts",
      images:
        "/images/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg",
      brand: "HERE&NOW",
      rating: 4.2,
      countInStock: 1,
      price: 645,
      numReviews: 8,
      description:
        "Red and black checked casual shirt, has a spread collar, button placket, 1 pocket, long sleeves, curved hem",
    },
    {
      name: "Men Blue Faded Denim Shirt",
      category: "Shirts",
      images:
        "/images/e46504d5-37f7-43c9-8580-6c3578ded88d1554181213184-Roadster-Men-Blue-Regular-Fit-Faded-Casual-Shirt-78815541812-1.jpg",
      brand: "Roadster",
      rating: 3.1,
      price: 845,
      countInStock: 44,
      numReviews: 7,
      description:
        "Blue faded denim shirt, has a spread collar, long sleeves, curved hem",
    },
    {
      name: " White & Grey Camouflage Shirt",
      category: "Shirts",
      images:
        "/images/0fe1f83f-4a92-4a9e-ac95-3559e4b978e61585905004166HIGHLANDERMenWhiteGreySlimFitPrintedCasualShirt1.jpg",
      brand: "HIGHLANDER",
      rating: 4.6,
      price: 699,
      countInStock: 5,
      numReviews: 8,
      description:
        "White and Grey camouflage printed casual shirt, has a spread collar, short sleeves, button placket, curved hem, and 1 patch pocket",
    },
    {
      name: "Men Navy Casual Shirt",
      category: "Shirts",
      images:
        "/images/e3cbea3d-de11-431a-bbfd-f49dc7e0dfdc1532002922375-Flying-Machine-Men-Navy-Printed-Casual-Shirt-831532002922262-1.jpg",
      brand: "Flying Machine",
      rating: 4.6,
      price: 750,
      countInStock: 0,
      numReviews: 8,
      description:
        "Navy blue and off-white printed casual shirt, has a button-down collar, a full button placket, long sleeves, a chest pocket, curved hem",
    },
    {
      name: "My Ride T-Shirt Bold Red",
      category: "Tshirts",
      images:
        "/images/my-ride-full-sleeve-t-shirt-bold-red-men-s-printed-full-sleeve-t-shirt-327498-1611923976.jpg",
      brand: "Flying Machine",
      rating: 3.5,
      price: 399,
      countInStock: 0,
      numReviews: 7,
      description:
        "This My Ride Men Full Sleeve T-Shirt is for the bikers. Style this red t-shirt with a pair of solid jogger pants, sliders and a varsity jacket for a laidback look.",
    },
    {
      name: "Yibambe Men T-Shirt",
      category: "Tshirts",
      price: 499,
      images:
        "/images/yibambe-men-s-printed-full-sleeve-t-shirt-men-s-printed-full-sleeve-t-shirt-324639-1611837572.jpg",
      brand: "MARVEL X BEWAKOOF MERCHANDISE",
      rating: 4,
      countInStock: 0,
      numReviews: 9,
      description:
        "This Yibambe Men Printed Full Sleeve T-Shirt is a product of an Official Collaboration with Marvel. Fashion this blue t-shirt with a pair of fitted jeans, cool sliders and a varsity jacket for a chill look.",
    },
  ],
};

export default data;
