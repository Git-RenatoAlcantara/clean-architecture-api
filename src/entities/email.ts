export class Email {
   static validate(email: string): boolean {
    const MAX_DOMAIN_LENGTH = 63
    const emailRegex = 
        /^[-!#$%&'*+0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

       if(!email){
        return false
       }

       if(email.length > 320){
        return false
       }

       if(!emailRegex.test(email)){
        return false
       }

       const [local, domain] = email.split('@')
    
       if(local.length > 64 || local.length === 0){
        return false
       }
       if(domain.length > 255 || domain.length === 0){
        return false
       }
       const domainParts = domain.split('.')
       const isDomainMaxLength = domainParts.some(part => part.length > MAX_DOMAIN_LENGTH)
       if(isDomainMaxLength){
        return false
       }
       return true;
   }
}