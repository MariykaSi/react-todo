import axios from "axios";
var md5 = require("md5");

const apiUrl = "https://uxcandy.com/~shapoval/test-task-backend/";
const developer = "Mariia";
export function getTask(page, sortField, sortDirection) {
  return axios.get(
    `${apiUrl}?developer=${developer}&page=${page}&sort_field=${sortField}&sort_direction=${sortDirection}`
  );
}

export function postTask(data) {
  const body = new FormData();
  body.append("username", data.userName);
  body.append("email", data.email);
  body.append("text", data.text);

  return axios.post(
    `https://uxcandy.com/~shapoval/test-task-backend/create?developer=${developer}`,
    body
  );
}

export function editTask(id, status, text) {
  const token = "beejee";
  const paramsString = `status=${encodeURIComponent(
    status
  )}&text=${encodeURIComponent(text)}&token=${encodeURIComponent(token)}`;
  const signature = md5(paramsString);
  const body = new FormData();
  body.append("signature", signature);

  return axios.post(
    `https://uxcandy.com/~shapoval/test-task-backend/edit/:${id}?developer=${developer}&${paramsString}`,
    body
  );
}
