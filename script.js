let show = document.getElementById('show');
let buttons = document.querySelectorAll('button');
let str = "";
let isDecimal = false;
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === ".") 
    {
      if (!isDecimal) {
        str = str + e.target.innerHTML;
        isDecimal = true;
      }
    } 
    else if (e.target.innerHTML === "Ans") 
    {
      try {
        str = eval(str);
        if (isNaN(str) || !isFinite(str)) {
          str = "Error";
        }
      } catch (error) {
        str = "Error";
        console.error(error);
      }
      isDecimal = false;
    }
    else if (e.target.innerHTML === "AC") 
    {
      str = "";
      isDecimal = false;
    } 
    else if (e.target.innerHTML === "DEL") 
    {
      str = str.substring(0, str.length - 1);
      show.value = str;
      isDecimal = false;
    } 
    else 
    {
      str = str + e.target.innerHTML;
      show.value = str;
      isDecimal = false;
    }
    show.value = str;
  });
});
