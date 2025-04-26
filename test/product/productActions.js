const productObjects = require("./productObjects");
class ProductActions {
    async selectProduct (productName){
        await productObjects.productFromList(productName).click();
    }
        async selectVariation (size,color){
            await productObjects.productVariation(size).click();
            await browser.pause(2000);
            await productObjects.productVariation(color).click();
        }
        async enterProductQty(qty){
            await productObjects.productQty.setValue(qty);
        }
        async clickAddToCartButton(){
            await productObjects.buttonAddtoCart.click();
        }
           
}
module.exports = new ProductActions;