class Produkt{
    constructor(titel, pris, bild){
        
        this.titel=titel;
        this.pris=pris;
        this.bild=bild;
    }
}
const produkter = [ 
    new Produkt('Sweden shirt', 599, 'images/sverige.webp'), 
    new Produkt('Denmark shirt', 299, 'images/fotbolldanmark.jpg'),
    new Produkt('Faroe Islands shirt', 399, 'images/fotbollfaroar.jpg'),
    new Produkt('Finland shirt', 199, 'images/fotbollfinland.jpg'),
    new Produkt('Iceland shirt', 799, 'images/fotbollisland.jpg'), 
    new Produkt('Norway shirt', 599, 'images/fotbollnorge.jpg'), 
    new Produkt('Germany shirt', 299, 'images/fotbolltyskland.jpg'),
    new Produkt('Kosovo shirt', 899, 'images/fotbollkosovo.jpg'),
    new Produkt('Bosnia shirt', 199, 'images/fotbollbosnia.jpg'),
    new Produkt('Serbia shirt', 99, 'images/fotbollserbia.jpg'), 
    new Produkt('Poland shirt', 599, 'images/fotbollpoland.jpg'), 
    new Produkt('Ireland shirt', 299, 'images/fotbollirland.jpg'),
    new Produkt('England shirt', 399, 'images/fotbollengland.jpg'),
    new Produkt('Spain shirt', 199, 'images/fotbollspanien.jpg'),
    new Produkt('Italy shirt', 799, 'images/fotbollitalia.jpg'), 
    new Produkt('Albania shirt', 799, 'images/albanien.jpg'), ];


    function removeTable(){
        const clearTable = document.getElementById("myTable");
        clearTable.innerHTML = "";
    }


    function buildProductTable(data){
const tableList = document.getElementById('myTable');
const tempArray = data;
removeTable(tableList);
for (let i = 0; i < tempArray.length; i+=4){
    let tr = tableList.insertRow();

    for(let j = 0; j < 4; j++){
        let index = i + j;

        if(index < tempArray.length) {
            let tc = tr.insertCell();
            tc.innerHTML = `
            <div id="product">
            <th> <img src="${tempArray[index].bild}" width=200px alt="${tempArray[index].titel}" ></th>
            <div id="description">
            <td>${tempArray[index].titel} <br></td>
            <td>${tempArray[index].pris}KR</td>
            <button onclick="buyButton(${index})">Köp</button> </div> </div>
            `
       }
      }
     }
    }
   function buyButton(index){
    window.location.href='bestallning.html'
    localStorage.setItem("selectedProduct", JSON.stringify(index))
   }
   
   function scrollToBottom (){
    let height = document.body.scrollHeight;
    window.scroll(0 , height)
   }
   
   function comparatorDescending(a,b) {
    const sortDesc = produkter.sort((a, b) => parseFloat(a.pris) - parseFloat(b.pris))
    buildProductTable(sortDesc)
   }
   function comparatorAscending(a,b) {
    const sortAsc = produkter.sort((a, b) => parseFloat(b.pris) - parseFloat(a.pris))
    buildProductTable(sortAsc)
   }
   document.getElementById("sortDesc").addEventListener("click", comparatorDescending)
   document.getElementById("sortAsc").addEventListener("click", comparatorAscending)
  
  
   buildProductTable(produkter)
   
   const namefield = document.getElementById('namefield');
   const email = document.getElementById('email');
   const password = document.getElementById('password');
   
   form.addEventListener('Register', (e)=>{
       e.preventDefault();
    
       checkInputs();
   }}

   function checkInputs(){
   const usernameValue = namefield.value.trim();
    const emailValue = email.value.trim();
   const passwordValue = password.value();
   }