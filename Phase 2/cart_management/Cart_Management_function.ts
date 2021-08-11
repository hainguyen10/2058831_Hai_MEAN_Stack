class items{
    id;
    nameItem;
    priceofItem;
    imageitem;
    constructor(id:number,nameItem:string,priceofItem:number,picture:string){
        this.id = id;
        this.nameItem = nameItem;
        this.priceofItem = priceofItem;
        this.imageitem = picture;
    }
}
let item1 = new items(100,'Oranges',8.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7it9ZiBuzFdWPhEh7c_UR2EFjlboy4VozVQ&usqp=CAU');
let item2 = new items(101,'Apples',5.99,'https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg');
let item3 = new items(102,'Cookies',3.40,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvoSuaG9-WM_Rqhe8mpwv-4MpJkHRSO8ymA&usqp=CAU');
let item4 = new items(103,'Watermelon',5.65,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5dsFFoO-KYgdXkX9m0fU_2u-Ogh7pDKAP_g&usqp=CAU');
let item5 = new items(104,'Grapefruit',7.89,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3f45I3Oz8RO1LPyt1w0xaRHhAqQLAdTK6Jg&usqp=CAU');
let item6 = new items(105,'Papaya',10.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcHntO_Li_WJVuYmG9jLJwQF3S98ACo4OCg&usqp=CAU');

let listOfItems = [item1,item2,item3,item4,item5,item6];

function displayitem(){
    let result = showItems(listOfItems);
    return result;
}
function showItems(listOfItems){
    for(let i = 0; i < listOfItems.length; i++){
        const container: HTMLElement | any = document.getElementById('containerID');
        let imageAdress = listOfItems[i].imageitem;
        const DataDisplayFormat = `<div class='card'><img width='200px' height='200px' src=${imageAdress}><div class='card-body'> <h4 class='card-title'>Items: ${listOfItems[i].nameItem}</h4> <p class='card-text'>Price: ${listOfItems[i].priceofItem} $</p><button type='button' class='btn btn-primary' onclick= updateCartSize('${listOfItems[i].id}')>ADD to CART</button></div></div>`
        container.innerHTML += DataDisplayFormat;
    }
}
let sumOfCart: number = 0;
let itemInTheCart = []
function updateCartSize(itemID){
    const container: HTMLElement | any = document.getElementById('cartSizeID');
    for(let i = 0; i< listOfItems.length;i++){
        if(itemID== listOfItems[i].id){
            itemInTheCart.push(listOfItems[i]);
        }
    }
    sumOfCart = itemInTheCart.length;
    container.innerHTML="Cart Size: "+sumOfCart
}
function checkout(){
    sessionStorage.setItem("allEntries", JSON.stringify(itemInTheCart));  
}
function displayItemInCart(){
    const container: HTMLElement | any = document.getElementById('checkoutID');
    let empObj = sessionStorage.getItem("allEntries");
    console.log(empObj);
    let empJson = JSON.parse(empObj)
    var sumTotal = 0;
    let itemInCheckoutCartTable = `<table border =1 class = 'center'>
                                    <tr>
                                    <th>Item Name</th>
                                    <th>Quantity</th>
                                    <th>Prices </th>
                                    </tr>
                                    `;
    for(let i = 0; i<empJson.length;i++){
        sumTotal += parseFloat(empJson[i].priceofItem);
        itemInCheckoutCartTable += `<tr>
                                    <td> ${empJson[i].nameItem}</td>
                                    <td> </td>
                                    <td>$ ${empJson[i].priceofItem}</td>
                                    </tr>`
    }
    itemInCheckoutCartTable+=`<tr>
                                <td><b>Total Prices:</b></td>
                                <td>${empJson.length}</td>
                                <td>$ ${sumTotal}</td>
                            </tr>`
    itemInCheckoutCartTable+=`</table`;
    container.innerHTML += itemInCheckoutCartTable;
}

