const decodeTheRing = function (s, p) {
  // Handle the case where p is greater than the length of s
  if (s.length === 0) return '';
  
  const n = s.length;
  const effectiveIndex = p % n; // Ensure we stay within bounds
  return s[effectiveIndex]; // Return the character at the effective index
};

module.exports = decodeTheRing;
