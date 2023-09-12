export const Validate = (data, type) => {

    const errors = [];

    if (type === "Activation") {

        if (!data.name) {
            errors.name = "نام خود را وارد کنید!"
        } else {
            delete errors.name;
        }

        if (!data.phonenumber) {
            errors.phonenumber = "شماره تلفن خود را وارد کنید!"
        } else {
            delete errors.phonenumber;
        }
        
        if (!data.cardnumber) {
            errors.cardnumber = "شماره کارت خود را وارد کنید!"
        } else {
            delete errors.cardnumber;
        }
        
        if (!data.amount) {
            errors.amount = "مبلغ کارت را وارد کنید!"
        } else {
            delete errors.amount;
        }

    }

    return errors;

}