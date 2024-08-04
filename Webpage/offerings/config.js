// +=======================+
// | Configuration Section |
// +=======================+


/** selectarr: string[]
 * Definition: An exhaustive list of form input field names(except filters)
 * Purpose: Determine what fields are actually asked for in selectopts
 */
const selectarr = ["Company Budget", "Business Size", "Risk Tolerance", "Work Environment", 
  "Compliance", "Device Compatibility", "Account Recovery"];

/** selectopts: string[]
 * Definition: An list of options representing form fields(except filters)
 * Purpose: Map select element values to respective categories
 */
const selectopts = ["cb", "size", "rt", "we", "comp", "dc", "ar", "vendor", "method"];

/** vendorweight: number(int)
 * Definition: How important vendors are comparing to other factors
 * Purpose: Offering sorting calculation
 * Value: less important < more important
 */
const vendorweight = 5;

/** methodweight: number(int)
 * Definition: How important authentication methods are comparing to other factors
 * Purpose: Offering sorting calculation
 * Value: less important < more important
 */
const methodweight = 10;

/** vendoropts: string[]
 * Definition: An exhaustive list of available vendors for passwordless authentication methods
 * Purpose: Form vendor selection 
 */
const vendoropts = ['BehavioSec', 'IBM Trusteer', 'Nuance', 'Pindrop', 'Plurilock', 'Aculab', 'okta', 
                    'twilio sendgrid', 'validsoft', 'BioCatch', 'Aware', 'HID Global', 'yubico',
                    'PingIdentity', 'Google', 'Enquanta QuantaKey', 'AuthenTrend', 'FaceTec', 'onelogin',
                    'Microsoft', 'IDEMIA', 'DUO', 'BIO-key', 'FEITIAN Technology', 'RSA SecurID', 'twilio'];

/** methodopts: string[]
 * Definition: An exhaustive list of available passwordless authentication methods
 * Purpose: Form method selection 
 */
const methodopts = ["Behavioral", "Face", "Voice", "SMS", "Hardware", "Email", "OTP", "SSO", "Fingerprint"];

/** selectlevels: number[][]
 * Definition: A library representing form choice weights comparative to their respective category 
 * Purpose: Preferrence score calculation
 */
const selectlevels = [
  // Company Budget: 
  // [Unspecified, Low, Normal, High]
     [3, 8, 4, 2],
  // Business Size: 
  // [Unspecified, Tiny, Small, Medium, Large, Colossal]
     [5, 1, 2, 4, 6, 9],
  // Risk Tolerance:
  // [Low, Medium, High]
     [2, 5, 8],
  // Work Environment:
  // [In-person, Remote, Hybrid]
     [4, 6, 7],
  // Compliance:
  // [Unspecified, GDPR, ISO 27001, NIST, HIPAA]
     [5, 7, 4, 3, 6],
  // Device Compatibility:
  // [Not sure, Mobile, Desktop, Cross-Platform]
     [5, 4, 3, 6],
  // Account Recovery:
  // [Not sure, Security questions, Backup codes, Email verification, Time-Limited recovery tokens]
     [5, 2, 6, 3, 6]
];

/** selecthelper: number[][]
 * Definition: A lookup table representing impact of form choices from its respective categories
 * Purpose: Preferrence score calculation
 * Format: [Cost, Usability, Security]
 */
const selecthelper = [
  // Company Budget:
  [-3, 0, 0],
  // Business Size:
  [-2, 0, -0.5],
  // Risk Tolerance:
  [1, 0, 2],
  // Work Environment:
  [-2, 0, -1],
  // Compliance:
  [-2, 0, 1.5],
  // Device Compatibility:
  [0, 3, -0.5],
  // Account Recovery:
  [-0.5, 2, 1.5]
]; 

/** formsum: number[]
 * Definition: A lookup table of base values for form input quantification
 * Purpose: Preferrence score calculation
 * Format: [Cost, Usability, Security]
 */
const formsum = [77, 30, 35];

/** formoffset: number[]
 * Definition: A lookup table of offset values before final score normalization
 * Purpose: Preferrence score calculation
 * Format: [Cost, Usability, Security]
 */
const formoffset = [85, 2, 7];


// +==============================+
// | End of Configuration Section |
// +==============================+