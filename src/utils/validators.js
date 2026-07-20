export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    email
  );
}

export function validateRequired(value) {
  return Boolean(
    String(value || "").trim()
  );
}

export function validateSkillLevel(level) {
  const number = Number(level);

  return (
    !Number.isNaN(number) &&
    number >= 0 &&
    number <= 100
  );
}

export function validateUrl(url) {
  if (!url) {
    return true;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}