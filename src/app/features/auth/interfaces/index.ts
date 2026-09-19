interface IRegisterAdmin {
  email: string;
  password: string;
  fullName: string;
  confirmPassword: string;
}

interface ILoginAdmin {
  email: string;
  password: string;
}
interface IResetPassword {
  newPassword: string;
  confirmPassword: string;
}

interface IForgotPassword {
  email: string;
}
