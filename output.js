//Wed Apr 09 2025 10:22:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function hhh(t) {
  const ee = {
    "0Oo0o0O0": "a",
    "1O0bO001": "b",
    "2OoCcO2": "c",
    "3O0dO0O3": "d",
    "4OoEeO4": "e",
    "5O0fO0O5": "f",
    "6OoGgO6": "g",
    "7O0hO0O7": "h",
    "8OoIiO8": "i",
    "9O0jO0O9": "j",
    "0OoKkO0": "k",
    "1O0lO0O1": "l",
    "2OoMmO2": "m",
    "3O0nO0O3": "n",
    "4OoOoO4": "o",
    "5O0pO0O5": "p",
    "6OoQqO6": "q",
    "7O0rO0O7": "r",
    "8OoSsO8": "s",
    "9O0tO0O9": "t",
    "0OoUuO0": "u",
    "1O0vO0O1": "v",
    "2OoWwO2": "w",
    "3O0xO0O3": "x",
    "4OoYyO4": "y",
    "5O0zO0O5": "z",
    "0OoAAO0": "A",
    "1O0BBO1": "B",
    "2OoCCO2": "C",
    "3O0DDO3": "D",
    "4OoEEO4": "E",
    "5O0FFO5": "F",
    "6OoGGO6": "G",
    "7O0HHO7": "H",
    "8OoIIO8": "I",
    "9O0JJO9": "J",
    "0OoKKO0": "K",
    "1O0LLO1": "L",
    "2OoMMO2": "M",
    "3O0NNO3": "N",
    "4OoOOO4": "O",
    "5O0PPO5": "P",
    "6OoQQO6": "Q",
    "7O0RRO7": "R",
    "8OoSSO8": "S",
    "9O0TTO9": "T",
    "0OoUO0": "U",
    "1O0VVO1": "V",
    "2OoWWO2": "W",
    "3O0XXO3": "X",
    "4OoYYO4": "Y",
    "5O0ZZO5": "Z"
  };
  let n = "";
  const o = atob(t);
  for (let t = 0; t < o.length; t++) {
    let l = o[t];
    for (const [n, c] of Object.entries(ee)) if (o.slice(t, t + n.length) === n) {
      l = c, t += n.length - 1;
      break;
    }
    n += l;
  }
  return n;
}
v;