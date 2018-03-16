// All configurations will extend these options
// ============================================
module.exports = {
    // Should we populate the DB with sample data?
    seedDB: true,

    // MongoDB connection options
    mongo: {
        options: {
            db: {
                safe: true
            }
        },
        uri: 'mongodb://heroku_tp2n1k83:12rh4clmktrfcn57js71rpr2gt@ds215709.mlab.com:15709/heroku_tp2n1k83'
    }
};