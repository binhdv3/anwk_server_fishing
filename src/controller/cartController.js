const Cart = require('../models/Cart')
// const { mutipleMongooseToObject } = require('../util/mongoose');
// const { mongooseToObject } = require('../util/mongoose');

class cartController {

    // create --> 
    create(req, res, next) {
        if (req.method == 'POST') { //post them oder
            const cart = new Cart(req.body)
            cart.save()
            .then(() => res.json({ 
                "success" : 1,
                "message" : "Thêm vào giỏ hàng thành công!"
             }))
            .catch((error)=> {
                res.json({
                    "success" : 0,
                    "message" : "create fail!"
                })
            })
        }
    }

    //edit -> chỉnh sửa account
    edit(req, res, next) {
        if (req.method == 'PUT') { //put sua Oder
            Cart.updateOne({ _id: req.params.id }, req.body)
                .catch(next)
        }
    }

    //delete Account
    delete(req, res, next) {
        Cart.deleteOne({ _id: req.params.id })
        .then(() => res.json({
            "success" : 1,
            "message" : "Xoá khỏi giỏ thành công!"
         }))
        .catch((error)=> {
            res.json({
                "success" : 0,
                "message" : "delete fail!"
            })
        })
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
    get_list_cart(req, res, next) {
        Cart.find({})
            .then(carts=> {
                res.json(carts)
            })
            .catch(next)
    }
}

module.exports = new cartController;