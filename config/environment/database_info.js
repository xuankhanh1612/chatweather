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
        uri: 'mongodb://heroku_9vsg8r85:e3bgu3gruodbmvcng408n1k3ik@ds147668.mlab.com:47668/heroku_9vsg8r85'
    }
};