import { infoValidation } from "../../Model/validatorModel";
import { UserModel } from "../../Model/userModel";
import bcrypt from "bcrypt";
import { saltRounds } from "../../server";

export async function registerUser(req: any, res: any) {
  try {
    const { userName, email, password, rePassword } = req.body;

    const invalidUsername = infoValidation.isNameValid(userName);
    const invalidEmail = await infoValidation.isEmailValid(email);
    const invalidPassword = infoValidation.isPasswordValid(password);
    const invalidRePassword = infoValidation.isRePasswordValid(
      rePassword,
      password
    );

    if (
      invalidUsername ||
      invalidEmail ||
      invalidPassword ||
      invalidRePassword
    ) {
      throw new Error(
        "not valid" +
          invalidUsername +
          invalidEmail +
          invalidPassword +
          invalidRePassword
      );
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new UserModel({
      userName: userName,
      email: email,
      password: hashedPassword,
    });
    await user.validate();

    user.save();

    console.log("OK!");
    return res.json({ message: "works !" });
  } catch (error: any) {
    console.error(error);
    return res.status(500).send({ error: error.message });
  }
}
