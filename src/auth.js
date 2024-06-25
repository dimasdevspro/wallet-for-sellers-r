export const isAuthenticated = (data) => {
    const loginInput = document.getElementById("login").value 
            //const passwordInput = document.getElementById("password").value         
            const loginFind = data.find(seller => seller.login === loginInput)
            // if (loginFind.login !== loginInput){
            //     const msgErrorLogin = {message: "Login don´t exist!"}
            //     console.log(msgErrorLogin)
            // }if (loginFind.password !== passwordInput){
            //     const msgErrorPassword = {message: "Password is wrong..."}
            //     console.log(msgErrorPassword)
            // }else{
            //     console.log(loginFind)

            //     }
            if (loginFind){return true}else{ return false}
            
            
}

