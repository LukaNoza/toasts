class ToastNotification {
    constructor() {
      this.toast = document.getElementById("toast");
      this.timeout = null;
    }
  
    show(message, type) {
      const container1 = this.toast.querySelector(".container-1");
      const container2 = this.toast.querySelector(".container-2");
      const icon = container1.querySelector("i");
      const heading = container2.querySelector("p:first-child");
      const content = container2.querySelector("p:last-child");
      const closeButton = this.toast.querySelector("#close");
  

      if (type === "success") {
        icon.className = "fas fa-check-square";
        heading.textContent = "Success";
        content.textContent = message;
        this.toast.style.borderLeftColor = "#47d764";
      } else if (type === "error") {
        icon.className = "fas fa-exclamation-triangle";
        heading.textContent = "Error";
        content.textContent = message;
        this.toast.style.borderLeftColor = "#ff5a5f";
      }
  

      clearTimeout(this.timeout);
      this.toast.style.transform = "translateX(0)";
      this.timeout = setTimeout(() => {
        this.hide();
      }, 4000);
  

      closeButton.addEventListener("click", () => {
        this.hide();
      });
    }
  
    hide() {
      this.toast.style.transform = "translateX(400px)";
    }
  }
  
  const toast = new ToastNotification();
  
  function showToast() {
    toast.show("Your changes are saved successfully.", "success");
  }
  