export const httpErrorCodes = new Map([
    // Official 4xx Codes
    [400, "Bad Request"],
    [401, "Unauthorized"],
    [402, "Payment Required"],
    [403, "Forbidden"],
    [404, "Not Found"],
    [405, "Method Not Allowed"],
    [406, "Not Acceptable"],
    [407, "Proxy Authentication Required"],
    [408, "Request Timeout"],
    [409, "Conflict"],
    [410, "Gone"],
    [411, "Length Required"],
    [412, "Precondition Failed"],
    [413, "Payload Too Large"],
    [414, "URI Too Long"],
    [415, "Unsupported Media Type"],
    [416, "Range Not Satisfiable"],
    [417, "Expectation Failed"],
    [418, "I'm a Teapot: User attempted to brew coffee with a teapot. The resulting entity body MAY be short and stout."],
    [421, "Misdirected Request"],
    [422, "Unprocessable Entity"],
    [423, "Locked"],
    [424, "Failed Dependency"],
    [425, "Too Early"],
    [426, "Upgrade Required"],
    [428, "Precondition Required"],
    [429, "Too Many Requests"],
    [431, "Request Header Fields Too Large"],
    [451, "Unavailable For Legal Reasons"],
  
    // Official 5xx Codes
    [500, "Internal Server Error"],
    [501, "Not Implemented"],
    [502, "Bad Gateway"],
    [503, "Service Unavailable"],
    [504, "Gateway Timeout"],
    [505, "HTTP Version Not Supported"],
    [506, "Variant Also Negotiates"],
    [507, "Insufficient Storage"],
    [508, "Loop Detected"],
    [510, "Not Extended"],
    [511, "Network Authentication Required"],
  
    // Unofficial 4xx Codes
    [419, "Page Expired"],
    [420, "Method Failure"],
    [420, "Enhance Your Calm"],
    [430, "Request Header Fields Too Large"],
    [450, "Blocked by Windows Parental Controls"],
    [498, "Invalid Token"],
    [499, "Token Required"],
    [509, "Bandwidth Limit Exceeded"],
    [529, "Site is overloaded"],
    [530, "Site is frozen"],
    [598, "Network read timeout error"],
    [599, "Network Connect Timeout Error"],
  
    // Unofficial 5xx Codes
    [520, "Web Server Returned an Unknown Error"],
    [521, "Web Server Is Down"],
    [522, "Connection Timed Out"],
    [523, "Origin Is Unreachable"],
    [524, "A Timeout Occurred"],
    [525, "SSL Handshake Failed"],
    [526, "Invalid SSL Certificate"],
    [527, "Railgun Error: Used to indicate an interrupted connection between Cloudflare and the origin server's Railgun server."],
    [530, "Error 530 is returned along with a 1xxx error."],
    [460, "Client closed the connection with the load balancer before the idle timeout period elapsed."],
    [463, "The load balancer received an X-Forwarded-For request header with more than 30 IP addresses."],
    [464, "Incompatible protocol versions between Client and Origin server."],
    [561, "Unauthorized"],
]);
