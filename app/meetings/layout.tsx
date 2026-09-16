import MeetingsTypeNav from "@/components/MeetingsTypeNav";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="space-y-6">
      <MeetingsTypeNav />

      {children}
    </div>
  );
}