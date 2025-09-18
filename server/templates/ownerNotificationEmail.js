module.exports = (customerData) => `
<h2>New Affiliate Signup</h2>
<ul>
  <li><strong>First Name:</strong> ${customerData.firstName}</li>
  <li><strong>Last Name:</strong> ${customerData.lastName}</li>
  <li><strong>Email:</strong> ${customerData.email}</li>
</ul>
`;
