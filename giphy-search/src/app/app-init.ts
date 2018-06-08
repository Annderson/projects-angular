import { KeycloakService } from 'keycloak-angular';
import { resolve } from 'url';
import { reject } from 'q';


export function initializer (keycloak: KeycloakService): () => Promise<any>{
  return(): Promise<any> =>{
    return new Promise(async (resolve, reject) => {
      try{
        await keycloak.init();
        resolve();
      }catch(error){
        reject(error);
      }
    });
  }
}
