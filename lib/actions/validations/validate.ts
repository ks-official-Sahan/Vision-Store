export const validateEmail = (email: string | undefined | null) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !email
    ? "Please fill in the Email"
    : !emailRegex.test(email)
    ? "Invalid Email"
    : null;
};

export const validateMobile = (mobile: string | undefined | null) => {
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;
  return !mobile
    ? "Please fill in the Mobile Number"
    : !mobileRegex.test(mobile)
    ? "Invalid Mobile Number"
    : null;
};

export const validatePassword = (
  password: string | undefined | null,
  cpassword?: string | undefined | null
) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return !password
    ? "Please fill in the Password"
    : cpassword
    ? matchPassword(password, cpassword)
    : !passwordRegex.test(password)
    ? "Password need to contain at least 8 characters, one uppercase letter, one lowercase letter, one number, one special character"
    : null;
};

export const matchPassword = (
  password: string | undefined | null,
  cpassword: string | undefined | null
) => {
  return password === cpassword ? null : "Passwords does not match";
};

export const validateAvailability = (
  data: any,
  name?: string | undefined | null
) => {
  return data ? null : `Please fill in the ${name ? name : "Field"}`;
};

export const validateFiles = (
  data: Array<any>,
  name?: string | undefined | null
) => {
  return data.length > 0
    ? null
    : `Select resources for the ${name ? name : "Field"}`;
};
