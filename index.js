class Produkt{
    constructor(titel, pris, bild){
        
        this.titel=titel;
        this.pris=pris;
        this.bild=bild;
    }
}
const produkter = [ 
    new Produkt('Sweden tröja', 599, 'images/sverige.webp'), 
    new Produkt('Sweden tröja', 299, 'sverige.webp'),
    new Produkt('Sweden tröja', 399, 'sverige.webp'),
    new Produkt('Sweden tröja', 199, 'sverige.webp'),
    new Produkt('Sweden tröja', 799, 'sverige.webp'), 
    new Produkt('Sweden tröja', 599, 'images/sverige.webp'), 
    new Produkt('Sweden tröja', 299, 'sverige.webp'),
    new Produkt('Sweden tröja', 399, 'sverige.webp'),
    new Produkt('Sweden tröja', 199, 'sverige.webp'),
    new Produkt('Sweden tröja', 799, 'sverige.webp'), 
    new Produkt('Sweden tröja', 599, 'images/sverige.webp'), 
    new Produkt('Sweden tröja', 299, 'sverige.webp'),
    new Produkt('Sweden tröja', 399, 'sverige.webp'),
    new Produkt('Sweden tröja', 199, 'sverige.webp'),
    new Produkt('Sweden tröja', 799, 'sverige.webp'),  ];


    function buildProductTable(data){
const tableList = document.getElementById('myTable');

for (let i = 0; i < produkter.length; i+=4){
    let tr = tableList.insertRow();

    for(let j = 0; j < 4; j++){
        let index = i + j;

        if(index < produkter.length) {
            let tc = tr.insertCell();
            tc.innerHTML = `
            <th> <img src="${produkter[index].bild}" alt="${produkter[index].titel}" ></th>
            <td>${produkter[index].titel}</td>
            <td>${produkter[index].pris}</td>
            <button onclick="buyButton(${index})"></button>
            `
            
           
            

        }
        
    }

}
    }
    buildProductTable(produkter)
    

   function buyButton(index){
    window.location.href='bestallning.html'
   }
   
   function scrollToBottom (){
    let height = document.body.scrollHeight;
    window.scroll(0 , height)
   }
   function sortTable(obj){
    
    if(obj.value == 'lutande'){
        produkter.sort(comparatorDescending)
        buildProductTable(produkter)
    }
    else if(obj == 'Stigande'){

    }
   }
   function comparatorDescending(a,b) {
    produkter.sort(parseFloat(b.pris) - parseFloat(a.pris))
   }
   
   
