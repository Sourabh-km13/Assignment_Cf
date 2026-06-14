import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, Mail, Phone, Building2, MapPin, Globe } from "lucide-react";
import UserContext from "../context/UserContext";
import { InfoCard } from "../components/InfoCard";
import UserSubmittedForms from "../components/UserSubmittedForms";

export default function UserDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = useContext(UserContext);

    const user = data?.users.find(
        (user) => user.id === Number(id)
    );

    const submittedForms = data?.formSubmission.filter(
        (submission) => submission.userId === Number(id)
    ) ?? [];

    if (!user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <h1 className="text-2xl font-semibold">
                    User Not Found
                </h1>
            </div>
        );
    }

    return (
        <main className="min-h-screen  p-6">
            <div className="mx-auto max-w-5xl">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-6 flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-slate-100"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                {/* Profile Card */}
                <section className="rounded-3xl p-8 shadow-sm">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">

                        <div>
                            <h1 className="text-3xl text-white font-bold">
                                {user.name}
                            </h1>

                            <p className="mt-1 text-slate-200">
                                @{user.username}
                            </p>
                        </div>
                    </div>
                </section>

                {/* User Information */}
                <section className="mt-6 rounded-3xl bg-slate-800/40 p-8 shadow-sm ">
                    <h2 className="mb-6 text-xl font-semibold">
                        User Information
                    </h2>

                    <div className="grid gap-4 md:grid-cols-2">

                        <InfoCard
                            icon={<Mail size={18} />}
                            title="Email"
                            value={user.email}
                        />

                        <InfoCard
                            icon={<Phone size={18} />}
                            title="Phone"
                            value={user.phone}
                        />

                        <InfoCard
                            icon={<Globe size={18} />}
                            title="Website"
                            value={user.website}
                        />

                        <InfoCard
                            icon={<Building2 size={18} />}
                            title="Company"
                            value={user.company?.name}
                        />

                        <InfoCard
                            icon={<MapPin size={18} />}
                            title="Address"
                            value={`${user.address?.street}, ${user.address?.city}`}
                        />
                    </div>
                </section>

                <UserSubmittedForms submissions={submittedForms} />
            </div>
        </main>
    );
}

