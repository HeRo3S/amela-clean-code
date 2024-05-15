function isEligible(age, hasConsent) {
  if (age > 18 && hasConsent === true) {
    return true;
  } else {
    return false;
  }
}
