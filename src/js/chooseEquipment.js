// Starting Equipment
function chooseEquipment(e) {
  let checkboxes = document.getElementsByClassName("ch-equipment")[0].getElementsByTagName("input");
  let main = document.getElementsByClassName("main-weapon")[0];
  let secondary = document.getElementsByClassName("secondary-weapon")[0];
  let potions = document.getElementsByClassName("potions")[0];
  let stuff = document.getElementsByClassName("other-stuff")[0];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].parentElement.parentElement.parentElement === main) {
      checkboxes[i].addEventListener("change", chooseEq);
    }
    if (checkboxes[i].parentElement.parentElement.parentElement === secondary) {
      checkboxes[i].addEventListener("change", chooseEq);
    }
    if (checkboxes[i].parentElement.parentElement.parentElement === potions) {
      checkboxes[i].addEventListener("change", chooseEq);
    }
    if (checkboxes[i].parentElement.parentElement.parentElement === stuff) {
      checkboxes[i].addEventListener("change", chooseEq);
    }
  }

  function chooseEq() {
    if (this.checked) {
      let label = this.parentElement.parentElement.getElementsByTagName("label");
      let input = this.parentElement.parentElement.getElementsByTagName("input");
      for (let j = 0; j < label.length; j++) {
        if (!input[j].checked) {
          input[j].disabled = "true";
          label[j].style.color = "#9e9e9e";
        }
      }
    } else {
      let label = this.parentElement.parentElement.getElementsByTagName("label");
      let input = this.parentElement.parentElement.getElementsByTagName("input");
      for (let j = 0; j < label.length; j++) {
        if (!input[j].checked) {
          input[j].disabled = "";
          label[j].style.color = "#000";
        }
      }
    }
  }
}

export default chooseEquipment;
