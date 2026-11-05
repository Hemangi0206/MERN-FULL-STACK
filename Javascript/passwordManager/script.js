const LOCAL_STORAGE_DATA_KEY = "PasswordManagerData";

function TogglePassword(inputID, iconID) {
  const passwordInput = document.getElementById(inputID);
  const passwordIcon = document.getElementById(iconID);

  if (!passwordInput || !passwordIcon) {
    return;
  }

  const shouldShowPassword = passwordInput.type === "password";
  passwordInput.type = shouldShowPassword ? "text" : "password";

  passwordIcon.classList.remove("bi-eye", "bi-eye-slash");
  passwordIcon.classList.add(shouldShowPassword ? "bi-eye-slash" : "bi-eye");
}

function ClearForm() {
  document.getElementById("websiteName").value = "";
  document.getElementById("userName").value = "";
  document.getElementById("password").value = "";
  document.getElementById("cfPassword").value = "";

  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("cfPassword");

  if (passwordInput) {
    passwordInput.type = "password";
  }

  if (confirmPasswordInput) {
    confirmPasswordInput.type = "password";
  }

  const passwordIcon = document.getElementById("passwordIcon");
  const confirmPasswordIcon = document.getElementById("cfPasswordIcon");

  if (passwordIcon) {
    passwordIcon.classList.remove("bi-eye-slash");
    passwordIcon.classList.add("bi-eye");
  }

  if (confirmPasswordIcon) {
    confirmPasswordIcon.classList.remove("bi-eye-slash");
    confirmPasswordIcon.classList.add("bi-eye");
  }
}

function SavePassword() {
  const wn = document.getElementById("websiteName").value.trim();
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;
  const cps = document.getElementById("cfPassword").value;

  if (!wn || !un || !ps || !cps) {
    alert("All Feilds Required");
    return;
  }

  if (ps !== cps) {
    alert("Password and Confirm Password Not Match");
    return;
  }

  const newPacket = {
    id: Date.now(),
    websiteName: wn,
    userName: un,
    password: ps,
    cfPassword: cps,
  };

  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  localStorageData.push(newPacket);

  localStorage.setItem(
    LOCAL_STORAGE_DATA_KEY,
    JSON.stringify(localStorageData),
  );

  RenderData();
  ClearForm();
}

function RenderData() {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  const TableBody = document.getElementById("dataTable");

  if (localStorageData.length === 0) {
    TableBody.innerHTML = `
     <tr id="emptyState">
            <td colspan="5">No Saved Password Found</td>
          </tr>
    `;
    return;
  }

  TableBody.innerHTML = "";

  localStorageData.forEach((element, index) => {
    const TR = document.createElement("tr");

    const passwordText = document.createElement("span");
    passwordText.innerText = "********";

    const eyeButton = document.createElement("button");
    eyeButton.type = "button";
    eyeButton.className = "btn btn-sm btn-outline-secondary ms-2";

    const eyeIcon = document.createElement("i");
    eyeIcon.className = "bi bi-eye";

    eyeButton.appendChild(eyeIcon);

    eyeButton.addEventListener("click", function () {
      if (passwordText.innerText === "********") {
        passwordText.innerText = element.password;
        eyeIcon.className = "bi bi-eye-slash";
      } else {
        passwordText.innerText = "********";
        eyeIcon.className = "bi bi-eye";
      }
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => DeleteItem(element.id));

    actionCell.appendChild(deleteButton);

    TR.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.websiteName}</td>
            <td>${element.userName}</td>
    `;

    const passwordCell = document.createElement("td");
    passwordCell.appendChild(passwordText);
    passwordCell.appendChild(eyeButton);
    TR.appendChild(passwordCell);
    TR.appendChild(actionCell);

    TableBody.appendChild(TR);
  });
}

RenderData();

function DeleteItem(ItemID) {
  const localStorageData =
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_DATA_KEY)) || [];

  if (localStorageData.length === 0) {
    alert("Nothing to Delete");
    return;
  }

  const newData = localStorageData.filter((item) => item.id !== ItemID);

  localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(newData));
  RenderData();
  alert("Password Deleted Successfully");
}

