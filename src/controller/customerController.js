const Customer = require('../models/Customer')
// const { mutipleMongooseToObject } = require('../util/mongoose');
// const { mongooseToObject } = require('../util/mongoose');

class customerController {

    // create --> 
    create(req, res, next) {
        if (req.method == 'POST') { //post them san pham
            const customer = new Customer(req.body)
            customer.save()
                .then(() => res.send('create successfully'))
                .catch(next)
        }
    }

    //edit -> chỉnh sửa Customer
    edit(req, res, next) {
        if (req.method == 'PUT') { //put sua san pham
            Customer.updateOne({ _id: req.params.id }, req.body)
                .catch(next)
        }
    }

    //delete Customer
    delete(req, res, next) {
        Customer.deleteOne({ _id: req.params.id })
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

    //[GET] list Customers
    get_list_customer(req, res, next) {
        Customer.find({})
            .then(customers => {
                res.json(customers)
            })
            .catch(next)
    }
}

module.exports = new customerController ;