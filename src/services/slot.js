import axios from "axios";

const serverUrl = process.env.REACT_APP_BACK_END_SERVER_URL;
const slotPath = process.env.REACT_APP_BACK_END_SLOT_PATH;

const book = async options => {
  const params = {
    url: serverUrl + slotPath,
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    data: options
  };
  const res = await axios(params);
  console.log('res', res);
  return res;
};

const all = async () => {
  const params = {
    url: serverUrl + slotPath,
    method: "GET"
  };
  return await axios(params);
};

const find = async day => {
  const params = {
    url: serverUrl + slotPath + "/" + day,
    method: "GET"
  };
  return await axios(params);
}

export default { book, all , find};
