import app from './app.js'
import { sequelize } from './database/database.js'

async function main() {
    try {
        await sequelize.sync({force:false});
        app.listen(4000);
        console.log('Server is listening on porto', 4000);
    } catch (error) {
        //console.error("Unable to connect to the database");
        console.error("Unable to connect to the database:", error);
    }
}
 
main();