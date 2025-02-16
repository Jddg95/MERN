const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

module.exports = {
  // creating a new graphql error for authentication
  AuthenticationError: new GraphQLError("Could not authenticate user.", {
    extensions: {
      // if cannot authenticate user return UNAUTHENTICATED code
      code: "UNAUTHENTICATED",
    },
  }),

  // function for our authenticated routes
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      console.log("No token provided"); // Debugging log
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      console.log("Token verified, user data:", data); // Debugging log
      req.user = data;
    } catch (err) {
      console.error("Invalid token", err); // Improved debugging log
    }

    // send to next endpoint
    return req;
  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    const token = jwt.sign({ data: payload }, secret, {
      expiresIn: expiration,
    });
    console.log("Generated Token:", token); // Debugging log
    return token;
  },
};
