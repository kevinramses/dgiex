import { _getImages } from "../util/imagesaver"

export default class DigiExFactory{
    constructor(contract){
        this.contract = contract
    }
    _address(){
        return this.contract.address
    }

    async _getUser(account){
        let user = await this.contract.getUser(account)

        return {
            name:user.name,
            contact:user.contact,
            updated:user.updated,
            total_products:user.total_products,
            products:user.products
        }
    }

    async _getUserProductsIds(account) {
        return (await this._getUser(account)).products
    }

    async _getProduct(product_id) {
        let product = await this.contract.getProduct(product_id)

        return {
            id: product_id,
            name: product.name,
            desc: product.desc,
            section: product.section,
            price: product.price,
            owner: product.owner,
            reserved_by: product.reserved_by,
            images: _getImages(product.name)
        }
    }

    async _getProducts() {
        let products = await this.contract.getProducts()
        return this.mapProducts(products)
    }

    async _totalUsers() {
        return (await this.contract.totalUsers()).toNumber()
    }

    // async _totalProducts() {
    //     return (await this._getProducts()).length
    // }

    async _buyProduct(product_id, from) {
        return await this.contract.buyProduct(product_id, { from })
    }

    async _updateUserContact(contact, from) {
        return this.contract.updateUserContact(contact, { from })
    }

    async _updateProductPrice(product_id,price,from){
        return await this.contract.updateProductPrice(product_id,price,{from})
    }

    async _addProduct(name,desc,section,price,from){
        return await this.contract.addProduct(name,desc,section,price,{from})
    }

    async _percentValue(amount ,from){
        return await this.contract.percentValue(amount,{from})
    }

    async _setSecureAddPercent(percent,from){
        return await this.contract.setSecureAddPercent(percent,{from})
    }

    mapProducts(products) {
        return products.map((product, product_id) => {
            return {
                id: product_id,
                name: product.name,
                desc: product.desc,
                section: product.section,
                price: product.price,
                owner: product.owner,
                reserved_by: product.reserved_by,
                images: _getImages(product.name)
            }
        })
    }


}