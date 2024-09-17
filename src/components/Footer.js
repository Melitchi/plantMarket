import { useState } from 'react'
import '../styles/Footer.css'


const Footer = () => {
    const [inputValue, setInputValue] = useState('')
    const [isInputError, setError]  = useState(false)

    const checkValue = () =>{
        console.log(inputValue)

        if(!inputValue.includes('@')){
            console.log("il manque un @")
            setError(true)
        }else{
            setError(false)
        }
        console.log(isInputError)

    }

    return (
    <footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input type='textarea' name='email' autoComplete='@gmail.com' placeholder='Entrez votre mail' value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onBlur={(e)=>{checkValue()}}/>
            {isInputError && (
                <div>🔥 Il manque un @ dans votre adresse</div>
            )}
		</footer>
        )

      
    }

    
    
        export default Footer