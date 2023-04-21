import prisma from "../db";
import { createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.sendStatus(500);
    res.end();
  }
};
