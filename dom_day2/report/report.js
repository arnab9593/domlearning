// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", myfunction);

let formTag = document.querySelector("form");

function myfunction(event) {
    event.preventDefault();
    let photo = formTag.image.value;
    let name = formTag.name.value;
    let batch = formTag.batch.value;
    let dsa = formTag.dsa.value;
    let skill = formTag.cs.value;
    let code = formTag.coding.value;
    console.log(photo,name,batch,dsa,skill,code)

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("src",photo);
    let td2 = document.createElement("td");
        td2.innerText = name;
    let td3 = document.createElement("td");
        td3.innerText = batch;
    let td4 = document.createElement("td");
        td4.innerText = dsa;
    let td5 = document.createElement("td");
        td5.innerText = skill;
    let td6 = document.createElement("td");
        td6.innerText = code;
    let td7 = document.createElement("td");
        let total = Number(dsa)+Number(code)+Number(skill);
        let percentage = (Number(total / 30)*100);
        td7.innerText = Number(percentage.toFixed(2));
    let td8 = document.createElement("td");
        if(percentage<50){
            td8.innerText = "Async";
            td8.style.backgroundColor="red";
        }
        else{
            td8.innerText = "Regular";
        }
    let td9 = document.createElement("td");
        td9.innerText = "DELETE";
        td9.backgroundColor = "red";
        td9.style.cursor = "pointer";
        td9.addEventListener("click", deleteRow);
       

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
    document.querySelector("tbody").append(tr);
}

function deleteRow(event) {
    event.target.parentNode.remove();
}