function zoom(e)
{
    e.style.transform="scale(1.08,1.08)";
    e.style.transition="1s";
}
function origen(e)
{
    e.style.transform="scale(1,1)";
    e.style.transition="1s";
}

for(var i=0; i<document.getElementsByClassName("producto").length;i++)
{
    document.getElementsByClassName("producto")[i].setAttribute("onmouseover","zoom(this)");
    document.getElementsByClassName("producto")[i].setAttribute("onmouseout","origen(this)");
}



















