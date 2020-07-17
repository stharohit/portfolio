import mailjet from "node-mailjet";

const sendEmail = async (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  const connection = await mailjet.connect(
    process.env.REACT_APP_SMPT_API_KEY,
    process.env.REACT_APP_SMPT_SECRET_KEY
  );
  connection
    .post("send", { version: "v3.1" })
    .request({
      Messages: [
        {
          From: {
            Email: email,
            Name: name,
          },
          To: [
            {
              Email: "stha.rht028@gmail.com",
              Name: "Rohit Man Shrestha",
            },
          ],
          Subject: subject,
          TextPart: message,
          HTMLPart: `${message}`,
        },
      ],
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default sendEmail;
