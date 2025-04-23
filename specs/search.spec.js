const searchActions = require("../test/search/searchActions")
const productName = "Nike air zoom pegasus 35";
describe("Evershop website automation test suite", ()=>{
    it("Successfully search a valid product",async()=>{
        await searchActions.search(productName);
        await browser.pause(5000);
    }
    )
}
)