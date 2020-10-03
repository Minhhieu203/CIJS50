const $template = document.getElementById('template-form-login');

class FormLogin extends HTMLElement
{
    constructor() 
    {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$email = this.shadowRoot.getElementById('email');    
        this.$password = this.shadowRoot.getElementById('password');
        this.$formLogin = this.shadowRoot.querySelector('.form-login');
        this.$formLogin.onsubmit = (event) =>
        {
            event.preventDefault();
            this.login();
        }
    }
    login() 
    {
        let email = this.$email.value;
        let password = this.$password.value;

        console.log(email, password);
    if(this.validate(email, password))
    {
        alert("Đăng nhập thành công");
    }
    }
    validate(email, password)
    {
        let isPassed = true;
        if(email = '')
        {
            this.$email.error = "Nhập vào email";
            isPassed = false;
        }
        else
        {
            this.$email.error = "";
        }
        if(password = '')
        {
            this.$password.error = "Nhập vào mật khẩu";
            isPassed = false;
        }
        else
        {
            this.$password.error = "";
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

window.customElements.define("form-login", FormLogin);