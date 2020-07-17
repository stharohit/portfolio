import mailjet from "node-mailjet";

const connection = mailjet.connect(
  process.env.REACT_APP_SMPT_API_KEY,
  process.env.REACT_APP_SMPT_SECRET_KEY,
);

export default connection;
