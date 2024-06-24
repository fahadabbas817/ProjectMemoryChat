import { Client, Account } from 'appwrite';
const client = new Client();


//   const welcomeMessage = i18n.t('code');
//     console.log(welcomeMessage)
// const {t} = useTranslation();
// const appwriteLng = t("code")


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66792d63002989eac549');
    

    

    export const account = new Account(client);

    export default client;
