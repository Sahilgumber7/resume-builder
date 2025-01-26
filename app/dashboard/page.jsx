import { withAuth } from "@clerk/nextjs";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome</h1>
        </div>
    );
};

export default withAuth(Dashboard);