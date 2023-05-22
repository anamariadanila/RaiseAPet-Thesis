export const validationLogin = (values) => {
  const errors = {};

  if (!values.ongCode) {
    errors.ongCode = "ONG code is required";
  } else if (!/^\d{4}\/[A-Z]\/\d{4}$/i.test(values.ongCode)) {
    errors.ongCode = "Invalid ONG code";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      "Password must contain at least one uppercase, lowercase, number and special character";
  } else if (values.password.includes(" ")) {
    errors.password = "Password must not contain spaces";
  }

  //   if (!values.address) {
  //     errors.address = "Address is required";
  //   }

  return errors;
};

export const validationRegister = (values) => {
  const errors = {};

  if (!values.ongCode) {
    errors.ongCode = "ONG code is required";
  } else if (!/^\d{4}\/[A-Z]\/\d{4}$/i.test(values.ongCode)) {
    errors.ongCode = "Invalid ONG code";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      "Must contain at least one uppercase, lowercase, number and special character";
  } else if (values.password.includes(" ")) {
    errors.password = "Password must not contain spaces";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm password must be the same as password";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(
      values.confirmPassword
    )
  ) {
    errors.confirmPassword =
      "Must contain at least one uppercase, lowercase, number and special character";
  } else if (values.confirmPassword.includes(" ")) {
    errors.confirmPassword = "Confirm password must not contain spaces";
  }

  return errors;
};

export const validationForgotPassword = (values) => {
  const errors = {};

  if (!values.ongCode) {
    errors.ongCode = "ONG code is required";
  } else if (!/^\d{4}\/[A-Z]\/\d{4}$/i.test(values.ongCode)) {
    errors.ongCode = "Invalid ONG code";
  }

  // if (!values.address) {
  //   errors.address = "Address is required";
  // } else if (!/^0x[a-fA-F0-9]{40}$/i.test(values.address)) {
  //   errors.address = "Invalid address";
  // }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Password must be between 8 and 20 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      "Must contain at least one uppercase, lowercase, number and special character";
  } else if (values.password.includes(" ")) {
    errors.password = "Password must not contain spaces";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Confirm password must be the same as password";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/.test(
      values.confirmPassword
    )
  ) {
    errors.confirmPassword =
      "Must contain at least one uppercase, lowercase, number and special character";
  } else if (values.confirmPassword.includes(" ")) {
    errors.confirmPassword = "Confirm password must not contain spaces";
  }

  return errors;
};
