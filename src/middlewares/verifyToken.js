import status from "http-status";
import firebaseAdmin from "firebase-admin";

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_ADMIN_SECRET, "base64").toString(
    "utf8"
  )
);

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(status.UNAUTHORIZED).json({
      success: false,
      message: status[status.UNAUTHORIZED],
    });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = await firebaseAdmin.auth().verifyIdToken(token);

    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(status.FORBIDDEN).json({
      success: false,
      message: status[status.FORBIDDEN],
    });
  }
};
