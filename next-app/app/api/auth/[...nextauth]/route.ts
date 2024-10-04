import prisma from "@/app/lib/db";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET ??"SADGAsdasfas",
  callbacks: {
    async signIn({ user }) {
      if (!user.email) {
        return false;
      }

      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              provider: "Google",
            },
          });
        }

        return true; 
      } catch (error) {
        console.error("Error during sign-in", error);
        return false; 
      }
    },
  },
});

export { handler as GET, handler as POST };
