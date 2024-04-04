import { Client, Databases, Storage, Account, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);
export const account = new Account(client);
