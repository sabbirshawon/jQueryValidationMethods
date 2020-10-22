$(document).ready(function() {

    $.validator.addMethod("emailValid", function(value)  {
        if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
            return true;
        }
        return false;
    }, "Email address is not valid");

    $.validator.addMethod("zipcode", function(value, element) {
        return this.optional(element) || /^\d{5}(?:-\d{4})?$/.test(value);
    }, "Please enter a valid USA postcode");

    $.validator.addMethod("phoneValidUSA", function(value, element) {
        return this.optional(element) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(value);
    });

    $.validator.addMethod('mobileValidUK', function(phone_number, element) {
        return this.optional(element) || phone_number.length > 9 &&
             phone_number.match(/^((0|\+44)7(0|4|5|6|7|8|9){1}\d{2}\s?\d{6})$/);
    }, 'Please specify a valid UK mobile number');

    $.validator.addMethod('CanadaPostalCode', function (value) { 
        return /^((\d{5}-\d{4})|(\d{5})|([A-Z]\d[A-Z]\s\d[A-Z]\d))$/.test(value); 
    }, 'Please enter a valid US or Canadian postal code.');
    
    $.validator.addMethod("phoneValidUSA", function(value, element) {
        return this.optional(element) || /^(?:\+88|01)?(?:\d{11}|\d{13})$/.test(value);
    }, 'Please specify a valid BD mobile number');

});
