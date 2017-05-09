var records = [
{brand:"Black Scale", catagory: "Headwear", size:"OS", color:"Black, White", description: "Pitchfork Bandana Strapback", photo:"photo link here"},
{brand:"RSVP Gallery", catagory: "Hoodie", size:"M", color:"Black, White", description: "RSVP Logo Hoodie", photo:"photo link here"},
{brand:"424 On Fairfax", catagory:"Shirt", size:"M", color:"Black, Grey", description: "Throwover Flannel Shirt", photo:"photo link here"},
{brand:"RHUDE", catagory: "Shirt", size:"M", color:"Red, White, Black", description: "BRED Flannel Shirt", photo:"photo link here"} , 
{brand:"RHUDE", catagory: "Shirt", size:"M", color:"Grey, White, Black", description: "Shadow Flannel Shirt", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"M", color:"White", description: "Essential Tee", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"M", color:"Black", description: "Essential Tee", photo:"photo link here"},
{brand:"424 On Fairfax", catagory: "Tee", size:"Tee", color:"Black", description: "Long Sleeve Essential Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"M", color:"Vintage White, Yellow", description: "Sugarland Vintage Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"L", color:"Vintage Black, Yelloe", description: "Sugarland Vintage Tee", photo:"photo link here"},
{brand:"RHUDE", catagory: "Tee", size:"M", color:"Vintage Black, White", description: "MOTO Service Tee", photo:"photo link here"},
{brand:"KSUBI", catagory: "Denim", size:"32/33", color:"Blue, Light Wash", description: "Van Winkle Skinny Jeans", photo:"photo link here"},
{brand:"Fear of God LA", catagory: "Denim", size:"32/33", color:"Black", description: "Distressed Salvaged Denim", photo:"photo link here"},
{brand:"Adidas, Yeezy", catagory: "Footwear", size:"11.5", color:"Cream, White", description: "Adidas Yeezy Boost 350 V2", photo:"photo link here"},
{brand:"Adidas, Yeezy", catagory: "Footwear", size:"11.5", color:"Black, Red", description: "Adidas Yeezy Boost 350 V2", photo:"photo link here"},
{brand:"Comme Des Garcon", catagory: "Footwear", size:"11", color:"Black, Cream", description: "Retro Converse Hi-Tops", photo:"photo link here"},
{brand:"Nike", catagory: "Footwear", size:"12", color:"Red, Black, White", description: "Retro BRED 1s", photo:"photo link here"},
{brand:"Nike", catagory: "Footwear", size:"11.5", color:"Royal Blue, Black, White", description: "Retro Royal 1s", photo:"photo link here"} 
];
function displayRecords () {
  var fullDisplay = "";
  for(var i=0; i<records.length; i++) {
    var item = records[i];
    fullDisplay += '<div id="item'+i+'" >';
    
    fullDisplay += '<div class="itemBrand">Brand:'+item.brand+'</div>';
    
    fullDisplay += '</div>';
  }
}
