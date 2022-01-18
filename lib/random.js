export function randomId(length) {
   let result = '';
   let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

export function CustomerCode() {
   const d = new Date();
   const dateNow = d.toLocaleDateString("en-gb", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit"
   });
   const [day, month, year] = dateNow.split("/")



   const timeNow = d.toLocaleTimeString("en-gb")
   const [hour, minute, second] = timeNow.split(":");
   const time = year + month + day + hour + minute + second;
   return time;
}

export function AgeCalculation(birthday) {
   const [year,month,day]= birthday.split("-");
   const d = new Date();
   const thisYear = d.getFullYear();
   const thisMonth = d.getMonth() + 1;
   const thisDay = d.getDate();

   if (thisMonth < month) {
      return (thisYear - year - 1);
   }
   else if (thisMonth > month) {
      return (thisYear - year)
   }
   else {
      if (thisDay >= day) {
         return (thisYear - year);
      }
      else {
         return (thisYear - year - 1);
      }
   }
}

export function GetFamilyName(full_name){
   return full_name.split(" ")[0];
}
