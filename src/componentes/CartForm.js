import React, { useState } from "react";

const CartForm = () =>  {

  
    const [campos, setCampos] = useState({
        nombre: "",
        apellido: "",
        fono: "",
        email: ""
        
    })
    const [NombreValida, setNombreValida] = useState(false)
    const [ApellidoValida, setApellidoValida] = useState(false)
    const [EmailValida, setEmailValida] = useState(false)
    const [ValidaTodo, setValidaTodo] = useState(false)



    const leerCampos = (e) => {
        const value = e.target.value;
        setCampos({
            ...campos,
            [e.target.name]: value
        });


    }
    const validation = () => {

        console.log(campos['nombre']);
        if (!campos['nombre']) {
            setNombreValida(false)
            console.log(' el nombre esta vacio');
            console.log(NombreValida);
        } else {
            setNombreValida(true)
            console.log(' el nombre correcto');
            console.log(NombreValida);

        }

        if (!campos['apellido']) {
            setApellidoValida(false)
            console.log(' el apellido esta vacio');
        } else {
            setApellidoValida(true)
        }

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
       
            
            if(campos['email'].match(mailformat) ) {
                setEmailValida(true)
                console.log('email validado')
            } else {
                setEmailValida(false)
                console.log('email erroneo')
            }
        

        
        console.log(NombreValida);
        console.log(ApellidoValida);
        console.log(EmailValida);


       

        // return ValidaTodo
        
    }
   
    const enviarForm = (e) => {
        e.preventDefault();
        validation();
        // if ( NombreValida === true && ApellidoValida === true && EmailValida === true) {
        
        //     setValidaTodo(true);

        //     console.log('maldito', ValidaTodo);
        // } else {
        //     setValidaTodo(false);
        //     console.log('todofalse', ValidaTodo);

        // }
        // console.log(validation())
        // console.log('hola click enviar');
        // console.log(campos);
    }


    return (
        <>
            <h1>Formulario</h1>
            <h4>Completa el siguiente formulario para finalizar tu compra:</h4>
            <div style={{ margin: "0 auto", display: "block", maxWidth: "600px"}}>
                <input type="text" name="nombre"  className="form-control" placeholder="Nombre" onChange={leerCampos} value={campos.nombre} />
                { NombreValida == false && <p>El campo nombre es requerido</p>   }
                
                <input type="text" name="apellido"  className="form-control" placeholder="Apellido" onChange={leerCampos} value={campos.apellido}/>
                { ApellidoValida == false && <p>El campo apellido es requerido</p>   }

                {/* <input type="text" name="fono"  className="form-control" placeholder="Fono" onChange={leerCampos} value={campos.fono}/> */}

                <input type="text" name="email"   className="form-control" placeholder="Email" onChange={leerCampos} value={campos.email}/>
                { EmailValida == false && <p>El campo email esta vacio o incorrecto</p>   }
                <button onClick={enviarForm} className="btn btn-danger">ENVIAR</button>
            </div>


            
        </>
    )
}

export default CartForm;
