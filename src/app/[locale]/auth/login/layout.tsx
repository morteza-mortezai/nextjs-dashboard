export default function authLayout({
    children,
  }: {
    children: React.ReactNode;
  }){
    return (
        <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto   max-w-[400px]  p-4 md:-mt-32 border">
            {children}
        </div>
        </main>
    )
}