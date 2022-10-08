import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DataService from "../services/dataService"
import "../components/register.css"


const Register = () => {
    const [user,setUser] = useState({
        "email_provider": "@gmail.com"
    })
    const [loading, setLoading] = useState(false)

    let  navigate = useNavigate()

    const onChange = (e) => {
        let name = e.target.name
        let val = e.target.value

        setUser(prev => ({...prev, [name]:val}))
    }

    const saveUser = async() => {
        setLoading(true)
        
        // need to add validation to ensure user enters a valid email address

        if (!user.user_password || !user.user_re_password || !user.user_email || !user.user_name){
            fieldsError()
            return
        }
        if (user.user_password !== user.user_re_password){
            fieldsError()
            return
        }

        if (user.user_password.length < 6){
            setLoading(false)
            fieldsError()
        }else{
            let copy = {...user}
            copy['user_re_password'] = ""
            let updatedEmail = user['user_email'] + user['email_provider']
    
            copy['user_email'] = updatedEmail
            console.log(updatedEmail)
            console.log(copy)
    
            let service = new DataService()
            await service.postUser(copy)
    
            let path = ('/')
            navigate(path)
        }

    }

    const cancel = () => {
        let path = "/"
        navigate(path)
    }

    const fieldsError = () => {
        let fields = document.querySelectorAll('.error-field')

        fields.forEach(field => {
            field.classList.add("error")
        })
    }

    return (
        <div className="register">
            {loading &&
                <div className="loading-container container">
                    <p className="loading-message">Waking the server up from its nap... Please wait...</p>
                </div>
            }
            <h1 className="header">Register</h1>
            <div className="container">
                <div className="form">
                    <input type="text" name="user_email" className="error-field input email-field" onChange={onChange} placeholder='Enter Your Email' />
                    <select name="email_provider" className="input email-domain" onChange={onChange}>
                        <option value="@gmail.com">@gmail.com</option>
                        <option value="@outlook.com">@outlook.com</option>
                        <option value="@aol.com">@aol.com</option>
                        <option value="@icloud.com">@icloud.com</option>
                        <option value="@yahoo.com">@yahoo.com</option>
                        <option value="@hotmail.com">@hotmail.com</option>
                        <option value="@protonmail.com">@protonmail.com</option>
                    </select>
                    <input type="text" name="user_name" className="error-field input reg-field" onChange={onChange} placeholder='Create a User Name' />
                    <input type="password" name="user_password" className="error-field input reg-field" onChange={onChange} placeholder='Enter a Password' />
                    <input type="password" name="user_re_password" className="error-field input reg-field" onChange={onChange} placeholder='Re Enter Password' />
                </div>
                <div className="registration-instructions-container">
                    <div className="password-requirements-label">Password must be at least 6 characters.</div>
                    <div className="email-warning-label">You must enter a valid email or your account information will not be recoverable.</div>
                </div>
                <div className="warning">NOTE: It may take several seconds for the server to respond. Please be patient.</div>
                <div className="btn-container">
                    <button className="btn" onTouchStart={saveUser} onClick={saveUser}>Register</button>
                    <button className="btn" onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Register