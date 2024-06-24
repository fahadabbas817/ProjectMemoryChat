import { Client, Account } from 'appwrite';
const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66792d63002989eac549');

    export const account = new Account(client);

    export default client;
