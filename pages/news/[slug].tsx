import { FullPost } from '../../components/FullPost'
import { PostComments } from '../../components/PostComments'
import { MainLayout } from '../../layouts/MainLayout'

export default function Post() {
    return (
        <MainLayout contentFullWidth className="mb-40">
            <FullPost />
            <PostComments />
        </MainLayout>
    )
}
