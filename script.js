function myFunction() {
var checkBox = document.getElementById("Checkbox1");
var element = document.getElementById("FW");
if (checkBox.checked == true){
element.classList.add("checked")
}else {
element.classList.remove("checked")
};
}
