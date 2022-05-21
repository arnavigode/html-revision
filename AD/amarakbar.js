/**
 * Amar is a singer, lives in Goa.

Akbar is a chef, lives in Mumbai.

Anthony is a Magician, lives in Kashmir.


 */

const amar = {
    name: "Amar",
    skill: "Singer", 
    location: "Goa"
  };
  const akbar = {
    name: "Akbar",
    skill: "Chef", 
    location: "Mumbai"
  };
  const anthony = {
    name: "Anthony",
    skill: "Magician", 
    location: "Kasmir"
  };
  function nameis() {
      return this.name
  }
  function skillof() {
      return this.skill
  }
  var ans = ""
  
  ans = ans + nameis.call(amar) + ": " + skillof.call(akbar);
  console.log(ans)