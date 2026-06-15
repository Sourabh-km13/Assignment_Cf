import { useNavigate } from "react-router";
import Button from "../components/Button";

export default function Home() {
    const navigate = useNavigate();
    return (

        <div className="z-10 text-center pt-40">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Welcome
            </h1>

            <p className="text-gray-400 text-lg mb-10">
                Choose an option to continue
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Users Button */}
                <Button onClick={() => navigate("/users")}>
                   See User
                </Button>

                {/* Forms Button */}
                <Button gradient="bg-gradient-to-r from-violet-500 to-indigo-500" onClick={() => navigate("/forms") }>
                    See Forms
                </Button>
            </div>
        </div>

    );
}