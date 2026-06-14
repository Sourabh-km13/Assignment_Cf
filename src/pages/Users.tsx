import { useContext, useState } from "react"
import UserContext from "../context/UserContext"
import { UserCard } from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useNavigate } from "react-router";




function Users() {
    const data = useContext(UserContext);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const debouncedSearch =useDebounce(search, 400);
    const filteredUsers = data?.users.filter(
        (user) =>
            user.name
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase()) ||
            user.email
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase())
    );
    return (
        <>
            <SearchBar value={search} onChange={setSearch} />
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-20 px-10">  
                {filteredUsers?.map((user) => (
                    <UserCard key={user.id} user={user} onClick={() => { navigate(`/users/${user.id}`); }} />
                ))}
            </section>
        </>
    )
}

export default Users