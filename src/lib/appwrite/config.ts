import {Client, Account, Databases, Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    // projectId: ,
    databaseId: '65a75ea0a30b8b908843',
    storageId: '65a75e54bb999d8df156',
    userCollectionId: '65a75f51e4a83c2c3f44',
    postCollectionId: '65a75f0ac90ef1d2b336',
    savesCollectionId: '65a75f966910af6ead26'
}

export const client = new Client();
client.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65a75d7edad3a03e0944');



export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);