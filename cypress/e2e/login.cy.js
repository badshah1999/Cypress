import Login from "../pages/login"
describe('Login', () => {
    let data;
    before(()=>{
        cy.fixture('login').then((userdata)=>{
            data=userdata
        })
    })
    it('valid creds',()=>{
        cy.visit('/login',{failOnStatusCode:false})
        Login.enterUserName(data.credential.username)
        Login.enterPassword(data.credential.password)
        Login.submit()
    })
})