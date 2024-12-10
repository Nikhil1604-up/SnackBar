const toastBox = document.getElementById("toastBox");

function showToast(type) {
  console.log(type);
  // creating a toast div to be added inide the div toastBox

  let toast = document.createElement("div");
  toast.classList.add("toast");

  switch (type) {
    case "success":
      toast.innerHTML = "Successfully submitted";
      break;
    case "error":
      toast.innerHTML = "Erorr Occured!";
      break;
    default:
      toast.innerHTML = "Invalid Action!";
  }

  // Appending this success toast inside the toastBox

  toastBox.appendChild(toast);
}
