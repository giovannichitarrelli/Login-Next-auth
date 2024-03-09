import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    pages: {
        signIn: "/",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
              email: { label: "email", type: "email" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if(!credentials){
                    return null
                }
                if(credentials.email === "giocfassis@gmail.com"  && credentials.password === "123"){
                    console.log(credentials)
                    return {
                        id: "1",
                        name: "Gio",
                        email: "giocfassis@gmail.com"
                    }
                }
                return null
            },
        })
    ]
});
export { handler as GET, handler as POST };