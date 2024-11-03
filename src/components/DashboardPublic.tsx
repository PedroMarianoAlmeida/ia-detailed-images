import AuthenticatorAws from '@/components/AuthenticatorAws'

import DashboardAuthenticated from '@/components/DashboardAuthenticated'


const DashboardPublic = () => {return <AuthenticatorAws

    render={(userId) => {
        return userId ? <DashboardAuthenticated userId={userId} /> : <p>Login first</p>
    }}
/>}

export default DashboardPublic
