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


    function removeTable(){                                         //Function for sorting
        const clearTable = document.getElementById("myTable");
        clearTable.innerHTML = "";
    }


    function buildProductTable(data){                           //Building the table
const tableList = document.getElementById('myTable');
const tempArray = data; //temporary array to handle the sorting functions and to not modify current array
removeTable(tableList); //remove old table before building new
for (let i = 0; i < tempArray.length; i+=4){ //outer for loop to create a row with 4 columns
    let tr = tableList.insertRow(); //inserts the row

    for(let j = 0; j < 4; j++){ //inner forloop that fills up the columns with objects, 4 columns for each row   
        let index = i + j; //is used to determine the index number for each product so each product gets its correct attributes. Which is used in the innerhtml code

        if(index < tempArray.length) { //is used to not print non existing objects and print existing ones. 
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
   function buyButton(index){ //Not completely finished but was supposed to take you to the order page with the correct product based of the index
    window.location.href='bestallning.html'  
   }
   
   function scrollToBottom (){ //function to scroll to the bottom of the page
    let height = document.body.scrollHeight; //gets the height of the document
    window.scroll(0 , height) //scrolls to the 0 of the height
   }
   
   function comparatorDescending(a,b) { //ascending
    const sortDesc = produkter.sort((a, b) => parseFloat(a.pris) - parseFloat(b.pris)) //using the js sort method based on object a.pris - object b.pris. Parsefloat converts string to float numbers
    buildProductTable(sortDesc) //build the table after sorting which includes removing the old table.
   }
   function comparatorAscending(a,b) { //descending
    const sortAsc = produkter.sort((a, b) => parseFloat(b.pris) - parseFloat(a.pris))
    buildProductTable(sortAsc)
   }
   document.getElementById("sortDesc").addEventListener("click", comparatorDescending) 
   document.getElementById("sortAsc").addEventListener("click", comparatorAscending)    //handling sorting functions, eventlisteners based on click which activates function
   
   
   
   buildProductTable(produkter) //builds the table automatically when you open the page. 
   
  
   function checkPassword(){
    const p = document.getElementById("password1").value.trim(); //assign a variabel to the input for password and get its value and trim
    let specialCount = 0; //counter for special characters  
    let numberCount = 0; //counter for numbers
    let bigLetterCount = 0; //counter for capital letters
    let smallLetterCount = 0; //counter for lower case letters
    for(let i = 0; i < p.length; i++){ //loops through the password input
        if(p[i] >= 'A' && p[i] <= 'Z' ){ //if between A or Z
            bigLetterCount++;
        }
        else if (p[i] >= "0" && p[i]<= "9"){ //if between 0 or 9
            numberCount++;
        }
        else if (p[i] >= 'a' && p[i] <= 'z'){ //if between a-z
            smallLetterCount++;
        }
        else {
            specialCount++; //if its not lower case or capital letter or numbers -> it is a special character
        }
    }
    if (bigLetterCount >= 2 && numberCount >= 1 && specialCount >= 1){ //checking the counters
        window.location.href=('landingpage.html') //if correct takes you to this page.
        //console.log(bigLetterCount, numberCount, specialCount)hej@outlook.com PaSSworD231%%        // For presentation
    }
    else {
        window.alert("Invalid Password") //error handling. 
    }
}
   
  
