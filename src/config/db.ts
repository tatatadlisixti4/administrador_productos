import {Sequelize} from 'sequelize'

const db = new Sequelize('postgresql://products_administrator_user:q4Whh8kTjRLdtglY1mpC6QqRlRkepsc2@dpg-culc5ltds78s73bpd4ng-a.oregon-postgres.render.com/products_administrator', {
    dialectOptions: {
        logging: false,
        ssl: {
            require: false
        }
    }
})

export default db