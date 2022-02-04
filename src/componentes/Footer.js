import React from 'react';
import logoBlack from "../img/logo-destroy.png";

const styles = {
    footer: {
      
      backgroundColor: "rgb(33, 37, 41)", 
      padding: "0 2em",
      height: '100px',
      marginTop: '40px',
      paddingTop: '25px'
    },
    logo: {
        maxWidth: '100px',
        width: '100%',
    },
    p: {
        fontSize: '12px',
        color: '#fff',
        fontFamily: 'Arial'

    }
}

export default function Footer() {
    return (
        <div style={styles.footer}>
            <div className="container text-center">
            <img src={logoBlack} style={styles.logo}/>
            <p style={styles.p}>Todos los derechos reservados 2022</p>
                




            </div>
           



            
        </div>
    )
}
