import React, { useState, useEffect } from "react";




const CartForm = ({finalizarCompra}) => {

   


    const [campos, setCampos] = useState({
        nombre: "",
        apellido: "",
        fono: "",
        email: "",
        

  })
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
    

    const leerCampos = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setCampos( {
            ...campos,
            [name]: value,

         })
     }

     const exitoso = () => {
        console.log('EXITOSO');
      


      }

    
let enviarExito = false;
     useEffect(() => {
        
        console.log('useeffect', formErrors);
        console.log('enviarExito antes', enviarExito);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log('todos los campos:', campos);
          console.log('envio con exito');
          enviarExito = true;
          console.log('enviarExito despues', enviarExito);
          exitoso();
          finalizarCompra(campos);
          
        
          

          

        }
      }, [formErrors]);

    const validation = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.nombre) {
            errors.nombre = "El campo nombre es obligatorio";
        }
        if (!values.apellido) {
            errors.apellido = "El campo apellido es obligatorio";
        }
        if (!values.fono) {
            errors.fono = "El telefono es obligatorio";
        }

        if (!values.email) {
            errors.email = "El email es obligatorio";
          } else if (!regex.test(values.email)) {
            errors.email = "El correo no tiene un formato válido";
          }
        
        console.log('validation', errors);
        console.log('validation formerrors', formErrors);


        return errors;
        


    }

    const enviarForm = (e) => {
       e.preventDefault();
      
        setFormErrors(validation(campos));
        setIsSubmit(true);
        

        console.log('enviarForm', formErrors)
        
        
    }

    console.log('enviarExito despues 2', enviarExito);


    return (
        <>
           
            
            <h5 className="mb-4" style={{textAlign: 'right'}}>Completa el formulario para finalizar tu compra</h5>
            {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="ui message success"></div>
            ) }
            <div style={{  textAlign: 'right', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{width: '60%'}}>
                    <input type="text" name="nombre" className="form-control" maxLength={20} placeholder="Nombre" onChange={leerCampos} value={campos.nombre} />
                    <p style={{color: 'red', fontFamily: 'Arial', fontSize: '14px'}}>{formErrors.nombre}</p>
                    
                    <input type="text" name="apellido" className="form-control" maxLength={30} placeholder="Apellido" onChange={leerCampos} value={campos.apellido} />
                    <p style={{color: 'red', fontFamily: 'Arial', fontSize: '14px'}}>{formErrors.apellido}</p>

                    <input type="number" name="fono"  className="form-control" placeholder="Teléfono" onChange={leerCampos} value={campos.fono} />
                    <p style={{color: 'red', fontFamily: 'Arial', fontSize: '14px'}}>{formErrors.fono}</p>


                    <input type="text" name="email" className="form-control" maxLength={40}placeholder="Email" onChange={leerCampos} value={campos.email} />
                    <p style={{color: 'red', fontFamily: 'Arial', fontSize: '14px'}}>{formErrors.email}</p>

                    <button onClick={enviarForm} className="btn btn-danger">REALIZAR TU PEDIDO </button>
                </div>
            </div>



        </>
    )
}

export default CartForm;
