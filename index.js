// Initialize Bull Queue
const { Queue } = require('bull');
const emailQueue = new Queue('emailQueue');

// Define a job processor
emailQueue.process(async (job) => {
  const { to, subject, body } = job.data;
  // Code to send an email to 'to' with 'subject' and 'body'
  console.log(`Sending email to: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body: ${body}`);
});

// Add job to the queue
emailQueue.add({
  to: 'example@example.com',
  subject: 'Hello from Bull!',
  body: 'This is a test email from Bull queue.',
});
