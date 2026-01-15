function SignUp() {
    return (
        <>
            <form className="border border-amber-600 w-100 h-90 flex flex-col items-center justify-between">
                <h2>Sign Up</h2>
                <div className="border flex gap-1 p-2">
                    <div className="border h-10">PK +92</div>
                    <input className="border w-70 h-10" type="phone" placeholder="Please enter your phone number" />
                </div>
                <div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">By creating and/or using your account, you agree to our Terms of Use and Privacy Policy.</label>
                </div>
                <div className="border flex">
                    <img src="#" alt="whatsapp-logo" />
                    <p>Send code via Whatsapp</p>
                </div>
                <p>Already have an account? Log in Now</p>
                <p>Or, sign up with</p>
            </form>
        </>
    )
}

export default SignUp;