export const required = value => (value ? undefined : "required field");

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "wrong email"
    : undefined;
