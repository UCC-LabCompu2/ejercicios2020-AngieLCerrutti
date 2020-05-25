/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades de metros, yardas, pies y palgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas
 * @param {number} valor- el valor de los inputs de metros, yardas, pies o pulgadas
 * @return
 */
function cambiarUnidades(id, valor) {
    var metro, pulgada, pie, yarda;
    if(valor.includes(",")){
        valor=valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("se ingreso un valor invalido "+id);
        metro= "";
        pulgada= "";
        pie= "";
        yarda ="";
    }else if(id=="metro"){
        metro=valor;
        pulgada= 39.3701*valor;
        pie= 3.28084*valor;
        yarda =1.09361*valor;
    }else if(id=="pulgadas"){
        pulgada=valor;
       metro = 0.0254*valor;
        pie = 0.833333*valor;
        yarda = 0.0277778*valor;
    }else if(id=="yarda"){
        yarda= valor;
        metro= 0.9144*valor;
        pulgada= 36*valor;
        pie= 3*valor;
    }else if(id=="pie"){
        pie=valor;
        metro= 0.3048*valor;
        pulgada= 12*valor;
        yarda= 0.333333*valor;
    }
    document.lasUnidades.unid_metro.value =Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value =Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value =Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value =Math.round(yarda*100)/100;

}

function convertirGR(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById(elementId="grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById(elementId="radianes").value;
        grad = (rad*180)/Math.PI;

    }
    document.getElementById(elementId="grados").value= grad;
    document.getElementById(elementId="radianes").value= rad;
}

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById(elementId="divMO").style.display= 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById(elementId="divMO").style.display= 'none';
    }
}

function calcularsuma() {
    var nums1, nusm2;
    nums1=Number(document.getElementsByName(elementName="sum_num1")[0].value);
    nums2=Number(document.getElementsByName(elementName="sum_num2")[0].value);
    document.getElementsByName(elementName="sum_total")[0].innerHTML= nums1 + Number(nums2);
}
function calcular_resta() {
    var numr1, numr2;
    numr1=Number(document.getElementsByName(elementName="res_num1")[0].value);
    numr2=Number(document.getElementsByName(elementName="res_num2")[0].value);
    document.getElementsByName(elementName="res_total")[0].innerHTML= numr1 - Number(numr2);
}
function calcular_mult() {
    var numm1, numm2;
    numm1=Number(document.getElementsByName(elementName="mul_num1")[0].value);
    numm2=Number(document.getElementsByName(elementName="mul_num2")[0].value);
    document.getElementsByName(elementName="mul_total")[0].innerHTML= numm1 * Number(numm2);
}
function calcular_div() {
    var numd1, numd2;
    numd1=Number(document.getElementsByName(elementName="div_num1")[0].value);
    numd2=Number(document.getElementsByName(elementName="div_num2")[0].value);
    document.getElementsByName(elementName="div_total")[0].innerHTML= numd1 / Number(numd2);
}

function CargarWeb()
{
    var cant,unidad,urlComp;

    cant= document.getElementById(elementId="distancia").value;
    unidad=document.getElementsByName(elementName="unidad")[0].value;

    urlComp="segundaWeb.html#"+ cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado() {
    var urlComp, cant, un;

    urlComp= window.location.href.split(separador="/")[5];

    cant =urlComp.split(separador="#")[1];
    un= urlComp.split(separador="#")[2];
    document.getElementById(elementId="dist").value= can + " " + un;
}

function dibujarCirCua(){
    var canvas=document.getElementById(elementId="myCanvas");
    var ctx= canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen= 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(x=0+margen,yMax-40-margen, W=40, h=40 );

    ctx.arc(xMax/2, yMax/2, radius=20, startAngle=0, endangle=2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#99617d";
    ctx.fill();
}

function dibujar() {
    var canvas= document.getElementById(elementId="canvasAdibujar");
    var ctx= canvas.getContext("2d");

    var posX= event.clientX;
    var posY= event.clientY;
    console.log(posX, posY);

    canvas.onmousedown= function(){bandera=true};
    canvas.onmouseup= function(){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, w=5, h=5);
        ctx.fill;
    }
}

function limpiarCanvas() {
    var canvas= document.getElementById(elementId="canvasAdibujar");
    var ctx= canvas.getContext("2d");

    canvas.width= canvas.widt;
}

function dibujarCuadriculado() {
    var canvas= document.getElementById(elementId="myCanvas");
    var ctx= canvas.getContext("2d");

    var anchoMax= canvas.width;
    var alturaMax= canvas.height;

    //para dibujar lineas horizontale empleamos un for
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(x=0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle= "#d9d9d4";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //para dibujar lineas verticales empleamos un for
    ctx.beginPath();
    for(var i=0; i<anchoMax;){
        ctx.moveTo(i, y=0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle= "#cfd9cb";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo(x=0, y=alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle= "#d91a12";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(x=anchoMax/2, y=0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle= "#d91a12";
    ctx.stroke();
    ctx.closePath();

    }


