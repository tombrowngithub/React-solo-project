import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            Email: "",
            Password: "",
            ConfirmPass: "",
            Join: true
        })
    const [displayText, setDisplayText] = React.useState('')

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })


    }

    function handleSubmit(event) {
        event.preventDefault()
        if (formData.Password === formData.ConfirmPass) {
            console.log("Logging successful")
            setDisplayText(formData)
            if(formData.Join){
                console.log("Thanks for joining our newsletter!")
            }

        }else{
            console.log("Password did not match!")
        }


    }

    return (
        <div>
            <form>
                <input
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    name="Email"
                    value={formData.Email}

                />
                <br/>
                <br/>
                <input
                    type="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                    name="Password"
                    value={formData.Password}

                />
                <br/>
                <br/>
                <input
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                    name="ConfirmPass"
                    value={formData.ConfirmPass}
                />
                <br/>
                <br/>
                <input
                    type="checkbox"
                    id="join"
                    name="Join"
                    checked={formData.Join}
                    onChange={handleChange}
                />
                <label htmlFor="join">I want to join the news</label>
                <br/>
                <br/>

            </form>
            <button onClick={handleSubmit}>Sign Up</button>
            <br/>
            <br/>
            <p>Email: {displayText && formData.Email}</p>
            <p>Password: {displayText && formData.Password}</p>
            <p>Confirm Password: {displayText && formData.ConfirmPass}</p>
            <p>Joined: {displayText && "Thanks for joining our newsletter"}</p>
        </div>
    )
}
