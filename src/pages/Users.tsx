import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDebounce } from "../hooks/useDebounce";
import { useUsers } from "../hooks/useUsers";
import { UserCard } from "../components/UserCard";
import PaginationControls from "../components/PaginationControls";
import SearchBar from "../components/SearchBar";
import Loading from "../components/ui/Loading";
import ErrorView from "../components/ui/ErrorView";

const PAGE_SIZE = 6;

function Users() {
    const { users, isLoading, loadingError, retryLoadUsers } = useUsers();
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const debouncedSearch = useDebounce(search, 400);

    useEffect(() => {
        async function resetPage() {
            setCurrentPage(0);
        }
        resetPage();
    }, [debouncedSearch]);

    if (isLoading) {
        return <Loading message="Loading users..." />;
    }

    if (loadingError) {
        return <ErrorView message={loadingError} onRetry={retryLoadUsers} />;
    }

    const filteredUsers = users.filter(
        (user) =>
            user.name
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase()) ||
            user.email
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase())
    );

    const totalPages = Math.max(1, Math.ceil(filteredUsers.length / PAGE_SIZE));
    const pageUsers = filteredUsers.slice(
        currentPage * PAGE_SIZE,
        currentPage * PAGE_SIZE + PAGE_SIZE
    );

    const handlePrevious = () => {
        setCurrentPage((page) => Math.max(page - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((page) => Math.min(page + 1, totalPages - 1));
    };

    return (
        <>
            <div className="flex flex-col gap-4 px-10 pt-10 sm:flex-row sm:items-center sm:justify-between">
                <SearchBar value={search} onChange={setSearch} />
                <button
                    onClick={() => navigate("/users/new")}
                    className="rounded-lg bg-sky-500 px-5 py-3 text-white transition hover:bg-sky-400"
                >
                    Add New User
                </button>
            </div>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">  
                {pageUsers?.map((user) => (
                    <UserCard key={user.id} user={user} onClick={() => { navigate(`/users/${user.id}`); }} />
                ))}
            </section>

            {filteredUsers.length > PAGE_SIZE && (
                <div className="px-10 pb-10">
                    <PaginationControls
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                    />
                </div>
            )}
        </>
    );
}

export default Users