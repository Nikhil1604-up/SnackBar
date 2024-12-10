const toastBox = document.getElementById("toastBox");

function showToast(type) {
  console.log(type);
  // creating a toast div to be added inide the div toastBox

  let toast = document.createElement("div");
  toast.classList.add("toast");

  switch (type) {
    case "success":
      toast.innerHTML =
        '<i class="fa-solid fa-circle-check" style="color:green"></i> Successfully submitted';
      break;
    case "error":
      toast.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color:red"></i> Erorr Occured!`;
      break;
    default:
      toast.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color:orange"></i> Invalid Action!`;
  }

  // Appending this success toast inside the toastBox

  toastBox.appendChild(toast);
}
