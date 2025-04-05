// app/routes/index.tsx
import { Link } from '@remix-run/react';

const IndexPage = () => {
    return (
        <div>
            <h1>Welcome to Oak Hill Farms Admin Portal</h1>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default IndexPage;
