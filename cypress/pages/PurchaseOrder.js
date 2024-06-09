class PurchaseOrder{
    element={
        addPO:()=> cy.xpath("(//div[@id='root']//a)[last()-10]")
    }
    addPO(){
        this.element.addPO().click()
    }
}
export default new PurchaseOrder()