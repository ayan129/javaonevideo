// javascript in one video
// alert("hello world")
// alert("ayan")
// console.log("ayan")

//**************************************//
// topic no 1 : javascript console api console ke chesee
//**************************************//

// ways to print in javascript 

// console.log("my name is ayan", 4+6 , "Another log") //agar humne koi chez apne hisab se javasript m elikhne he to usko ase krnegey


// console.warn("this is a warning")


// console.error("this is a error")

//**************************************//
// topic no 2 : javascript variables 
//**************************************//

// what are variables -  container to store data value jisme hum koi value store krate he wo uski nishani hute he

// var num1 = 23

// var num2 = 32

// console.log(num1 + num2)

//**************************************//
// topic no 3 : javascript data types  
//**************************************//

// no1 data type (number)

// var num1 = 23

// var num2 = 32

// console.log(num1 + num2)

// no 2 data type (string)

// var str1 = " this is a string"

// var str2 = " this is also a string"

// console.log(str1 + str2)

// no 3 data type (object)

// var marks = {
//      hira : 3,
//      hassan : 32,
//      ayan : 33,
//      malaika : 35,
//      aliza : 36
// }

// console.log(marks)

// no 4 data type (booleans)

// var a = true

// var b = false

// console.log(a,b)

// no 5 data type (undefined and null)

// var und = undefined

// console.log(und)  // und by default undefined huta he undefine huta kya he undefined wo huta he jo define na hu jisme koi value nh hute

// var und;  // ab jse wo uper wali bt prove hugai ke yeh undefined he huta he

// console.log(und)  

// var n = null    // me khud kherhahu ke iske andar kuch nh rkho

// console.log(null)

// there are two types of data types in javascript uper hum primitive data types  ke kuxh types discuss krchuke he

// 1 primitive data types : undefined,null,number, string, boolean , symbol 

// 2 refernce data types : arrays and object

//data type array 

// var arr = [1,2,3,4,5,6]

// console.log(arr)

// var arr = [1,2,3,"ayan",4,5,6]

// console.log(arr[0])   // ab array hmesha 0 se start huta he to 1 aygea console me

// console.log(arr[3])  // ab yaha ayega  3 smjhrheu ???

//**************************************//
// topic no 4 : operators in javascript
//**************************************//

// no 1 operator (airthmatic operator)

// var a = 33

// var b = 22

// console.log("the value of a + b is ",a+b)

// console.log("the value of a + b is ",a-b)

// console.log("the value of a + b is ",a*b)

// console.log("the value of a + b is ",a/b)

// no 2 operator (assigment operators)

// var a = 33

// var b = 22

// // var a = b

// // a += 2

// a -= 2

// // a *= 2

// // a /= 2

// console.log(a)   // isme hum value change krdete he aik dusre me assign kradete he

// no 3 operator (comparison operators)

// var x = 3454

// var y =  5342

// console.log(x == y) // yeh operator yeh check krta he ke yeh dunu operator same he ya nh

// console.log(x >= y) 

// console.log(x <= y) 

// console.log(x > y) 

// console.log(x < y) 

// no 3 operator (logical operators)

// logical and  (&&) operator

// console.log(true && true)

// console.log(true && false)

// console.log(false && true)

// console.log(false && false)  // && operator us wqt tk true nh huta jab dunu condition true na hujai

// logical or  (||) operator

// console.log(true || true)

// console.log(true || false)

// console.log(false || true)

// console.log(false || false) // or operator us wqt true hujata he jab dunu me se koi aik chz bhe true hu to

// logical not   (!) operator

// console.log(!true)   // ab jse me yaha ! lgauga to yeh true he false hujaiga

// console.log(!false)  // ab jse me yaha ! lgauga ti yeh false he true hujaiga

//**************************************//
// topic no 5 : functions in javascript
//**************************************//

// function avg(a,b){  // ab yaha avg (a,b) he to yaha 2 arrguement pass hue he

//     c = (a+b)/2

//     return c;  // aur yeh return yeh kam krta he ke koi bhe value return krdeta he jse avg(8763,2344) yeh iske jaga replace hujaiga
// }

// c1 = avg(8763,2344)  // uper jo arrgument pass hue he  wo yaha humne daley he

// c2 = avg(3472,3845)

// console.log(c1,c2)

// abhe yaha cgpa ke application banani he 

//************************************************//
// topic no 6 : conditional statements in javascript
//************************************************//

// if else statement 

// var age = prompt("enter your age","ENTER YOUR AGE")

// single if statement

// if (age > 18){
//     console.log("you are able to drop your vote")
// }
// if (age < 18){
//     console.log("you are able to drop your vote")
// }

//  if - else statement

// if (age > 18){
//     console.log("you are able to drop your vote")

// }
// else{
//     console.log("you are not able to  drop your vote")
// }

//  if - else ladder statement

// if (age > 18){
//     console.log("you are able to drop your vote")
// }
// else if (age < 18){
//     console.log("you are not able to drop your vote")
// }
// else {
//     console.log(" error !!")
// }

//************************************************//
// topic no 7 : arrays in javascript
//************************************************//

// var arr = [1,2,3,4,"ayan","areeba"]

// console.log(arr[5])

// console.log(arr[4])

// console.log(arr[3])

// console.log(arr[2])

// console.log(arr[1])

// console.log(arr[0])

//************************************************//
// topic no 8 : loops in javascript
//************************************************//

// for loop

// var arr = [1, 2, 3, 4, "ayan", "hassan"]

// console.log(arr)

// for (var i = 0; i < arr.length; i++) {  //1 tareka yh he array ko line se likhneka attray krneka

//     console.log(arr[i])

// }

// arr.forEach(function(element){

// console.log(element);    // 2usra treka yeh he 2unu same he yeh just function use huwa he

// })



// let j = 0;                  // isko hum function ke bhir use krengey qk yeh hamre keye faida mand he

// const x = 12;        // const change nh huskta jse hum agar increment nh kren to yeh error nh dega qk humconstant ke defination me pora utaar jayenge
// x++;
// console.log(x)
// console.log(j)

// while loop

// var arr = [1,2,3,4,"ayan","hassan"]

// let j = 0;                      // while loop ka syntax
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do while loop

// let j = 0
// do{
//     console.log(arr[j]);      // do while loop me jo condiiion hute he wo do ke bracket ke bad hute he thatz mean jab do while hu uski condition jo bhe hu wo aik na aik dafa lazmi chlega phr condition ke mutabiq work krega
//     j++;
// }while(j<arr.length)



//*****************************************************************//
// topic no 9 : break and conitnue statement  in javascript
//*****************************************************************//

//  break statement

// var arr = [1, 2, 3, 4, "ayan", "hassan"]



// // console.log(arr)

// for (var i = 0; i < arr.length; i++) { 

//     if(i == 2){
//         break          // break statement hamara yeh kam krta he ke ke loop ko kheta he mtlb hum jaha bhe break staement lagade waha wo us itration ko break krdeta he tordeta he aur wo loop ki itration wahe rook deta he
//     }
//     console.log(arr[i])

// }


//  continue statement

// var arr = [1, 2, 3, 4, "ayan", "hassan"]



// // console.log(arr)

// for (var i = 0; i < arr.length; i++) { 

//     if(i == 4){
//         continue              
//     }
//     console.log(arr[i])

// }


//*****************************************************************//
// topic no 10 : arrays method  in javascript
//*****************************************************************//

// let myArr = ["ayan","hassan", 34 , null, true];

// // console.log(myArr.length);

// // myArr.pop();       // YEH AIK FUNCTION HE  jo end se aik array mikaldeta he


// // myArr.push("malaika");            // yeh function wo he jo humare array me add krta he

// // myArr.shift();        // yeh shuru ase array me se aik array nikal de

// myArr.toString();   // yeh string me convert krta he

// // const newlen = myArr.unshift("malaiaka");

// myArr.sort();  // yeh sort krdeta he tarteeb se

// console.log(myArr);


// console.log(myArr.length);



//*****************************************************************//
// topic no 11 : string method  in javascript
//*****************************************************************//

// indexoff

// let myString = "MY NAME IS AYAN" ;

// console.log(myString);

// console.log(myString.length);

// console.log(myString.indexOf("AYAN"));  // yeh array num batat he search krke

// slice

// let myString = "MY NAME IS AYAN" ;

// // console.log(myString);

// // console.log(myString.slice(0,4))   // slice basically aik function he jime hum 2 parameters pass krte he first me array ka wo num dltey he jisse humne start krana huta he dusre peremter ka wo array num dlte he jaha tk humne statr krana huta he  

// replace = myString.replace("AYAN","HASSAN");  // isme hum 2 parameters pass krte he jo replace lrta he phle mewo dlege jiske jagah krna he dusre me wo jo phele wali ki jagah daln ahe

// console.log(replace,myString);


//*****************************************************************//
// topic no 12 : dates  in javascript
//*****************************************************************//

// let mydate = new Date();

// console.log(mydate)


// console.log(mydate.getTime())

// console.log(mydate.getDay())

// console.log(mydate.getFullYear())

// console.log(mydate.getSeconds())


// console.log(mydate.gethours())

// console.log(mydate.getHours())



//*****************************************************************//
// topic no 13 : DOM  in javascript
//*****************************************************************//


// let element = document.getElementById("click");

// console.log(element)
// element.style.background = "red"


// let elemclass = document.getElementsByClassName("container");

// console.log(elemclass)

// elemclass[0].style.background = "yellow"


// // elemclass[1].style.background = "cyan"


// elemclass[1].classList.add("bg-red") // agar hum  koi aur class add krana chate he ti ase krwaige class.list krwake


// console.log(elemclass.innertext);

// console.log(element.innerHTML)      // inner htmml ka likhne keye


// tagname = document.getElementsByTagName('div')

// console.log(tagname)

// createdelement = document.createElement('button');
// createdelement.innerText = "created buttton"
// tagname[0].appendChild(createdelement);


// createdelement2 = document.createElement('button');
// createdelement2.innerText = "replacing buttton"
// tagname[0].appendChild(createdelement2);


// tagname[0].replaceChild(createdelement2,createdelement)

// createdelement2.classList.add("ayan")

// createdelement.classList.add("ayan")   // ab yaha jse humne aik class add kri


//selecting using query



//*****************************************************************//
// topic no 14 : EVENTS  in javascript
//*****************************************************************//

//onclick event        jse humne abhe click krwaya jo hum html body me likhte he isee on click khte he


// function clicked(){
//     alert("the button was clicked ");
// }

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked</b>" // JAB HUB CLCIK KRENGE TO HTML ME AJAIGA
//     console.log("Clicked on Container")
// })





// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on Container");
// })




///////////////////////////////////////////////////////////////////////////////

// // Arrow Functions
// // function summ(a, b){
// //     return a+b;
// // }

// summ = (a,b)=>{
//     return a+b;
// }

// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Set interval fired</b>"
//     console.log("I am your log")
// }

//////////////////////////////////////////////////////////////////////////




//*****************************************************************//
// topic no 15 : SET time out AND SET time interval  in javascript
//*****************************************************************//



// clr = setTimeout(logKaro, 5000);    // set time out aik wo function he jisme hum 2 permateres pass krte he aik me hum function ka name dltey he aur durse me hum wo amount dlte he jiske jitne dair pbad wo show hu jiase yaha 2000 deyawa iska mtlb 2 seconds qk wo miliseconds me deyawa huta he
// clr = setInterval(logKaro, 2000);  // agar interval ko rukna he apne to clearinterval ka function usme aik permater pass krna he wo wo huga mtlb jo interval huga usko aik variable me store krwaya huga wo variable ka name clearintreval ke andar dldege
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout



//*****************************************************************//
// topic no 16 : LOCAL STORAGE   in javascript
//*****************************************************************//

// localStorage.setItem('name', 'harry') 
// localStorage 
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.clear();

//*****************************************************************//
// topic no 15 : JSON  in javascript
//*****************************************************************//

// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);



// Template literals - Backticks



// a = 34;
// console.log(`this is my ${a}`)





