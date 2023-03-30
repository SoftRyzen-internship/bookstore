export function formatPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, '');

  const phoneNumberPattern = /^800(\d{3})(\d{3})(\d{3})$/;

  const matchPattern = cleaned.match(phoneNumberPattern);

  if (matchPattern) {
    return `+800 ${matchPattern[1]} ${matchPattern[2]} ${matchPattern[3]}`;
  }

  return phoneNumber;
}
