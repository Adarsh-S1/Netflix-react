import { client } from "./axios";
export function verifyLogin (history) {
  client
    .get("/verifylocallogin")
    .then((res) => {
        if (res.data == "unauthenticated") {
            localStorage.clear();
}
    })
    .catch((err) => {
      console.log(err);
    });
};
