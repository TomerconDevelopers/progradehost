'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "9132e04295373259588110dda12e2a15",
"assets/assets/icons/Beverages/beverages.png": "754f2e59e1db764bcc293dc2f784be86",
"assets/assets/icons/Beverages/coffee.png": "63590af83343c1742cafa24ecec030b2",
"assets/assets/icons/Beverages/juice.png": "e2b573f13148d7d2830dceaa129740bd",
"assets/assets/icons/Beverages/tea.png": "81575ee0a67d4dbf777d66c1715a4b13",
"assets/assets/icons/Cosmetics/cosmetics.png": "db6f3413df1aee39fc09ea2853d6c0c9",
"assets/assets/icons/Cosmetics/lipstick.png": "8afb211d1a3583dadba2c6a9ccf3122c",
"assets/assets/icons/Cosmetics/nailpaint.png": "99e4bc19eb02e65b6291c73ba26998b8",
"assets/assets/icons/Cosmetics/perfume.png": "c0b77017064c067e9345397821ee3a8e",
"assets/assets/icons/Dry%2520fruits/almond.png": "56396fed44e61849f63221e71c23577d",
"assets/assets/icons/Dry%2520fruits/cashew.png": "8d02449304beee969cd7ea5a8cbf3472",
"assets/assets/icons/Dry%2520fruits/coconut.png": "c666dfdb1d64faa134cbb3b4bdd96dc7",
"assets/assets/icons/Dry%2520fruits/dates.png": "2ccd4b947c2c0314b37ec577a74882b9",
"assets/assets/icons/Dry%2520fruits/dry%2520fruits.png": "fd78bcd9410f1ac1ed71c08268a9e1df",
"assets/assets/icons/Dry%2520fruits/pista.png": "e59f458a363b046931d103b2327346a7",
"assets/assets/icons/Dry%2520fruits/raisins.png": "81cdb789770d7b4d8f0bfa7ddcd09d6d",
"assets/assets/icons/Dry%2520fruits/walnut.png": "a5908c7cb9edfda4813847a1d4530a77",
"assets/assets/icons/Edible%2520oil/edible%2520oil.png": "9eb9d7933a32ba83965e291bfba860e1",
"assets/assets/icons/Edible%2520oil/olive%2520oil.png": "ce153f302ff49cdc90f0adff4f9640b0",
"assets/assets/icons/Edible%2520oil/sunfloweroil.png": "930361414604603fc1597aeec7a17d1c",
"assets/assets/icons/Fruits/apple.png": "d00efcacf78d24ae53c91a587127b40a",
"assets/assets/icons/Fruits/banana.png": "9428dd3f33b4d721c753eebd3b2fc947",
"assets/assets/icons/Fruits/cucumber.png": "3fa3c8c7edbbfa7add590d3acdebaa10",
"assets/assets/icons/Fruits/fruits.png": "1335d1cd2ccae05a2f88d549ea765bf3",
"assets/assets/icons/Fruits/guava.png": "d2b7ce7cd60a0a554ce4bdb131c194be",
"assets/assets/icons/Fruits/jackfruit.png": "0c089c00f161173afe8d20afc75a1459",
"assets/assets/icons/Fruits/mango.png": "847d78fe0d4ce3e52f3c15346fb08bcb",
"assets/assets/icons/Fruits/mangosteen.png": "5e006e5df8c585a09ea1ab9f17fab987",
"assets/assets/icons/Fruits/orange.png": "b0e6dc10f777b9ab033b1394a523093d",
"assets/assets/icons/Fruits/papaya.png": "38b08bda4655cb0eb50c838ce8a76945",
"assets/assets/icons/Fruits/pineapple.png": "fde6ee3ca1471ae325f642eaccc904eb",
"assets/assets/icons/Fruits/pomegranate.png": "015ea85d0d7021cc1988e378a2ec862d",
"assets/assets/icons/Fruits/rambuttan.png": "917288a3808e61d909102663ec9dc1a4",
"assets/assets/icons/Fruits/watermelon.png": "16cfdb2eb9e2d49590dbd5b78a48efc3",
"assets/assets/icons/Meat/beef.png": "1be4f0a410386aede86b1a4069740c99",
"assets/assets/icons/Meat/chicken.png": "889f78f9a51a1af969b802b960eb7371",
"assets/assets/icons/Meat/fish.png": "ae9605a1009e639197f37cbf91fc8e44",
"assets/assets/icons/Meat/lamb.png": "ea94dddb6942f515b5ebfdbfc7285966",
"assets/assets/icons/Meat/meat.png": "1ca94be3853d18a4a2bdb9a35d94a783",
"assets/assets/icons/rice_and_floor/Maida.png": "7fcd484d1ef32b3625b16266bcd03fda",
"assets/assets/icons/rice_and_floor/rice%2520and%2520flour.png": "c96dd4a23ef0f5f311b4d046f1c6c560",
"assets/assets/icons/rice_and_floor/rice.png": "bbad1fb78aa50346358f427ac6a90320",
"assets/assets/icons/rice_and_floor/Wheat%2520flour.png": "c21cf3cbea7afd05388233c40feecf96",
"assets/assets/icons/Stationary/color%2520pencils.png": "86bcb104cd025cbaff56d08c74dfd3de",
"assets/assets/icons/Stationary/crayons.png": "4c96941756c53f3de98aed8a5c02a647",
"assets/assets/icons/Stationary/pencils.png": "6457eb38326bf5ee2dcb2aa2cc15ddb8",
"assets/assets/icons/Stationary/scissors.png": "b01565928ede6b9bad204bec1c2950e5",
"assets/assets/icons/Stationary/sketch%2520pens.png": "e48d4a8f1f4785ad49a6d090bbf38823",
"assets/assets/icons/Stationary/stationary.png": "0ea2c34751bc2bc33b36847024aa384d",
"assets/assets/icons/Sweets/cake.png": "f0a3928df0a773be47c231b502bb1e3d",
"assets/assets/icons/Sweets/gulab%2520jamun.png": "0945b65fa0dfdd1333ecc0761f34583b",
"assets/assets/icons/Sweets/icecream.png": "79d577e3912342e2526d7a0a8439a154",
"assets/assets/icons/Vegetables/beans.png": "a0c6201faa03c48188cc8a39324292cb",
"assets/assets/icons/Vegetables/bitter%2520gourd.png": "172ba1e40b1c745e31c25c6b253a9cb0",
"assets/assets/icons/Vegetables/brinjal.png": "89336aa50512086121a04dcd282b93c5",
"assets/assets/icons/Vegetables/cabbage.png": "425117d188b2ebe52471e5c0273d8cb2",
"assets/assets/icons/Vegetables/carrots.png": "9c2696a1b98954e7c6e0319661a4bd70",
"assets/assets/icons/Vegetables/cauliflower.png": "7c0fe3ae704fc5fc501d493d14a2c9a4",
"assets/assets/icons/Vegetables/garlic.png": "e816acf4e464221e1c2473091634c30b",
"assets/assets/icons/Vegetables/ginger.png": "1f406b5be584668b6a61f2561b6ec6ae",
"assets/assets/icons/Vegetables/ladys%2520finger.png": "4bbc6201615bb4c8935d5f206e7293cd",
"assets/assets/icons/Vegetables/onions.png": "73edc4f47dda686a3505c0cdd4f282c4",
"assets/assets/icons/Vegetables/potatoes.png": "a34e28d23b5accea7007cf77eab59157",
"assets/assets/icons/Vegetables/pumpkin.png": "51d652f13e84b95a41ac04f70ec272e9",
"assets/assets/icons/Vegetables/tomato.png": "624da4d3851a2d76e70e12820bf85ca1",
"assets/assets/icons/Vegetables/vegetable.png": "abe20b02aef690f0e21b95f05fdb5a5d",
"assets/assets/icons/Vegetables/yardlong%2520beans.png": "a9194971f4cffead904cc60463f8cecc",
"assets/assets/images/bestfood/ic_best_food_1.jpeg": "642c886b5d7d8b8ff9e688b002f1ca66",
"assets/assets/images/bestfood/ic_best_food_10.jpeg": "2320a4844ba054be538c40e6862c169f",
"assets/assets/images/bestfood/ic_best_food_2.jpeg": "75274d964667aecc9ac8d076ac62e26d",
"assets/assets/images/bestfood/ic_best_food_3.jpeg": "688eb31885ddd522bb7d91b563bee160",
"assets/assets/images/bestfood/ic_best_food_4.jpeg": "fd96d2f14b1e2232597afbdbf0402785",
"assets/assets/images/bestfood/ic_best_food_5.jpeg": "28d5dd388994627e3cf2e5e88a48665f",
"assets/assets/images/bestfood/ic_best_food_6.jpeg": "6fb4d65f2b28d7545fd3ecb895af8941",
"assets/assets/images/bestfood/ic_best_food_7.jpeg": "671986b07138c07da9817dafb03127d9",
"assets/assets/images/bestfood/ic_best_food_8.jpeg": "5d428e7d169839845c6b7fe5941adb19",
"assets/assets/images/bestfood/ic_best_food_9.jpeg": "66a6104142e08b315579854324830d9a",
"assets/assets/images/bg.png": "b8ca28203a12fe59dcef8c00b70eb7a7",
"assets/assets/images/intro1bg.png": "eeb746a321ec17605592bf32fd77df5c",
"assets/assets/images/intro2bg.png": "9c01569317e398c7cb5576b615f3c36e",
"assets/assets/images/logo.png": "4ba58921127da0027e4363b979153050",
"assets/assets/images/popular_foods/ic_popular_food_1.png": "8a8719944d475f5af02f48f74b529549",
"assets/assets/images/popular_foods/ic_popular_food_2.png": "c76484183aaa154b59d45af7728c5377",
"assets/assets/images/popular_foods/ic_popular_food_3.png": "173a694e1d7375ff614533905caa3bea",
"assets/assets/images/popular_foods/ic_popular_food_4.png": "d3503f895d700633996bf89e2caeaa29",
"assets/assets/images/popular_foods/ic_popular_food_5.png": "db0398fa3040ca0c8b9574d5c5635dd2",
"assets/assets/images/popular_foods/ic_popular_food_6.png": "d981f47d57df38fd04aae8bafdeeda49",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "da7f8347ad6edf39402ee45a85fe3d8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9e341f6a86e57485d21d8b295bb2473d",
"/": "9e341f6a86e57485d21d8b295bb2473d",
"main.dart.js": "04c81164c803566ca16d3d1ac694c2d7",
"manifest.json": "93465fa57d4535dc57f667f4eb1b9304"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
