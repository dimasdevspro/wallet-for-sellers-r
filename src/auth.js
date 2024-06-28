export const isAuthenticated = (data) => {
   
    const loginInput = document.getElementById("login").value 
            const passwordInput = document.getElementById("password").value         
            const loginFind = data.find(seller => seller.login === loginInput)
            const passwordFind = data.find(seller => seller.password === passwordInput)
            
            if (loginFind && passwordFind) {
                console.log("Login sucessfuly!")  
                console.log(loginFind)
                return true         
            }else {
                console.log("Login or password is wrong!") 
                return false
            }


            
}

