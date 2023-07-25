const Account = require('../models/Account')
// const { mutipleMongooseToObject } = require('../util/mongoose');
// const { mongooseToObject } = require('../util/mongoose');

class accountController {

    // create --> 
    create(req, res, next) {
        if (req.method == 'POST') { //post them san pham
            const account = new Account(req.body)
            account.save()
                .then(() => res.send('create successfully'))
                .catch(next)
        }
    }

    //edit -> chỉnh sửa account
    edit(req, res, next) {
        if (req.method == 'PUT') { //put sua Account
            Account.updateOne({ _id: req.params.id }, req.body)
                .catch(next)
        }
    }

    //delete Account
    delete(req, res, next) {
        Account.deleteOne({ _id: req.params.id })
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
    get_list_account(req, res, next) {
        Account.find({})
            .then(accounts=> {
                res.json(accounts)
            })
            .catch(next)
    }
}

module.exports = new accountController;