//Ingreso de datos de texto nombre
document.querySelector('input[name="txtnombre"]').addEventListener("keypress",function(event)
{
    //usando codigo ascii
    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii<=57)||(ascii==46))
    {
         window.event.preventDefault();
         return;
    }
});
document.querySelector('input[name="txtapellido"]').addEventListener("keypress",function(event)
{
    //usando codigo ascii
    var ascii=event.keyCode || event.wich;
    if((ascii>=48 && ascii<=57)||(ascii==46))
    {
         window.event.preventDefault();
         return;
    }
});
//Ingreso solo datos numericos
document.querySelector('input[name="txtfono"]').addEventListener("keypress",function(event)
{
    var longitud=document.querySelector('input[name="txtfono"]').value.length;
    if(longitud>=9)
    {
        window.event.preventDefault();
        return;
    }

    //usando codigos ascii
    var ascii=event.keyCode || event.wich;
    if(ascii<48 || ascii>57)
    {
        window.event.preventDefault();
        return;
    }
});