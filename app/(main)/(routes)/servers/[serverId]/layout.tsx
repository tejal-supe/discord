import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { RedirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const ServerIdLayout = async({
  children,
  params,
}: {
        children: React.ReactNode; params: { serverId: string };
    }) => {
    const profile = await currentProfile();
    if (!profile) {
            return (<RedirectToSignIn />)
    }
    const server = await db.server.findUnique({
        where: {
            id: params.serverId,
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });
    if (!server) {
        return redirect("/");
    }
    return (
        <div>{children}</div>
    )
};

export default ServerIdLayout;
