import {browser, element, by } from 'protractor';


 
describe('Mis Tests', ()=>{
    
    
    
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");

    });
    //creación de prueba 1
    it("Existe boton de cerrado de sesion", ()=>{
        
        expect(element(by.css(".boton ion-button")).getText()).toContain("Cerrar sesion");
    });  
    it("existe boton de registro",()=>{
        
        expect(element(by.css(".boton ion-button")).getText()).toContain("Registrarse");
    });
    it("La page de login se muestra por defecto", () => {
        expect(element(by.css(".tab-selected ionlabel")).getText()).toContain("Login");
    });
    
       
    
       
    
       
       

    

});


 















