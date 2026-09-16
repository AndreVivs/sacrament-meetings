import { getMeetings } from "@/lib/meetings-db";
import type { SacramentMeeting } from "@/lib/types";
import { redirect } from "next/navigation";

export default function CurrentMeetingPage() {
  const today = new Date();

  const dayOfWeek: number = today.getDay();

  const sunday = new Date(today);
  sunday.setDate(today.getDate() - dayOfWeek);

  const sundayDate: string = sunday
    .toISOString()
    .split("T")[0];

  const meetings: SacramentMeeting[] =
    getMeetings(sundayDate);

  const currentMeeting: SacramentMeeting | undefined =
    meetings[0];

  if (!currentMeeting) {
    redirect("/meetings");
  }

  redirect(`/meetings/${currentMeeting.id}`);
}