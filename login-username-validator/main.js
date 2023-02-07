const usernames = ["abner","abner1", "abner2"];

const spinner = document.getElementById("spinner");
const alert = document.getElementById("alert");

const update = (name) => {
    spinner.classList.remove("visible");

    const usernameExists = usernames.some(u => u === name)

    if (usernameExists) {
        alert.classList.add("visible");
      } else {
        alert.classList.remove("visible");
      }

}
  
const debounce = (callback, time) => {
let interval;
return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
    callback.apply(null, args);
    }, time);
};
};
  
const handleStartTyping = () => {
spinner.classList.add("visible");
};

const handleChange = debounce((input) => {
const { value } = input.target;

update(value);
}, 500);