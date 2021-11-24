import { TextField } from '@material-ui/core'
import { NextPage } from 'next'
import { WriteForm } from '../components/WriteForm'
import { MainLayout } from '../layouts/MainLayout'
interface WritePageProps {

}
const WritePage: NextPage = () => {
    return (
        <MainLayout className="main-layout-white" hideComments hideMenu>
            <WriteForm />
        </MainLayout>
    )
}

export default WritePage
