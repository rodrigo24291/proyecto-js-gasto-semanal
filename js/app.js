
const presupuestoinicial=prompt('inserte presupuesto');
const formulario=document.getElementById('agregar-gasto');
let re;

class sumas{
    constructor(presupuestoinicial){
        this.presupuestoinicial=Number(presupuestoinicial);
        this.restos=Number(presupuestoinicial);
    }

    restar(cantidad=0){
      return  this.restos-=Number(cantidad);
    }
}

class Interfaz{

    inicial(presu){
        
        const total=document.getElementById('total');

        total.innerHTML=presu.presupuestoinicial;
        const resto=document.getElementById('restante');
        resto.innerHTML=presu.presupuestoinicial   


    }

    htm(gasto,cantidad){

const li=document.createElement('li');
        const gastos=document.querySelector('#gastos ul')
        li.innerHTML=`${gasto}: ${cantidad}`
        gastos.appendChild(li);
    }
resto(cantidad){
    const resto=document.getElementById('restante');
    resto.innerHTML=re.restar(cantidad)

}


}

document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoinicial=='' || presupuestoinicial==null ){
        window.location.reload();
    }

    else{ re=new sumas(presupuestoinicial);
         let Inter=new Interfaz();
        Inter.inicial(re)             }
})


formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const gasto=document.getElementById('gasto').value;
    const cantidad=document.getElementById('cantidad').value;
    
    let inter=new Interfaz()
    inter.htm(gasto,cantidad)
    inter.resto(cantidad)

})