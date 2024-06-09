import PurchaseOrder from "../pages/PurchaseOrder"
describe('PO', () => {
     let data
     before(()=>{
      cy.fixture('login').then((userdata)=>{
         data=userdata
      }) 
        
     })

     it('Add PO',()=>{
      cy.Login(data.credential.username, data.credential.password)
      PurchaseOrder.addPO()
     })
})