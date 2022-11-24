import {_nameToSlug} from '../util/digiex'

export function _saveImages(product_name,images){
    var data =[]
    images.forEach(item => {
        data.push(item.image)
    });

    localStorage.setItem(_nameToSlug(product_name), JSON.stringify(data))
}

export function _getImages(product_name){
    return JSON.parse(localStorage(_nameToSlug(product_name)||[]))
}