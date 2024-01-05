let api = "http://localhost:3000/data";

async function getData() {

  try {
    let { data } = await axios.get(api);
    // console.log(data);
    get(data);
  } catch (error) {
    console.log(error);
  }
}

let todo = document.querySelector(".todo");
let todo_table = document.querySelector(".todo_table");




let hswo2 = document.querySelector(".hswo2");
let hswo1 = document.querySelector(".hswo1");
let infoShow = document.getElementById("infoShow");
let ppp = document.getElementById("ppp");
let grtposition = document.getElementById("grtposition");
let Experince = document.getElementById("Experince");
let Acconted = document.getElementById("Acconted");
let Phonenumber = document.getElementById("Phonenumber");
let Emali = document.getElementById("Emali");
let Telegram = document.getElementById("Telegram");
let level = document.getElementById("level");
let conter_div2 = document.getElementById("conter_div2");




infoShow.onclick = () => {
  infoShow.close();
};
hswo2.onclick = () => {
  todo.style.display = "none";
  todo_table.style.display = "flex";

};
hswo1.onclick = () => {
  todo.style.display = "flex";
  todo_table.style.display = "none";

};




function get(data) {
  data.forEach(el => {
    let todo_chaild = document.createElement("div");
    todo_chaild.className = "todo_chaild";
    let h5 = document.createElement("h5");
    h5.innerHTML = el.phone
  
    conter_div2.append(h5)
    

    let todo_chaildـTOP = document.createElement("div");
    todo_chaildـTOP.className = "todo_chaildـTOP";
    let TOP_left = document.createElement("div");
    TOP_left.className = "TOP_left";
    let TOP_left_title = document.createElement("h4");
    TOP_left_title.className = "TOP_left_title";
    TOP_left_title.innerHTML = el.title;

    // -------------------------------------------------------
    // let infoDiv = document.createElement("div");
    let top = document.createElement("div");
    let topBtn = document.createElement("button");
    topBtn.innerHTML = "X";
    let infoNAM = document.createElement("h2");
    infoNAM.innerHTML = "Mantors info";

    top.appendChild(topBtn);
    top.appendChild(infoNAM);

    top.className = "top";

    let main = document.createElement("div");
    main.className = "main";

    let lift = document.createElement("div");
    let h2 = document.createElement("h2");

    let posetion = document.createElement("h4");
    let posetion2 = document.createElement("h4");
    posetion2.innerHTML = "Posetion:";

    posetion.innerHTML = el.postion;

    posetion2.append(posetion);
    posetion.className = "posetion";
    posetion2.className = "posetion2";
    lift.className = "lift";

    let right = document.createElement("div");
    right.className = "right";
    let rightimg = document.createElement("img");
    rightimg.src = "/susr.jpg";
    rightimg.className = "rightimg";

    h2.innerHTML = el.title;

    
    let TOP_right = document.createElement("div");
    let right_img = document.createElement("img");
    right_img.src = "/susr.jpg";
    right_img.className = "right_img";
    TOP_right.appendChild(right_img);
    TOP_right.className = "TOP_right";

    TOP_right.onclick = () => {
        infoUser(el)




      
      
    };
    let TOP_left_phone = document.createElement("h4");
    TOP_left_phone.className = "TOP_left_phone";
    TOP_left_phone.innerHTML = "Phone";
    let phone_number = document.createElement("p");
    phone_number.className = "phone_number";
    phone_number.innerHTML = el.phone;

    let todo_chaildـUl = document.createElement("ul");
    todo_chaildـUl.className = "todo_chaildـUl";

    let ULli1 = document.createElement("p");
    ULli1.className = "ULli1";
    ULli1.innerHTML = "Group";

    let ULli2 = document.createElement("li");
    let lip2 = document.createElement("p");
    lip2.innerHTML = el.gruop_1;
    lip2.className = "lip2";
    ULli2.appendChild(lip2);

    let ULli3 = document.createElement("li");
    let lip3 = document.createElement("p");
    lip3.className = "lip3";
    lip3.innerHTML = el.gruop_2;

    ULli3.appendChild(lip3);

    todo_chaildـUl.append(ULli1, ULli2, ULli3);
    TOP_left_phone.append(phone_number);

    TOP_left.append(TOP_left_title, TOP_left_phone);

    todo_chaildـTOP.append(TOP_left, TOP_right);
    todo_chaild.append(todo_chaildـTOP, todo_chaildـUl);

    // let lip3 = document.createElement("p");

    todo.appendChild(todo_chaild);
  });
}
getData()


function infoUser(el) {


    ppp.innerHTML = el.title;
    grtposition.innerHTML = el.postion;
    Experince.innerHTML = el.Exp;
    Phonenumber.innerHTML = el.phone;
    Acconted.innerHTML = el.Acont;
    Emali.innerHTML = el.Emil;
    Telegram.innerHTML = el.Telegram;
    level.innerHTML = el.level; 


  infoShow.showModal();

  


}
















//   ul











