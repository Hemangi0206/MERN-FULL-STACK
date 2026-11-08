const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";


// Toggle Password

function TogglePassword(inputID, iconID) {

    const passwordInput = document.getElementById(inputID);
    const passwordIcon = document.getElementById(iconID);

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        passwordIcon.classList.remove("bi-eye");
        passwordIcon.classList.add("bi-eye-slash");

    }

    else {

        passwordInput.type = "password";

        passwordIcon.classList.remove("bi-eye-slash");
        passwordIcon.classList.add("bi-eye");

    }

}


// Clear Form

function ClearForm() {

    document.getElementById("websiteName").value = "";
    document.getElementById("userName").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cfPassword").value = "";

    document.getElementById("password").type = "password";
    document.getElementById("cfPassword").type = "password";

    document.getElementById("passwordIcon").className = "bi bi-eye";
    document.getElementById("cfPasswordIcon").className = "bi bi-eye";

}


function SavePassword() {

    const wn = document.getElementById("websiteName").value.trim();

    const un = document.getElementById("userName").value.trim();

    const ps = document.getElementById("password").value;

    const cps = document.getElementById("cfPassword").value;


    if (!wn || !un || !ps || !cps) {

        alert("All fields are required!");

        return;

    }


    if (ps !== cps) {

        alert("Password and Confirm Password do not match!");

        return;

    }


    const newPacket = {

        id: Date.now(),

        websiteName: wn,

        userName: un,

        password: ps

    };


    const localStorageData =

        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];


    localStorageData.push(newPacket);


    localStorage.setItem(

        LOCAL_STORAGE_DATA_KEY,

        JSON.stringify(localStorageData)

    );


    alert("Password Saved Successfully!");


    ClearForm();

    RenderData();

}

function RenderData() {

    const localStorageData =

        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];


    const TableBody = document.getElementById("dataTable");


    document.getElementById("totalCount").innerText =
        localStorageData.length;


    if (localStorageData.length === 0) {

        TableBody.innerHTML = `

            <tr>

                <td colspan="5" class="text-secondary py-4">

                    <i class="bi bi-folder-x fs-2 d-block mb-2"></i>

                    No Saved Passwords Found

                </td>

            </tr>

        `;

        return;

    }


    TableBody.innerHTML = "";


    localStorageData.forEach((element, index) => {

        const TR = document.createElement("tr");

        const serialCell = document.createElement("td");

        serialCell.innerText = index + 1;

        const websiteCell = document.createElement("td");

        websiteCell.innerText = element.websiteName;

        const usernameCell = document.createElement("td");

        usernameCell.innerText = element.userName;

        const passwordCell = document.createElement("td");

        const passwordText = document.createElement("span");

        passwordText.innerText = "********";

        passwordText.className = "password-text";

        const eyeButton = document.createElement("button");

        eyeButton.className = "btn btn-sm btn-light ms-2";

        eyeButton.innerHTML = '<i class="bi bi-eye"></i>';


        eyeButton.onclick = function () {

            if (passwordText.innerText === "********") {

                passwordText.innerText = element.password;

                eyeButton.innerHTML = '<i class="bi bi-eye-slash"></i>';

            }

            else {

                passwordText.innerText = "********";

                eyeButton.innerHTML = '<i class="bi bi-eye"></i>';

            }

        };


        passwordCell.appendChild(passwordText);

        passwordCell.appendChild(eyeButton);

        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");

        deleteButton.className = "btn btn-sm btn-danger";

        deleteButton.innerHTML =
            '<i class="bi bi-trash"></i> Delete';


        deleteButton.onclick = function () {

            DeleteItem(element.id);

        };


        actionCell.appendChild(deleteButton);

        TR.appendChild(serialCell);

        TR.appendChild(websiteCell);

        TR.appendChild(usernameCell);

        TR.appendChild(passwordCell);

        TR.appendChild(actionCell);


        TableBody.appendChild(TR);

    });

}

function DeleteItem(ItemID) {

    const localStorageData =

        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];


    const confirmDelete = confirm("Are you sure you want to delete this password?");


    if (!confirmDelete) {

        return;

    }


    const newData = localStorageData.filter(

        (item) => item.id !== ItemID

    );


    localStorage.setItem(

        LOCAL_STORAGE_DATA_KEY,

        JSON.stringify(newData)

    );


    RenderData();

    alert("Password Deleted Successfully!");

}

function SearchPassword() {

    const searchValue = document.getElementById("searchInput")
        .value.toLowerCase();


    const localStorageData =

        JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];


    const filteredData = localStorageData.filter((item) =>

        item.websiteName.toLowerCase().includes(searchValue) ||

        item.userName.toLowerCase().includes(searchValue)

    );


    DisplaySearchData(filteredData);

}
function DisplaySearchData(data) {

    const TableBody = document.getElementById("dataTable");

    TableBody.innerHTML = "";


    if (data.length === 0) {

        TableBody.innerHTML = `

            <tr>

                <td colspan="5" class="text-secondary py-4">

                    No Matching Password Found

                </td>

            </tr>

        `;

        return;

    }


    data.forEach((element, index) => {

        const TR = document.createElement("tr");

        const serialCell = document.createElement("td");

        serialCell.innerText = index + 1;


        const websiteCell = document.createElement("td");

        websiteCell.innerText = element.websiteName;


        const usernameCell = document.createElement("td");

        usernameCell.innerText = element.userName;


        const passwordCell = document.createElement("td");

        const passwordText = document.createElement("span");

        passwordText.innerText = "********";


        const eyeButton = document.createElement("button");

        eyeButton.className = "btn btn-sm btn-light ms-2";

        eyeButton.innerHTML = '<i class="bi bi-eye"></i>';


        eyeButton.onclick = function () {

            if (passwordText.innerText === "********") {

                passwordText.innerText = element.password;

                eyeButton.innerHTML = '<i class="bi bi-eye-slash"></i>';

            }

            else {

                passwordText.innerText = "********";

                eyeButton.innerHTML = '<i class="bi bi-eye"></i>';

            }

        };


        passwordCell.appendChild(passwordText);

        passwordCell.appendChild(eyeButton);


        const actionCell = document.createElement("td");

        const deleteButton = document.createElement("button");

        deleteButton.className = "btn btn-sm btn-danger";

        deleteButton.innerText = "Delete";


        deleteButton.onclick = function () {

            DeleteItem(element.id);

        };


        actionCell.appendChild(deleteButton);


        TR.appendChild(serialCell);

        TR.appendChild(websiteCell);

        TR.appendChild(usernameCell);

        TR.appendChild(passwordCell);

        TR.appendChild(actionCell);


        TableBody.appendChild(TR);

    });

}
RenderData();