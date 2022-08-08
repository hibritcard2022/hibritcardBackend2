// check if the email is validate

const isEmail = (email) => {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEX)) {
        return true;
    } else {
        return false;
    }
}

// is the string enter is empty
const isEmpty = (string) => {
    if (string.trim() === "") {
        return true
    } else {
        return false
    }
}



// signUp Information from here

exports.validateSignUpData = (data) => {

    // check if the data is Empty

    let hatalar = {} //hataların objesi

    if (isEmpty(data.eMail)) {

        hatalar.eMail = "E-mail can't be Empty, Please recheck";

    } else if (!isEmail(data.eMail)) {
        hatalar.eMail = "Please Enter a valid Email!"
    }

    if (isEmpty(data.publicName)) {
        hatalar.publicName = "Enter Your Name"
    }

    if (isEmpty(data.publicSurname)) {
        hatalar.publicSurname = "Enter Your SurName"
    }

    if (isEmpty(data.password)) {
        hatalar.password = "Can't be Empty"
    }



    // if (minLength(data.password)) {
    //     hatalar.password = "Şifre en az 6 karakterden oluşmalıdır."

    // }


    if (data.password !== data.confirmPassword) {
        hatalar.confirmPassword = "Passwords dont match!"
    }
    if (isEmpty(data.userHandleName)) {
        hatalar.userHandleName = "Can't be Empty!"
    }

    return {
        hatalar,
        valid: Object.keys(hatalar).length === 0 ? true : false
    }

}

//signUp card validation part
exports.validateRegisterCardRefer = (data) => {

    // check if the data is Empty

    let erreorReferRegister = {} //hataların objesi

    if (isEmpty(data.eMail)) {

        erreorReferRegister.eMail = "E-mail can't be Empty, Please recheck";

    } else if (!isEmail(data.eMail)) {
        erreorReferRegister.eMail = "Please Enter a valid Email!"
    }

    if (isEmpty(data.publicName)) {
        erreorReferRegister.publicName = "Enter Your Name"
    }

    if (isEmpty(data.publicSurname)) {
        erreorReferRegister.publicSurname = "Enter Your SurName"
    }

    if (isEmpty(data.password)) {
        erreorReferRegister.password = "Can't be Empty"
    }



    // if (minLength(data.password)) {
    //     hatalar.password = "Şifre en az 6 karakterden oluşmalıdır."

    // }


    if (data.password !== data.confirmPassword) {
        erreorReferRegister.confirmPassword = "Passwords dont match!"
    }
    if (isEmpty(data.userHandleName)) {
        erreorReferRegister.userHandleName = "Can't be Empty!"
    }

    if (isEmpty(data.secretkod)) {
        erreorReferRegister.secretkod = "cant't be Empty!!"
    }

    return {
        erreorReferRegister,
        valid: Object.keys(erreorReferRegister).length === 0 ? true : false
    }


}

//valid login Data
exports.validateLoginData = ((data) => {
    let errorLogin = {}
        //kontrol eğer gönderilen verilen boşsa kontrol yap
    if (isEmpty(data.eMail)) {
        errorLogin.eMail = "This Field can't be Empty!!"
    }
    if (isEmpty(data.password)) {
        errorLogin.password = "This field can't be Empty!!"
    }
    return {
        errorLogin,
        valid: Object.keys(errorLogin).length === 0 ? true : false
    }

})

// validation with the card url login

exports.validateLoginWithCardUrl = ((data) => {
    let errorLoginCard = {}
        //kontrol eğer gönderilen verilen boşsa kontrol yap
        // if (isEmpty(data.eMail)) {
        //     errorLoginCard.eMail = "This Field can't be Empty!!"
        // }
        // if (isEmpty(data.password)) {
        //     errorLoginCard.password = "This field can't be Empty!!"
        //}
    if (isEmpty(data.secretkod)) {
        errorLoginCard.secretkod = "This field can't be Empty!!"
    }
    if (isEmpty(data.verificationCode)) {
        errorLoginCard.verificationCode = "This field can't be Empty!!"
    }

    return {
        errorLoginCard,
        valid: Object.keys(errorLoginCard).length === 0 ? true : false
    }

})