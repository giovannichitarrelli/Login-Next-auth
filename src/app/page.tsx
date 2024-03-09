import LoginForm from "@/app/_components/loginForm";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col justify-center items-center px-5 bg-slate-600">
        <LoginForm />
      </div>
    </main>
  );
}
