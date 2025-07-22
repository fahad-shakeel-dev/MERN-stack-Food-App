import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import FacebookStrategy from "passport-facebook";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
          user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            user.googleId = profile.id;
            await user.save();
          } else {
            user = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id,
              role: "user",
            });
            await user.save();
          }
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
          expiresIn: "3d",
        });
        user.token = token;
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["id", "displayName", "emails"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
          user = await User.findOne({ email: profile.emails?.[0]?.value });
          if (user) {
            user.facebookId = profile.id;
            await user.save();
          } else {
            user = new User({
              name: profile.displayName,
              email: profile.emails?.[0]?.value || `${profile.id}@facebook.com`,
              facebookId: profile.id,
              role: "user",
            });
            await user.save();
          }
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
          expiresIn: "3d",
        });
        user.token = token;
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);