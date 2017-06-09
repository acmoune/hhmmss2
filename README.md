# hhmmss2
Take number of seconds, or a youtube formatted duration and return duration in format 00:00:00

# Usage
```javascript
const hhmmss = require('hhmmss2');
hhmmss((3 * 60) + 15); // return 03:15
hhmmss((3 * 60 * 60) + (2 * 60) + 15); // return 3:02:15

// Also convert youtube formatted duration
hhmmss.yt('PT12M17S'); // return 12:17
```
