const db = require('./conn.js');

class ParkInfo {
    constructor(id, name, address, street, city, state, picture) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.street = street;
        this.city = city;
        this.state = state;
        this.picture = picture;
    }

    static async getParkData() {
        const query = `SELECT * FROM parks;`;
        try {
            const response = await db.any(query);
            return response;
        } catch(error) {
            return error.message;
        }
    }

    static async getById(id) {
        try{
            const response = await db.one(
                `SELECT * FROM parks WHERE id = $1;`,
                [id]);
                console.log('response: ', response);
                return response;
        } catch (error) {
            return error.message;
        }
    }
}

module.exports = ParkInfo;