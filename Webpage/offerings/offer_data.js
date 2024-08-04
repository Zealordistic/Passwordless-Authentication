const offers = [
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "Behavioral",
        "benefits": [
            "Continuous monitoring and adaptive risk scoring",
            "User friendly experiences with low frictions",
            "Enhanced security without overreliance on static factors"
        ],
        "drawbacks": [
            "Limited behavioral analytics",
            "Dependency on other risk factors"
        ],
        "implementation": 9,
        "implementationReason": "no extra step needed, user behaviors are automatically captured and analyzed",
        "cost": 6,
        "costReason": "up to $6 per user per month, while other services like OTP and SSO is also included",
        "usability": 9,
        "usabilityReason": "only an app is needed",
        "security": 6,
        "securityReason": "relatively low accuracy causes potential false positives / negatives"
    },
    {
        "name": "BioCatch",
        "logo": "logos/biocatch.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "Behavioral",
        "benefits": [
            "Behavioral biometrics expertise",
            "Dynamic and adaptive authentication",
            "Risk-based authentication and fraud detection"
        ],
        "drawbacks": [
            "Integration complexity",
            "User privacy and accuracy concerns"
        ],
        "implementation": 9,
        "implementationReason": "no extra step needed, user behaviors are automatically captured and analyzed",
        "cost": 5,
        "costReason": "different solution components cost differently",
        "usability": 8,
        "usabilityReason": "depends on solutions, setup procedures can vary",
        "security": 7,
        "securityReason": "relatively low accuracy causes potential false positives / negatives"
    },
    {
        "name": "BehavioSec",
        "logo": "logos/behaviosec.png",
        "link": "https://risk.lexisnexis.com/products/behaviosec",
        "method": "Behavioral",
        "benefits": [
            "High accuracy and low false positives",
            "Continuous authentication",
            "Wide range of use cases and integrations"
        ],
        "drawbacks": [
            "Pricing structure",
            "Customization and flexibility"
        ],
        "implementation": 8.5,
        "implementationReason": "no extra step needed, user behaviors are automatically captured and analyzed",
        "cost": 5,
        "costReason": "detailed pricing not available on website, different solution components cost differently",
        "usability": 7.5,
        "usabilityReason": "depends on solutions, setup procedures can vary",
        "security": 7.5,
        "securityReason": "relatively low accuracy causes potential false positives / negatives"
    },
    {
        "name": "IBM Trusteer",
        "logo": "logos/ibm.svg",
        "link": "https://www.ibm.com/trusteer",
        "method": "Behavioral",
        "benefits": [
            "Integration with IBM security ecosystem",
            "Comprehensive fraud detection capabilities",
            "Adaptive protection and continuous monitoring"
        ],
        "drawbacks": [
            "Integration complexity",
            "Resource intensiveness"
        ],
        "implementation": 7,
        "implementationReason": "no extra step needed, user behaviors are automatically captured and analyzed",
        "cost": 4.5,
        "costReason": "detailed pricing not available on website, different solution components cost differently",
        "usability": 7,
        "usabilityReason": "depends on solutions, setup procedures can vary",
        "security": 6.5,
        "securityReason": "relatively low accuracy causes potential false positives / negatives"
    },
    {
        "name": "Plurilock",
        "logo": "logos/plurilock.png",
        "link": "https://plurilock.com/products/defend/",
        "method": "Behavioral",
        "benefits": [
            "Continuous authentication",
            "Adaptive security and risk-based authentication",
            "Tranparent user experience"
        ],
        "drawbacks": [
            "Integration challenges",
            "Customization limitation and scalability concerns"
        ],
        "implementation": 6.5,
        "implementationReason": "no extra step needed, user behaviors are automatically captured and analyzed",
        "cost": 5,
        "costReason": "detailed pricing not available on website, different solution components cost differently",
        "usability": 6.5,
        "usabilityReason": "depends on solutions, setup procedures can vary",
        "security": 6.5,
        "securityReason": "relatively low accuracy causes potential false positives / negatives"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "Email",
        "benefits": [
            "Accessability and user familiarity",
            "No firm dependency on mobile devices",
            "Integration with existing workflows"
        ],
        "drawbacks": [
            "Phishing attacks",
            "Dependency on email security"
        ],
        "implementation": 6,
        "implementationReason": "check email, get passcode",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like SSO is also included",
        "usability": 8.5,
        "usabilityReason": "Need access to email, phone, laptops or other devices",
        "security": 7,
        "securityReason": "security concerns of encryption, potential of device theft and phishing"
    },
    {
        "name": "Google",
        "logo": "logos/google.png",
        "link": "https://cloud.google.com/identity-platform/pricing#identity-platform-pricing",
        "method": "Email",
        "benefits": [
            "Secure and standardized email authentication protocols",
            "Centralized identity management",
            "Integration with Google workspace"
        ],
        "drawbacks": [
            "Limited customization",
            "Dependency on Google ecosystem"
        ],
        "implementation": 6,
        "implementationReason": "check email, get passcode",
        "cost": 9,
        "costReason": "up to $0.0055 per user per month, depends on number of users",
        "usability": 8.5,
        "usabilityReason": "Need access to email, phone, laptops or other devices",
        "security": 7,
        "securityReason": "security concerns of encryption, potential of device theft and phishing"
    },
    {
        "name": "okta",
        "logo": "logos/okta.png",
        "link": "https://www.okta.com/pricing/",
        "method": "Email",
        "benefits": [
            "Accessability and user familiarity",
            "No firm dependency on mobile devices",
            "Integration with existing workflows"
        ],
        "drawbacks": [
            "Phishing attacks",
            "Dependency on email security"
        ],
        "implementation": 6,
        "implementationReason": "check email, get passcode",
        "cost": 7,
        "costReason": "$3 per user per month for MFA, $6 for adaptive MFA",
        "usability": 8.5,
        "usabilityReason": "Need access to email, phone, laptops or other devices",
        "security": 7,
        "securityReason": "security concerns of encryption, potential of device theft and phishing"
    },
    {
        "name": "twilio sendgrid",
        "logo": "logos/twilio-sendgrid.png",
        "link": "https://sendgrid.com/en-us/pricing",
        "method": "Email",
        "benefits": [
            "Reliable email delivery",
            "Scalability and flexibility",
            "Advanced email marketing features"
        ],
        "drawbacks": [
            "Pricing complexity",
            "Deliverability challenges and customer support concerns"
        ],
        "implementation": 5.5,
        "implementationReason": "check email, get passcode",
        "cost": 7,
        "costReason": "different email number per month has different prices, e.g. $34.95 for 100,000 emails/month",
        "usability": 8,
        "usabilityReason": "Need access to email, phone, laptops or other devices",
        "security": 7,
        "securityReason": "security concerns of encryption, potential of device theft and phishing"
    },
    {
        "name": "PingIdentity",
        "logo": "logos/pingid.png",
        "link": "https://www.pingidentity.com/en/platform/pricing.html",
        "method": "Email",
        "benefits": [
            "Widespread accessability and user familiarity",
            "No firm dependency on mobile devices",
            "Integration with existing workflows"
        ],
        "drawbacks": [
            "implementation complexity",
            "Cost considerations"
        ],
        "implementation": 5.5,
        "implementationReason": "check email, get passcode",
        "cost": 6,
        "costReason": "starts from $40k annually",
        "usability": 7,
        "usabilityReason": "Need access to email, phone, laptops or other devices",
        "security": 7,
        "securityReason": "security concerns of encryption, potential of device theft and phishing"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "Face",
        "benefits": [
            "Convenience and user friendly",
            "Biometric security",
            "No physical tokens required"
        ],
        "drawbacks": [
            "Accuracy and privacy concerns",
            "Security risks like spoofing"
        ],
        "implementation": 8,
        "implementationReason": "enable biometric authentication",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like SSO is also included",
        "usability": 7,
        "usabilityReason": "phone with a camera",
        "security": 6,
        "securityReason": "lower accuracy and spoofing concerns"
    },
    {
        "name": "Microsoft",
        "logo": "logos/microsoft.png",
        "link": "https://azure.microsoft.com/en-us/pricing/details/cognitive-services/face-api/",
        "method": "Face",
        "benefits": [
            "Integration with Microsoft ecosystem",
            "Multifunctionality including:",
            "sentiment analysis, identity verification, age estimation, etc.",
            "Convenience and user experience"
        ],
        "drawbacks": [
            "Accuracy and privacy concerns",
            "Limited customization options"
        ],
        "implementation": 8.5,
        "implementationReason": "scanning face is relatively easy",
        "cost": 8.5,
        "costReason": "up to $1 per 1000 transactions, $0.01 per 1000 faces per month for storage",
        "usability": 5,
        "usabilityReason": "Face API initial setup is complex",
        "security": 6,
        "securityReason": "lower accuracy and spoofing concerns"
    },
    {
        "name": "IDEMIA",
        "logo": "logos/idemia.png",
        "link": "https://biometricdevices.idemia.com/s/products",
        "method": "Face",
        "benefits": [
            "Expertise and experience",
            "Comprehensive biometric solutions",
            "Global presence and security standards compliance"
        ],
        "drawbacks": [
            "False positives and negatives concerns",
            "Sensor accuracy and reliability"
        ],
        "implementation": 9,
        "implementationReason": "scan face",
        "cost": 2,
        "costReason": "based on devices needed, cost can be high",
        "usability": 6.5,
        "usabilityReason": "certain device might be needed",
        "security": 6.5,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "FaceTec",
        "logo": "logos/facetec.png",
        "link": "https://www.facetec.com/",
        "method": "Face",
        "benefits": [
            "Liveness detection",
            "3D face recognition",
            "Anti-spoofing measures"
        ],
        "drawbacks": [
            "Dependency on camera quality",
            "Accuracy concerns"
        ],
        "implementation": 9,
        "implementationReason": "scan face",
        "cost": 3,
        "costReason": "based on business size and services needed, cost can be high",
        "usability": 6.5,
        "usabilityReason": "certain device might be needed",
        "security": 6,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "Aware",
        "logo": "logos/aware.png",
        "link": "https://www.aware.com/authentication-verification/",
        "method": "Face",
        "benefits": [
            "Biometric accuracy",
            "Versatility and integration",
            "Anti-spoofing measures"
        ],
        "drawbacks": [
            "Cost and implementation complexity",
            "Privacy concerns"
        ],
        "implementation": 9,
        "implementationReason": "scan face",
        "cost": 3,
        "costReason": "based on business size and services needed, cost can be high",
        "usability": 6,
        "usabilityReason": "certain device might be needed",
        "security": 6,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "Fingerprint",
        "benefits": [
            "Convenience and user friendly",
            "Enhanced security",
            "Frictionless user experience"
        ],
        "drawbacks": [
            "Device dependency (needs fingerprint recognition on users' phones)",
            "Biometric storage increases privacy and security concerns"
        ],
        "implementation": 8,
        "implementationReason": "enable biometric authentication",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like SSO is also included",
        "usability": 6,
        "usabilityReason": "phone with fingerprint recognition is required",
        "security": 8.5,
        "securityReason": "potential privacy concerns and false positives / negatives"
    },
    {
        "name": "Microsoft",
        "logo": "logos/microsoft.png",
        "link": "https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing",
        "method": "Fingerprint",
        "benefits": [
            "Integration with Microsoft ecosystem, easy initial setup through Azure portal",
            "Enhanced security",
            "Convenience and user experience"
        ],
        "drawbacks": [
            "Accuracy and privacy concerns",
            "Integration complexity without Microsoft ecosystem"
        ],
        "implementation": 8,
        "implementationReason": "enable fingerprint",
        "cost": 6,
        "costReason": "up to $6 per user per month, while other services like SSO is also included",
        "usability": 7,
        "usabilityReason": "phone with fingerprint recognition is required, initial setup relatively easy",
        "security": 8.5,
        "securityReason": "potential privacy concerns and false positives / negatives"
    },
    {
        "name": "AuthenTrend",
        "logo": "logos/authentrend.png",
        "link": "https://authentrend.com/atkey-card/",
        "method": "Fingerprint",
        "benefits": [
            "Hardware-based security",
            "Ease of use, fast authentication",
            "Cross-platform compatibility"
        ],
        "drawbacks": [
            "Scalability and enterprise integration",
            "Security concerns like spoofing"
        ],
        "implementation": 9,
        "implementationReason": "press finger on cards",
        "cost": 2,
        "costReason": "around $80 per card",
        "usability": 8,
        "usabilityReason": "only an ATkey.card is needed",
        "security": 9,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "IDEMIA",
        "logo": "logos/idemia.png",
        "link": "https://biometricdevices.idemia.com/s/products",
        "method": "Fingerprint",
        "benefits": [
            "Expertise and experience",
            "Comprehensive biometric solutions",
            "Global presence and security standards compliance"
        ],
        "drawbacks": [
            "False positives and negatives concerns",
            "Sensor accuracy and reliability"
        ],
        "implementation": 9,
        "implementationReason": "press finger",
        "cost": 2,
        "costReason": "based on devices needed, cost can be high",
        "usability": 6.5,
        "usabilityReason": "certain device might be needed",
        "security": 9.5,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "BIO-key",
        "logo": "logos/biokey.png",
        "link": "https://www.bio-key.com/fingerprint-scanners/",
        "method": "Fingerprint",
        "benefits": [
            "Accuracy and speed",
            "Liveness detection",
            "Compatibility and integration"
        ],
        "drawbacks": [
            "False positives and negatives concerns",
            "Vulnerability to spoofing and limited enrollment quality"
        ],
        "implementation": 9,
        "implementationReason": "press finger",
        "cost": 4,
        "costReason": "based on devices needed, cost can be high",
        "usability": 7.5,
        "usabilityReason": "connect scanner to the device, setup fingerprint auth",
        "security": 9,
        "securityReason": "potential security concerns and false positives / negatives"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/docs/administration-devices#purchasing-duo-hardware-tokens",
        "method": "Hardware",
        "benefits": [
            "Offline authentication",
            "Phishing resistence",
            "Ease of use and portability"
        ],
        "drawbacks": [
            "Cost and distribution",
            "Loss or theft"
        ],
        "implementation": 9,
        "implementationReason": "check passcode on token",
        "cost": 3,
        "costReason": "$27 per token without tax and shipping fee included",
        "usability": 9,
        "usabilityReason": "only token is needed",
        "security": 5,
        "securityReason": "device theft"
    },
    {
        "name": "yubico",
        "logo": "logos/yubico.png",
        "link": "https://www.yubico.com/products/",
        "method": "Hardware",
        "benefits": [
            "Versatility and compatibility",
            "Security features including robust encryption and secure elements",
            "Open standards and collaboration"
        ],
        "drawbacks": [
            "Cost consideration",
            "Limited features"
        ],
        "implementation": 9,
        "implementationReason": "check OTP, or insert smart card, depends on products",
        "cost": 2,
        "costReason": "depends on products",
        "usability": 9,
        "usabilityReason": "only token is needed",
        "security": 9,
        "securityReason": "device theft is the only concern"
    },
    {
        "name": "RSA SecurID",
        "logo": "logos/rsa.png",
        "link": "https://www.rsa.com/products/securid/",
        "method": "Hardware",
        "benefits": [
            "TOTP availability",
            "Strong authentication",
            "Integration with IAM system"
        ],
        "drawbacks": [
            "Dependency on vendor",
            "Risk of single point failure"
        ],
        "implementation": 9,
        "implementationReason": "check OTP on token",
        "cost": 2,
        "costReason": "depends on products",
        "usability": 7,
        "usabilityReason": "dependency on vendor",
        "security": 9,
        "securityReason": "device theft is the only concern"
    },
    {
        "name": "HID Global",
        "logo": "logos/hid.png",
        "link": "https://www.hidglobal.com/",
        "method": "Hardware",
        "benefits": [
            "Industry experience and reputation",
            "Diverse product range",
            "Integration capabilities"
        ],
        "drawbacks": [
            "Cost considerations",
            "Risk of single point failure"
        ],
        "implementation": 9,
        "implementationReason": "insert smart card or depends on product",
        "cost": 2,
        "costReason": "depends on products",
        "usability": 8,
        "usabilityReason": "dependency on vendor",
        "security": 9,
        "securityReason": "device theft is the only concern"
    },
    {
        "name": "FEITIAN Technology",
        "logo": "logos/feitian.png",
        "link": "https://www.ftsafe.com/Products",
        "method": "Hardware",
        "benefits": [
            "Phishing resistance",
            "Ease of implementation",
            "Hardware-based security"
        ],
        "drawbacks": [
            "Cost considerations",
            "Limited compatibility"
        ],
        "implementation": 9,
        "implementationReason": "insert smart card or depends on product",
        "cost": 2,
        "costReason": "depends on products",
        "usability": 8,
        "usabilityReason": "only token is needed",
        "security": 9,
        "securityReason": "device theft is the only concern"
    },
    {
        "name": "Google",
        "logo": "logos/google.png",
        "link": "https://chromewebstore.google.com/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?pli=1",
        "method": "OTP",
        "benefits": [
            "Ease of use and setup",
            "Offline operation",
            "Open standard (TOTP)"
        ],
        "drawbacks": [
            "Lack of cloud backup",
            "Single device dependency",
            "Limited account recovery options"
        ],
        "implementation": 5,
        "implementationReason": "open phone, open app, get the OTP, click the push notification",
        "cost": 9.5,
        "costReason": "free for business use, but there may be costs if integrated with certain services",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "Microsoft",
        "logo": "logos/microsoft.png",
        "link": "https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing",
        "method": "OTP",
        "benefits": [
            "Integration with Microsoft ecosystem",
            "Adaptive authentication",
            "Compliance and configuration options"
        ],
        "drawbacks": [
            "Integration complexity",
            "Limited customization features and cost considerations"
        ],
        "implementation": 5,
        "implementationReason": "open phone, open app, get the OTP, click the push notification",
        "cost": 6,
        "costReason": "up to $6 per user per month, while other services like SSO is also included",
        "usability": 6.5,
        "usabilityReason": "Need phone, complex initial setup",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "OTP",
        "benefits": [
            "User-friendly experience",
            "Adaptive authentication and policies",
            "Wide range of supported authentication methods"
        ],
        "drawbacks": [
            "Cost for large organizations",
            "Mobile device dependency",
            "Limited customization for OTP methods"
        ],
        "implementation": 5,
        "implementationReason": "open phone, open app, get the OTP, click the push notification if necessary",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like SSO is included",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "okta",
        "logo": "logos/okta.png",
        "link": "https://www.okta.com/pricing/",
        "method": "OTP",
        "benefits": [
            "Comprehensive identity platform",
            "Flexibility in authentication methods",
            "Strong security features"
        ],
        "drawbacks": [
            "Complexity for small businesses and new users",
            "Pricing structure"
        ],
        "implementation": 5,
        "implementationReason": "open phone, open app, get the OTP, click the push notification if necessary",
        "cost": 7,
        "costReason": "$3 per user per month fro MFA, $6 for adaptive MFA",
        "usability": 7.5,
        "usabilityReason": "Need phone",
        "security": 8.5,
        "securityReason": "stronger security compared to other OTP services"
    },
    {
        "name": "twilio",
        "logo": "logos/twilio.png",
        "link": "https://www.twilio.com/en-us/verify/pricing",
        "method": "OTP",
        "benefits": [
            "Ease of integration",
            "Scalability and reliability",
            "Global reach"
        ],
        "drawbacks": [
            "Cost considerations",
            "Security concerns with SMS-based OTP"
        ],
        "implementation": 5,
        "implementationReason": "open api, receive OTP from server",
        "cost": 6,
        "costReason": "$0.05 per verification",
        "usability": 7.5,
        "usabilityReason": "Need api",
        "security": 7.5,
        "securityReason": "weaker security compared to other OTP services"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "SMS",
        "benefits": [
            "Wide spread accessibility",
            "User familiarity and convenience",
            "Quick implementation and low cost"
        ],
        "drawbacks": [
            "Security concerns like SMS phishing, SIM swapping attacks",
            "Reliance on cellular networks"
        ],
        "implementation": 7,
        "implementationReason": "open phone, check text message, get passcode",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like SSO is also included",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 7,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "Microsoft",
        "logo": "logos/microsoft.png",
        "link": "https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing",
        "method": "SMS",
        "benefits": [
            "Wide spread accessibility",
            "User familiarity",
            "Ease of implementation"
        ],
        "drawbacks": [
            "Security concerns like SMS phishing, SIM swapping attacks",
            "Reliability and delivery time"
        ],
        "implementation": 7,
        "implementationReason": "open phone, check text message, get passcode",
        "cost": 6,
        "costReason": "up to $6 per user per month, while other services like SSO is also included",
        "usability": 6.5,
        "usabilityReason": "Need phone, complex initial setup",
        "security": 7,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "Google",
        "logo": "logos/google.png",
        "link": "https://cloud.google.com/identity-platform/pricing#identity-platform-pricing",
        "method": "SMS",
        "benefits": [
            "Wide spread user adoption",
            "No dependency on aditional hardware or apps or internet connectivity",
            "Ubiquity and Accessibility"
        ],
        "drawbacks": [
            "Security concerns like SMS phishing, SIM swapping attacks",
            "Limited usability for international users"
        ],
        "implementation": 7,
        "implementationReason": "open phone, check text message, get passcode",
        "cost": 9,
        "costReason": "first 10 messages are free per day, $0.01 per extra message in U.S., could be higher in other countries",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 7,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "okta",
        "logo": "logos/okta.png",
        "link": "https://www.okta.com/pricing/",
        "method": "SMS",
        "benefits": [
            "Wide spread accessibility",
            "User familiarity and convenience",
            "Quick implementation and low cost"
        ],
        "drawbacks": [
            "security concern with SMS like phishing",
            "Reliability, delivery time, limited usability for international users"
        ],
        "implementation": 7,
        "implementationReason": "open phone, check text message, get passcode",
        "cost": 7,
        "costReason": "$3 per user per month fro MFA, $6 for adaptive MFA",
        "usability": 7.5,
        "usabilityReason": "Need phone",
        "security": 7,
        "securityReason": "SIM swapping, phishing attacks"
    },
    {
        "name": "twilio",
        "logo": "logos/twilio.png",
        "link": "https://www.twilio.com/en-us/sms/pricing/us",
        "method": "SMS",
        "benefits": [
            "Global reach and carrier connectivity",
            "Developer-friendly API and documentation",
            "Scalability and flexibility"
        ],
        "drawbacks": [
            "Cost considerations",
            "Complex for new users"
        ],
        "implementation": 7,
        "implementationReason": "open phone, check text message, get passcode",
        "cost": 7,
        "costReason": "$0.0079 per message, different prices outside U.S.",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 7,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "DUO",
        "logo": "logos/duo.png",
        "link": "https://duo.com/editions-and-pricing",
        "method": "SSO",
        "benefits": [
            "Adaptive MFA",
            "Wide range of authentication methods",
            "Integration with existing infrastructure"
        ],
        "drawbacks": [
            "Complexity and user experience",
            "Dependency on external factors, e.g. phones"
        ],
        "implementation": 7,
        "implementationReason": "depends on authentication method",
        "cost": 8,
        "costReason": "up to $3 per user per month, while other services like OTP is also included",
        "usability": 7,
        "usabilityReason": "Need phone",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "Microsoft",
        "logo": "logos/microsoft.png",
        "link": "https://www.microsoft.com/en-us/security/business/microsoft-entra-pricing",
        "method": "SSO",
        "benefits": [
            "Simplified user experience",
            "Enhanced security with conditional access",
            "Integration with Microsoft 365 ecosystem"
        ],
        "drawbacks": [
            "Dependency on Microsoft ecosystem",
            "Complexity of implementation and service outage risk"
        ],
        "implementation": 7,
        "implementationReason": "complex for intricate IT infrastructure",
        "cost": 6,
        "costReason": "up to $6 per user per month, while other services like OTP is also included",
        "usability": 6.5,
        "usabilityReason": "complex initial setup, phones may be required",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "Google",
        "logo": "logos/google.png",
        "link": "https://support.google.com/cloudidentity/answer/7666159#zippy=%2Cwhich-billing-plan-should-i-choose",
        "method": "SSO",
        "benefits": [
            "Integration with third party apps",
            "Unified access to Google services",
            "Centralized user management"
        ],
        "drawbacks": [
            "Limited customization for free plans",
            "Dependency on internet"
        ],
        "implementation": 7,
        "implementationReason": "depends on authentication method",
        "cost": 8,
        "costReason": "depends on plans, up to $7.2 per user per month or $6 per license",
        "usability": 6,
        "usabilityReason": "Complex setup",
        "security": 8,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "okta",
        "logo": "logos/okta.png",
        "link": "https://www.okta.com/pricing/",
        "method": "SSO",
        "benefits": [
            "Broad application integration",
            "Adaptive authentication and security features",
            "user experience and ease of use"
        ],
        "drawbacks": [
            "Complexity for small businesses and new users",
            "Pricing structure"
        ],
        "implementation": 8,
        "implementationReason": "better user experience than other SSO services",
        "cost": 7.5,
        "costReason": "$2 per user per month for SSO, $5 for adaptive SSO, free trial available",
        "usability": 7.5,
        "usabilityReason": "complex for new users",
        "security": 8.5,
        "securityReason": "potential of device theft and cyberattacks like phishing"
    },
    {
        "name": "onelogin",
        "logo": "logos/onelogin.png",
        "link": "https://www.onelogin.com/product/pricing",
        "method": "SSO",
        "benefits": [
            "Ease of use and user experience",
            "Robust security features",
            "Broad application integration"
        ],
        "drawbacks": [
            "Implementation complexity",
            "Pricing structure",
            "User interface"
        ],
        "implementation": 6.5,
        "implementationReason": "depends on authentication method",
        "cost": 7.5,
        "costReason": "$4 per user per month, while other services like MFA is also included",
        "usability": 6.5,
        "usabilityReason": "Need phone",
        "security": 8.5,
        "securityReason": "stronger security compared to other SSO"
    },
    {
        "name": "Nuance",
        "logo": "logos/nuance.png",
        "link": "https://www.nuance.com/omni-channel-customer-engagement/authentication-and-fraud-prevention/biometric-authentication.html",
        "method": "Voice",
        "benefits": [
            "Secure and convenient authentication",
            "Natural and non-intrusive",
            "Fraud detection and prevention"
        ],
        "drawbacks": [
            "Accuracy concerns",
            "Vulnerability to voice spoofing"
        ],
        "implementation": 8.5,
        "implementationReason": "say something to provide a voice recording",
        "cost": 5,
        "costReason": "potential hardware required",
        "usability": 7,
        "usabilityReason": "set up hardware, voice analysis models and database",
        "security": 6,
        "securityReason": "lower accuracy and spoofing concerns"
    },
    {
        "name": "Pindrop",
        "logo": "logos/pindrop.png",
        "link": "https://www.pindrop.com/solutions/authentication",
        "method": "Voice",
        "benefits": [
            "High accuracy and security",
            "Behavioral biometrics incorporated into voice authentication",
            "Fraud detection and prevention"
        ],
        "drawbacks": [
            "Cost consideration",
            "Integration complexity and limited customization"
        ],
        "implementation": 8.5,
        "implementationReason": "say something to provide a voice recording",
        "cost": 4.5,
        "costReason": "more expensive than other vendors",
        "usability": 7,
        "usabilityReason": "integration complexity",
        "security": 7,
        "securityReason": "better accuracy than other vendors"
    },
    {
        "name": "validsoft",
        "logo": "logos/validsoft.png",
        "link": "https://www.validsoft.com/products/validsofts-vip-voice-identity-platform/",
        "method": "Voice",
        "benefits": [
            "Advanced voice biometrics technology",
            "Multi-layerd security",
            "Fraud prevention"
        ],
        "drawbacks": [
            "Accuracy concerns",
            "Vulnerability to voice spoofing"
        ],
        "implementation": 8.5,
        "implementationReason": "say something to provide a voice recording",
        "cost": 5,
        "costReason": "potential hardware required",
        "usability": 7,
        "usabilityReason": "set up hardware, voice analysis models and database",
        "security": 6.5,
        "securityReason": "lower accuracy and spoofing concerns"
    },
    {
        "name": "Enquanta QuantaKey",
        "logo": "logos/enquanta.png",
        "link": "https://www.nuance.com/omni-channel-customer-engagement/authentication-and-fraud-prevention/biometric-authentication.html",
        "method": "Voice",
        "benefits": [
            "Broad language support",
            "Integration with various leading vendors",
            "Customer service"
        ],
        "drawbacks": [
            "Accuracy concerns",
            "Vulnerability to voice spoofing"
        ],
        "implementation": 8.5,
        "implementationReason": "say something to provide a voice recording",
        "cost": 5.5,
        "costReason": "potential hardware required",
        "usability": 7,
        "usabilityReason": "add voice recognition via software development kits & wrappers",
        "security": 6.5,
        "securityReason": "lower accuracy and spoofing concerns"
    },
    {
        "name": "Aculab",
        "logo": "logos/aculab.png",
        "link": "https://www.aculab.com/biometric-technologies/voisentry/",
        "method": "Voice",
        "benefits": [
            "Secure and convenient authentication",
            "Data security and standards compliance certification",
            "Fraud detection and prevention"
        ],
        "drawbacks": [
            "Accuracy concerns",
            "Vulnerability to voice spoofing"
        ],
        "implementation": 8.5,
        "implementationReason": "say something to provide a voice recording",
        "cost": 5,
        "costReason": "potential hardware required",
        "usability": 6.5,
        "usabilityReason": "set up hardware, voice analysis models and database",
        "security": 6.5,
        "securityReason": "lower accuracy and spoofing concerns"
    }
];