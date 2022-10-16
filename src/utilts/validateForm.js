export const validateName = (name) => {
  if (name.length < 2) return true;
  else return false;
};

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validatePhone = (phone) => {
  if (phone.indexOf("X") !== -1) return true;
  else return false;
};

export const checkEmpty = (
  name,
  email,
  phone,
  setNameErr,
  setEmailErr,
  setPhoneErr
) => {
  let n,
    e,
    p = false;

  if (name === "") {
    setNameErr(true);
    n = true;
  }
  if (email === "") {
    setEmailErr(true);
    e = true;
  }
  if (phone === "") {
    setPhoneErr(true);
    p = true;
  }

  if (n || e || p) {
    return true;
  }
  return false;
};
