import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "./models/User";
import bcrypt from "bcryptjs";
import connectMongo from "./lib/dbConnect/connectMongo";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  
  providers: [
    CredentialsProvider({
      async authorize(credentials:any) {
        if (credentials == null) return null;

        try {
          await connectMongo();
          const user = await User.findOne({ email: credentials?.email });

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              // console.log(user);
              return user;
            } else {
              // console.error("password mismatch");
              throw new Error("Check your password");
            }
          } else {
            // console.error("User not found");
            throw new Error("User not found");
          }
        } catch (err: any) {
          // console.error(err);
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async session({ session, token }) {
  //     session?.user.id = token.id;
  //     return session;
  //   },
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  // },
  // secret: process.env.NEXTAUTH_SECRET,
});
