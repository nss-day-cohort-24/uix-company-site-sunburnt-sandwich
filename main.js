//this one holds the info, makes a sting with it, and puts it into HTML
function productFunc() {
    var product = ["name", " decription", " price", " <a href=''>Image</a>"];
    product.toString();
    document.getElementById("elementId").innerHTML = product;
}
//this one does nothing for a onMouseout event
function nothing() {
	document.getElementById("elementId").innerHTML = "";
}