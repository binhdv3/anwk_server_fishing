const productRouter = require('./product')
const customerRouter = require('./customer')
const accountRouter = require('./account')
const oderRouter = require('./oder')
const cartRouter = require('./cart')

function router(app){

    app.use('/product' ,productRouter)
    app.use('/customer' ,customerRouter)
    app.use('/account' ,accountRouter)
    app.use('/oder', oderRouter)
    app.use('/cart', cartRouter)
    app.use('/', productRouter)
}

module.exports = router;