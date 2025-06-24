export const checkValidData = (email,password,username) => {

    // use regex condition for validation 
    const isUserValid = /^[A-Za-z]{3,20}$/.test(username);
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email); 
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(!isUserValid) return "UserName not valid";

    return null

}