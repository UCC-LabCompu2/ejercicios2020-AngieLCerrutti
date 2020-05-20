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
    if(isNaN(valor)){
        alert("se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value= "";
        document.lasUnidades.unid_pulgada.value= "";
        document.lasUnidades.unid_pie.value= "";
        document.lasUnidades.unid_yarda.value="";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value= 39.3701*valor;
        document.lasUnidades.unid_pie.value= 3.28084*valor;
        document.lasUnidades.unid_yarda.value=1.09361*valor;
    }else if(id=="pulgadas"){
        document.lasUnidades.unid_metro.value= 0.0254*valor;
        document.lasUnidades.unid_pie.value= 0.833333*valor;
        document.lasUnidades.unid_yarda= 0.0277778*valor;
    }else if(id=="yarda"){
        document.lasUnidades.unid_metro.value= 0.9144*valor;
        document.lasUnidades.unid_pulgada.value= 36*valor;
        document.lasUnidades.unid_pie.value= 3*valor;
    }else if(id=="pie"){
        document.lasUnidades.unid_metro.value= 0.3048*valor;
        document.lasUnidades.unid_pulgada.value= 12*valor;
        document.lasUnidades.unid_yarda.value= 0.333333*valor;
    }

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
    var num1, num2;
    num1=Number(document.getElementById(elementName="sum_num1")[0].value);
    num2=Number(document.getElementById(elementName="sum_num2")[0].value);
    document.getElementById(elementName="sum_total")[0].value= num1 + Number(num2);
}
function calcular_resta() {
    var num1, num2;
    num1=Number(document.getElementById(elementName="res_num1")[0].value);
    num2=Number(document.getElementById(elementName="res_num2")[0].value);
    document.getElementById(elementName="res_total")[0].value= num1 - Number(num2);
}
function calcular_mult() {
    var num1, num2;
    num1=Number(document.getElementById(elementName="mul_num1")[0].value);
    num2=Number(document.getElementById(elementName="mul_num2")[0].value);
    document.getElementById(elementName="mul_total")[0].value= num1 * Number(num2);
}
function calcular_div() {
    var num1, num2;
    num1=Number(document.getElementById(elementName="div_num1")[0].value);
    num2=Number(document.getElementById(elementName="div_num2")[0].value);
    document.getElementById(elementName="div_total")[0].value= num1 / Number(num2);
}