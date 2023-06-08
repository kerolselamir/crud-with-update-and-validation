var title = document.getElementById("Product_Name");
var price = document.getElementById("price");
var taxs = document.getElementById("taxs");
var ads = document.getElementById("ads");
var discount = document.getElementById("discount");
var total = document.getElementById("total");
var category = document.getElementById("Product_Categorey");
var count = document.getElementById("count");

function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxs.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "gray";
  } else {
    total.innerHTML = "";
    total.style.background = "tomato";
  }
}

var prooduct_container = [];
if (localStorage.getItem("my_shop") != null) {
  prooduct_container = JSON.parse(localStorage.getItem("my_shop"));
  displayForm();
}
// add
function addProduct() {

  userInputsValidation()

  if(userInputsValidation()==true)
  {

    var products = {
      ptitle: title.value,
      pprice: price.value,
      pptax: taxs.value,
      pads: ads.value,
      pdiscount: discount.value,
      ptotal: total.innerHTML,
      pcount: count.value,
      pcate: category.value,
    };
  
    if (products.pcount > 1) {
      for (var i = 0; i < products.pcount; i++) {
        prooduct_container.push(products);
      }
      document.location.reload();
    } else {
      prooduct_container.push(products);
    }
    localStorage.setItem("my_shop", JSON.stringify(prooduct_container));
  
    displayForm();
    clears();
    getTotal();

    if(title.value=='')
    {
      title.classList.remove('is-valid')
      title.classList.remove('is-invalid')
    }

//price validation 
if(price.value=='')
{
  price.classList.remove('is-valid')
  price.classList.remove('is-invalid')
}
//taxs validation 
if(taxs.value=='')
{
  taxs.classList.remove('is-valid')
  taxs.classList.remove('is-invalid')
}
//ads validation 
if(ads.value=='')
{
  ads.classList.remove('is-valid')
  ads.classList.remove('is-invalid')
}
//discount validation 
if(discount.value=='')
{
  discount.classList.remove('is-valid')
  discount.classList.remove('is-invalid')
}
//category validation 
if(category.value=='')
{
  category.classList.remove('is-valid')
  category.classList.remove('is-invalid')
}
//category validation 
if(count.value=='')
{
  count.classList.remove('is-valid')
  count.classList.remove('is-invalid')
}






  }
   

  





}
// display
function displayForm() {
  var cartoona = "";
  for (var i = 0; i < prooduct_container.length; i++) {
    cartoona += 
    `
        <tr>
        <td data-label="Index">${i}</td>
        <td data-label="Name">${prooduct_container[i].ptitle}</td>
        <td data-label="Price">${prooduct_container[i].pprice}</td>
        <td data-label="Tax">${prooduct_container[i].pptax}</td>
        <td data-label="Ads">${prooduct_container[i].pads}</td>
        <td data-label="Discount">${prooduct_container[i].pdiscount}</td>
        <td data-label="Total">${prooduct_container[i].ptotal}</td>
        <td data-label="Category">${prooduct_container[i].pcate}</td>
        <td data-label="Delete"><button class="btn btn-outline-danger btn_del" onclick="Delete(${i})">Delete</button></td>
        <td data-label="Update"><button class="btn btn-outline-success btn_update" onclick="update(${i})">Update</button></td>
        </tr>
        `;
  }
  document.getElementById("tabbleBody").innerHTML = cartoona;

  if (prooduct_container.length > 0) {
    document.getElementById("DeleteAll").innerHTML = 
    `<button class="btn btn-outline-danger" onclick='SURE()'>Delete All ( ${i} )</button>`;
    document.querySelector('.table-data p span').innerHTML=`${i}`
    
  } else {
    document.getElementById("DeleteAll").innerHTML = ``;
    document.querySelector('.table-data p span').innerHTML=`No Data`

  }
}
// clear
function clears() {
  title.value = "";
  taxs.value = "";
  ads.value = "";
  discount.value = "";
  price.value = "";
  count.value = "";
  category.value = "";
  total.innerHTML = "";


if(title.value=='')
{
  productNameAlert.classList.add('d-none')
  title.classList.remove('is-valid')
  title.classList.remove('is-invalid')
}
  //price validation 
if(price.value=='')
{
  productPriceAlert.classList.add('d-none')
  price.classList.remove('is-valid')
  price.classList.remove('is-invalid')
}
//taxs validation 
if(taxs.value=='')
{
  productTaxsAlert.classList.add('d-none')
  taxs.classList.remove('is-valid')
  taxs.classList.remove('is-invalid')
}
//ads validation 
if(ads.value=='')
{
  productadsAlert.classList.add('d-none')
  ads.classList.remove('is-valid')
  ads.classList.remove('is-invalid')
}
//discount validation 
if(discount.value=='')
{
  productdiscountAlert.classList.add('d-none')
  discount.classList.remove('is-valid')
  discount.classList.remove('is-invalid')
}
//category validation 
if(category.value=='')
{
  productCateAlert.classList.add('d-none')
  category.classList.remove('is-valid')
  category.classList.remove('is-invalid')
}
//category validation 
if(count.value=='')
{
  productCountAlert.classList.add('d-none')
  count.classList.remove('is-valid')
  count.classList.remove('is-invalid')
}
}




// delete
function Delete(indexOfItem) {
  prooduct_container.splice(indexOfItem, 1);
  localStorage.setItem("my_shop", JSON.stringify(prooduct_container));

  displayForm();
}


var areYouSure=document.getElementById('areYouSure')

function SURE()
{
  areYouSure.classList.toggle('d-none')

}

// Delete all
function DeleteAllproducts() {
  areYouSure.classList.toggle('d-none')
  prooduct_container.splice(0);
  localStorage.clear();
  displayForm();
}







var glopalIndex;

// update
function update(update_index) {
  glopalIndex = update_index;
  title.value = prooduct_container[update_index].ptitle;
  taxs.value = prooduct_container[update_index].pptax;
  ads.value = prooduct_container[update_index].pads;
  discount.value = prooduct_container[update_index].pdiscount;
  price.value = prooduct_container[update_index].pprice;
  getTotal();
  category.value = prooduct_container[update_index].pcate;
  total.innerHTML = prooduct_container[update_index].ptotal;
  count.style.display = "none";
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
  scroll({ top: 0, behavior: "smooth" });
}
function updateProduct() {
  prooduct_container[glopalIndex].ptitle = title.value;
  prooduct_container[glopalIndex].pptax = taxs.value;
  prooduct_container[glopalIndex].pads = ads.value;
  prooduct_container[glopalIndex].pdiscount = discount.value;
  prooduct_container[glopalIndex].pprice = price.value;
  prooduct_container[glopalIndex].pcate = category.value;
  prooduct_container[glopalIndex].ptotal = total.innerHTML;
  count.style.display = "block";
  document.getElementById("add").style.display = "inline-block";
  document.getElementById("update").style.display = "none";
  localStorage.setItem("my_shop", JSON.stringify(prooduct_container));

  
  displayForm();
  clears();
  getTotal();
  //title validation 
  if(title.value=='')
{
  title.classList.remove('is-valid')
  title.classList.remove('is-invalid')
}
//price validation 
if(price.value=='')
{
  price.classList.remove('is-valid')
  price.classList.remove('is-invalid')
}
//taxs validation 
if(taxs.value=='')
{
  taxs.classList.remove('is-valid')
  taxs.classList.remove('is-invalid')
}
//ads validation 
if(ads.value=='')
{
  ads.classList.remove('is-valid')
  ads.classList.remove('is-invalid')
}
//discount validation 
if(discount.value=='')
{
  discount.classList.remove('is-valid')
  discount.classList.remove('is-invalid')
}
//category validation 
if(category.value=='')
{
  category.classList.remove('is-valid')
  category.classList.remove('is-invalid')
}
}


// search
let searchmood='title'
let search=document.getElementById('search')
function getSearchMood(id)
{

    if(id=='searchtitle')
    {
        searchmood='title'
        search.placeholder='search by title'
    }
    else
    {
        searchmood='categorey'
        search.placeholder='search by categorey'
    }

    search.focus()

}


function searchProduct(term)
{
    if (searchmood=='title')
    {

        var cartoona='';
        for(var i=0;i<prooduct_container.length;i++)
        {
            if(prooduct_container[i].ptitle.toLowerCase().includes(term.toLowerCase()))
            {
            cartoona+=
            `
            <tr>
            <td data-label="Index">${i}</td>
            <td data-label="Name">${prooduct_container[i].ptitle.toLowerCase().replace(term,`<span class="text-danger fw-bold">${term}</span>`)}</td>
            <td data-label="Price">${prooduct_container[i].pprice}</td>
            <td data-label="Tax">${prooduct_container[i].pptax}</td>
            <td data-label="Ads">${prooduct_container[i].pads}</td>
            <td data-label="Discount">${prooduct_container[i].pdiscount}</td>
            <td data-label="Total">${prooduct_container[i].ptotal}</td>
            <td data-label="Category">${prooduct_container[i].pcate}</td>
            <td data-label="Delete"><button class="btn btn-outline-danger" onclick="Delete(${i})">Delete</button></td>
            <td data-label="Update"><button class="btn btn-outline-success" onclick="update(${i})">Update</button></td>
            </tr>
            `
        }
        document.getElementById('tabbleBody').innerHTML=cartoona;
       }
    }
    else
    {
        var cartoona='';
        for(var i=0;i<prooduct_container.length;i++)
        {
            if(prooduct_container[i].pcate.toLowerCase().includes(term.toLowerCase()))
            {
            cartoona+=
            `
            <tr>
            <td data-label="Index">${i}</td>
            <td data-label="Name">${prooduct_container[i].ptitle}</td>
            <td data-label="Price">${prooduct_container[i].pprice}</td>
            <td data-label="Tax">${prooduct_container[i].pptax}</td>
            <td data-label="Ads">${prooduct_container[i].pads}</td>
            <td data-label="Discount">${prooduct_container[i].pdiscount}</td>
            <td data-label="Total">${prooduct_container[i].ptotal}</td>
            <td data-label="Category">${prooduct_container[i].pcate.toLowerCase().replace(term,`<span class="text-danger fw-bold">${term}</span>`)}</td>
            <td data-label="Delete"><button class="btn btn-outline-danger " onclick="Delete(${i})">Delete</button></td>
            <td data-label="Update"><button class="btn btn-outline-success " onclick="update(${i})">Update</button></td>
            </tr>
            `
        }
        document.getElementById('tabbleBody').innerHTML=cartoona;
       }
    }
}



var productNameAlert=document.getElementById('productNameAlert')
var productPriceAlert=document.getElementById('productPriceAlert')
var productTaxsAlert=document.getElementById('productTaxsAlert')
var productadsAlert=document.getElementById('productadsAlert')
var productdiscountAlert=document.getElementById('productdiscountAlert')
var productCountAlert=document.getElementById('productCountAlert')
var productCateAlert=document.getElementById('productCateAlert')



function validatename()
{
  var regex=/^[A-Z][a-z]{0,5}/
  if(regex.test(title.value))
  {
    productNameAlert.classList.add('d-none')
    title.classList.remove('is-invalid')
    title.classList.add('is-valid')
    return true


  }
  else
  {
    productNameAlert.classList.remove('d-none')
    title.classList.remove('is-valid')
    title.classList.add('is-invalid')
    return false
    
  }

}

function validatePrice()
{
  //price validation 
if(price.value=='')
{
  price.classList.remove('is-valid')
  price.classList.remove('is-invalid')
}
  var regex=/^\d+$/
  if(regex.test(price.value))
  {
    productPriceAlert.classList.add('d-none')
    price.classList.remove('is-invalid')
    price.classList.add('is-valid')
    return true
  }
  else
  {
    productPriceAlert.classList.remove('d-none')
    price.classList.remove('is-valid')
    price.classList.add('is-invalid')
    return false
  }
}


function validateCount()
{
  //count validation 
if(count.value=='')
{
  count.classList.remove('is-valid')
  count.classList.remove('is-invalid')
}
  var regex=/^\d+$/
  if(regex.test(count.value))
  {
    productCountAlert.classList.add('d-none')
    count.classList.remove('is-invalid')
    count.classList.add('is-valid')
    return true
  }
  else
  {
    productCountAlert.classList.remove('d-none')
    count.classList.remove('is-valid')
    count.classList.add('is-invalid')
    return false
  }
}

function validateTaxs()
{
  //taxs validation 
if(taxs.value=='')
{
  taxs.classList.remove('is-valid')
  taxs.classList.remove('is-invalid')
}
  var regex=/^\d+$/
  if(regex.test(taxs.value))
  {
    productTaxsAlert.classList.add('d-none')
    taxs.classList.remove('is-invalid')
    taxs.classList.add('is-valid')
    return true
  }
  else
  {
    productTaxsAlert.classList.remove('d-none')
    taxs.classList.remove('is-valid')
    taxs.classList.add('is-invalid')
    return false
  }
}

function validateAds()
{
  //ads validation 
if(ads.value=='')
{
  ads.classList.remove('is-valid')
  ads.classList.remove('is-invalid')
}
  var regex=/^\d+$/
  if(regex.test(ads.value))
  {
    productadsAlert.classList.add('d-none')
    ads.classList.remove('is-invalid')
    ads.classList.add('is-valid')
    return true
  }
  else
  {
    productadsAlert.classList.remove('d-none')
    ads.classList.remove('is-valid')
    ads.classList.add('is-invalid')
    return false
  }
}


function validateDiscount()
{
  //discount validation 
if(discount.value=='')
{
  discount.classList.remove('is-valid')
  discount.classList.remove('is-invalid')
}
  var regex=/^\d+$/
  if(regex.test(discount.value))
  {
    productdiscountAlert.classList.add('d-none')
    discount.classList.remove('is-invalid')
    discount.classList.add('is-valid')
    return true
  }
  else
  {
    productdiscountAlert.classList.remove('d-none')
    discount.classList.remove('is-valid')
    discount.classList.add('is-invalid')
    return false
  }
}


function validateCate()
{
  //category validation 
if(category.value=='')
{
  category.classList.remove('is-valid')
  category.classList.remove('is-invalid')
}
  var regex=/^[A-Z][a-z]{0,5}/
  if(regex.test(category.value))
  {
    productCateAlert.classList.add('d-none')
    category.classList.remove('is-invalid')
    category.classList.add('is-valid')
    return true
  }
  else
  {
    productCateAlert.classList.remove('d-none')
    category.classList.remove('is-valid')
    category.classList.add('is-invalid')
    return false
  }
}



function userInputsValidation()
{
  validatename()
  validatePrice()
  validateCount()
  validateTaxs()
  validateAds()
  validateDiscount()
  validateCate()
  if(validatename()==true&&validatePrice()==true&&validateCount()==true&&validateTaxs()==true&&validateAds()==true
  &&validateDiscount()==true&&validateCate()==true)
  {
    return true
  }
  else
  {
    return false
  }
}








