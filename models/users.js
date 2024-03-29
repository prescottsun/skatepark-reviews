const db = require('./conn'),
    bcrypt = require('bcryptjs');

class User {
    constructor(first_name, last_name, email_address, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    async login() {
        try {
            const response = await db.one(
                `SELECT id, first_name, last_name, password FROM users WHERE email = $1;`, [this.email_address]
            );
            const isValid = this.checkPassword(response.password);
            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, id, first_name, last_name };
            } else {
                return { isValid };
            }
        } catch (err) {
            return err.message;
        }
    }

    async save() {
        try {
            // console.log('this is the save method', this);
            const response = await db.one(
                `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`,
                [this.first_name, this.last_name, this.email_address, this.password]
            );
            console.log('User has been created with the ID: ', response.id);
            return response;
        } catch(err) {
            return err.message;
        }
        
    }
}

module.exports = User;