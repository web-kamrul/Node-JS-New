var http = require('http');
var myServer = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
        <h1>Postman হলো একটি API ডেভেলপমেন্ট এবং টেস্টিং টুল</h1>
        <ul>
            <li>API ডেভেলপমেন্ট: Postman ব্যবহার করে ডেভেলপাররা API তৈরি করতে পারে এবং তাদের নির্দিষ্ট এপিআই এর উপর কাজ করতে পারে।</li>
            <li>API টেস্টিং: Postman দিয়ে ডেভেলপাররা তৈরি করা API-গুলির টেস্ট করতে পারে এবং সিস্টেমের কোনও বাগ বা প্রবলেম পরিষ্কার করতে পারে।</li>
            <li>ডকুমেন্টেশন: Postman ব্যবহার করে ডেভেলপাররা API-এর জন্য ডকুমেন্টেশন তৈরি করতে পারে, যাতে অন্যান্য ডেভেলপাররা সহজে বুঝতে পারে কিভাবে একটি API ব্যবহার করতে হয়।</li>
            <li>কাস্টম টেস্ট স্ক্রিপ্ট: Postman দিয়ে ডেভেলপাররা কাস্টম টেস্ট স্ক্রিপ্ট লেখতে পারে যাতে অটোমেটেড টেস্টিং করা যায় এবং সম্পূর্ণ প্রক্রিয়ার ভিত্তিতে টেস্ট কেইস গুলি পারিস্থিতিক অনুসারে হ্যান্ডল হয়।
        </ul>
    `);
});

myServer.listen(7000);
console.log('We Are Ready');

// Run in PostMan
// How can i can Show the Bangla Font in Browser ? Answer: We Should Say this <meta charset="UTF-8"> in HTML File