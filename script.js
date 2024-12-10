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
      toast.classList.add("success");
      break;
    case "error":
      toast.innerHTML = `<i class="fa-solid fa-circle-xmark" style="color:red"></i> Erorr Occured!`;
      toast.classList.add("error");
      break;
    default:
      toast.innerHTML = `<i class="fa-solid fa-circle-exclamation" style="color:orange"></i> Invalid Action!`;
      toast.classList.add("invalid");
  }

  // Appending this success toast inside the toastBox

  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 6000);
}
