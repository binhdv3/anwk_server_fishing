const Oder = require('../models/Oder')
// const { mutipleMongooseToObject } = require('../util/mongoose');
// const { mongooseToObject } = require('../util/mongoose');

class oderController {

    // create --> 
    create(req, res, next) {
        if (req.method == 'POST') { //post them oder
            const oder = new Oder(req.body)
            oder.save()
            .then(() => res.json({ 
                "success" : 1,
                "message" : "Đặt hàng thành công !"
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
            Oder.updateOne({ _id: req.params.id }, req.body)
                .catch(next)
        }
    }

    //delete Account
    delete(req, res, next) {
        Oder.deleteOne({ _id: req.params.id })
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
    get_list_oder(req, res, next) {
        Oder.find({})
            .then(oders=> {
                res.json(oders)
            })
            .catch(next)
    }
}

module.exports = new oderController;