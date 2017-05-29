var records = [
{brand:"Black Scale", catagory: "Headwear", size:"OS", color:"Black, White", description: "Pitchfork Bandana Strapback", photo:"photo link here"},
{brand:"RSVP Gallery", catagory: "Hoodie", size:"2", color:"Black, White", description: "RSVP Logo Hoodie", photo:"photo link here"},
{brand:"424 On Fairfax", catagory:"Shirt", size:"2", color:"Black, Grey", description: "Throwover Flannel Shirt", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"2", color:"White", description: "Essential Tee", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"2", color:"Black, Yellow", description: "Poppy Flower Essential Tee", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"2", color:"Black", description: "Essential Tee", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"2", color:"Black", description: "Long Sleeve Essential Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"2", color:"Vintage White, Yellow", description: "Sugarland Vintage Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"3", color:"Vintage Black, Yellow", description: "Sugarland Vintage Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"2", color:"Vintage Black, White", description: "American Spirit", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"2", color:"Vintage Black, White", description: "MOTO Service Tee", photo:"photo link here"},
{brand:"KSUBI", catagory: "Denim", size:"32/33", color:"Blue, Light Wash", description: "Van Winkle Skinny Denim", photo:"photo link here"},
{brand:"KSUBI", catagory: "Denim", size:"32/33", color:"Black", description: "Distressed Boneyard Denim", photo:"photo link here"},
{brand:"Rick Owens DRKSHDW", catagory: "Shorts", size:"2", color:"Black", description: "Drop-Crotch Pod Shorts", photo:"photo link here"},
{brand:"ACRONYM", catagory: "Footwear", size:"11.5", color:"Olive, Black", description: "ACRONYM Air Prestos - Bamboo", photo:"photo link here"},
{brand:"Adidas, Yeezy", catagory: "Footwear", size:"11.5", color:"Black, Red", description: "Adidas Yeezy Boost 350 V2 - BRED", photo:"photo link here"},
{brand:"Nike", catagory: "Footwear", size:"11.5", color:"Royal Blue, Black, White", description: "Retro Royal 1s", photo:"photo link here"}, 
{brand:"Nike", catagory: "Footwear", size:"12", color:"Red, Black, White", description: "Retro BRED 1s", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Accessories", size:"OS", color:"Red, Black", description: "424 Red Armband", photo:"photo link here"},
{brand:"Black Scale", catagory: "Accessories", size:"OS", color:"Rose Gold, Black", description: "Seventh Star Ring", photo:"photo link here"},
{brand:"Black Scale", catagory: "Accessories", size:"OS", color:"Rose Gold", description: "Rose Gold Cuban Link Bracelet", photo:"photo link here"},
{brand:"Black Scale", catagory: "Accessories", size:"OS", color:"Rose Gold", description: "Rose Gold Double Link Bracelet", photo:"photo link here"},
{brand:"PALACE", catagory: "Accessories", size:"OS", color:"Teal, White, Black", description: "Rucksack Backpack", photo:"photo link here"},
];
function displayRecords () {
  var fullDisplay = ""; 
  for(var i=0; i<records.length; i++) {
    var item = records[i];
    fullDisplay += '<div id="item'+i+'" >';
    fullDisplay += '<img class="itemThumb" src = "shirt.gif"/>'
    fullDisplay += '<div class="itemBrand"><span class="title">Brand:</span>'+item.brand+'</div>';
    fullDisplay += '<div class="itemCatagory"><span class="title">Catagory:</span>'+item.catagory+'</div>';
    fullDisplay += '<div class="itemSize"><span class="title">Size:</span>'+item.size+'</div>';
    fullDisplay += '<div class="itemColor"><span class="title">Color:</span>'+item.color+'</div>';
    fullDisplay += '<div class="itemDescription"><span class="title">Description:</span>'+item.description+'</div>';
    fullDisplay += '</div>';
  }
  element = document.getElementById("catalogItems");
  element.innerHTML=fullDisplay;
}
