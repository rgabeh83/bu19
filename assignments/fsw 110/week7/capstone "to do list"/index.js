console.log(document)
function inputTasks() {
    var task1 = document.getElementById("task1").value;
    var task2 = document.getElementById("task2").value;
    document.getElementById("p1").innerText = task1;
    document.getElementById("p2").innerText = task2;
    document.getElementById("task1").value="";
    document.getElementById("task2").value="";

}
document.getElementById("submit").addEventListener("click", inputTasks)

function deleteValue1() {
    var clearP1 = document.getElementById("p1").innerHTML = ""
}
document.getElementById("delete1").addEventListener("click", deleteValue1)

function deleteValue2() {
    var clearP1 = document.getElementById("p2").innerHTML = ""
}
document.getElementById("delete2").addEventListener("click", deleteValue2)