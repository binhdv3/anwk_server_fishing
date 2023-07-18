const Product = require('../models/Product')
// const { mutipleMongooseToObject } = require('../util/mongoose');
// const { mongooseToObject } = require('../util/mongoose');

class productController {

    // create --> 
    create(req, res, next) {
        if (req.method == 'POST') { //post them san pham
            const product = new Product(req.body)

            product.save()
                .then(() => res.send('create successfully'))
                .catch(next)
        }
    }

    //edit -> chỉnh sửa sản phẩm 
    edit(req, res, next) {
        if (req.method == 'PUT') { //put sua san pham
            Product.updateOne({ _id: req.params.id }, req.body)
                .catch(next)
        }
    }

    //delete product
    delete(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .catch(next)
    }

    // //search product
    // search(req, res, next) {
    //     if (req.body.name_search == "") {
    //         res.redirect('/product/list_poduct')
    //     } else {
    //         Product.find({name: req.body.name_search})
    //             .then(products => {
    //                 res.render('product/list-product', {
    //                     products: mutipleMongooseToObject(products)
    //                 })
    //             })
    //             .catch(next);
    //     }
    // }

    //[GET] list san pham
    get_list_product(req, res, next) {
        Product.find({})
            .then(products => {
                res.json(products)
            })
            .catch(next)
    }
}

module.exports = new productController;