import { type AuthUser } from "@aws-amplify/auth";


const DashboardAuthenticated = ({userId}: {userId: AuthUser["userId"]}) => {

    return <p>UserId: {userId}</p>
}

export default DashboardAuthenticated
