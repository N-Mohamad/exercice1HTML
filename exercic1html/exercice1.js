let count = 0;
function handleIncrement() {
count += 1;
document.getElementById("count").value = count;
}
function handleDecrement() {
count -= 1;
document.getElementById("count").value = count;
}
function handleReset() {
count = 0;
document.getElementById("count").value = count;
}