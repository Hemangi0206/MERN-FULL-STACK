const data = [
  {
    title: "MyPHone 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "MyPHone 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "MyPHone 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "Ramsung ultra",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "audicon 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "Blueyou 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "Something 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "Poco 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "Readme 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
  {
    title: "FakeYou 18",
    Description: "amazing phone",
    button1: "25000",
    button2: "buynow",
  },
];

function add_Data(item) {
    const myCard = document.createElement("div");
 
    myCard.classList.add("col-3", "p-3");

    myCard.innerHTML = `
      <div class="p-2 border shadow rounded">
        <h3>${item.title}</h3>

        <p>${item.Description}</p>

        <div class="row px-3">
          <div class="col-6 p-2 d-grid">
            <button class="btn btn-outline-primary w-100">
              ${item.button1}
            </button>
          </div>

          <div class="col-6 p-2 d-grid">
            <button class="btn btn-primary w-100">
              ${item.button2}
            </button>
          </div>
        </div>
      </div>
    `;
let CP = document.getElementById("card-parent");
console.log(CP);
    CP.appendChild(myCard);
  }
  //add_Data(data[0]);
data.forEach((element)=> add_Data(element));

const student = {
  name: "Aarav",
  age: 20,
};
console.log(student);

student.name = "Manav";

console.log(student);
student.subject = "CSE";

console.log(student);

delete student.name;

console.log(student);