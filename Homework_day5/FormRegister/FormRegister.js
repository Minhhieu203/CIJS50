const $template = document.getElementById('template-form-register');

class FormRegister extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$name = this.shadowRoot.getElementById('name');
        this.$email = this.shadowRoot.getElementById('email');
        this.$password = this.shadowRoot.getElementById('password');
        this.$passwordCom = this.shadowRoot.getElementById('password-confirmation');
        this.$formRegister = this.shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit = (event) =>
        {
            event.preventDefault();
            this.register();
        } 
    }
    register() {
        let email = this.$email.value;
        let name = this.$name.value;
        let password = this.$password.value;
        let passwordCom = this.$passwordCom.value;

        console.log(name, email, password, passwordCom);

    if(this.validate(name, email, password, passwordCom))
    {
        alert("Đăng kí thành công");
    }
    }
    validate(name, email, password, passwordCom)
    {
        let isPassed = true;
        if(name == "")
        {
            this.$name.error = "Nhập vào tên";
            isPassed = false;
        }else {
            this.$name.error = "";
        }

        if(email == '')
        {
            this.$email.error = "Nhập vào email";
            isPassed = false;
        }else 
        {
            this.$email.error = "";
        }
        if(password == '')
        {
            this.$password.error = "Nhập vào mật khẩu";
            isPassed = false;
        }else 
        {
            this.$password.error = "";
        }
        if(passwordCom == '' || passwordCom != password)
        {
            this.$passwordCom.error = "Nhập vào mật khẩu";
            isPassed = false;
        }else 
        {
            this.$passwordCom.error = "";
        }
        return isPassed;
    }
    get value() {
        return this.$input.value;
    }

    set error(message)
    {
        this.setAttribute('error', message);
    }
}

window.customElements.define("form-register", FormRegister);