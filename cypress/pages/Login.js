class Login{
    elements={
        username:()=> cy.get("[name='username']"),
        password:()=> cy.get("[name='password']"),
        submit:()=> cy.get("[type='submit']")  
    }
    enterUserName(name){
        this.elements.username().clear().type(name)
    }
    enterPassword(pass){
        this.elements.password().type(pass)
    }
    submit(){
        this.elements.submit().click()
    }
}
export default new Login();
