import { UserDB, buildUserDB } from './user-db';

async function main() {
    console.log('User Database');
    const dbManager: UserDB = await buildUserDB();

    const user = dbManager.createUser();
    dbManager.updateUser(user, { age: 45 });
}

main().catch(error => {
    console.error('App failed with', error);
    process.exit(1);
});
