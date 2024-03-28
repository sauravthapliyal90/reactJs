import confi from '../confi/confi'
import { Client, Account, ID } from "appwrite";

class AuthServices{
   client = new Client()
   account
   constructor(){
     this.client
     .setEndpoint(confi.appwriteUrl)
     .setProject(confi.appwriteProjectId)

     this.account = new Account(this.client)
   }

   async createAccount({email, password, name}){
     try {
        const userAccount = await this.account.create(ID.unique, email, password, name)
        if (userAccount) {
            //call another method
            return this.login(email, password)
        }else{
            return userAccount
        }
     } catch (error) {
        throw error;
     }
   }

   async login({email, password}){
    try {
        await this.account.createEmailPasswordSession(email, password) 
    } catch (error) {
        throw error;
    }
   }

   async getCurrentUser(){
    try {
       return await this.account.get();
    } catch (error) {
        throw error
    }
    return null;
   }

   async logout(){
      try {
        await this.account.deleteSessions()
      } catch (error) {
        throw error;
      }
   }

}

const authServices = new AuthServices()

export default authServices;
