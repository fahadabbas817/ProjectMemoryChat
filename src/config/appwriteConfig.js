import { Client, Account } from 'appwrite';
const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6642504a0019040d9681');

    export const account = new Account(client);

    export default client;
