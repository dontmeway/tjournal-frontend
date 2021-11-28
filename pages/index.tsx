import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Post } from '../components/Post';
import { MainLayout } from '../layouts/MainLayout';
import { wrapper } from '../redux';
import { setUserData } from '../redux/slices/userSlice';
import { UserApi } from '../utils/api';

export default function Home() {
  return (
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(state => async (ctx) => {
  const { authToken } = parseCookies(ctx);

  try {
    const userData = await UserApi.getMe(authToken);

    state.dispatch(setUserData(userData))

    return {
      props: {}
    }
  } catch (err) {

    return {
      props: {}
    }
  }
})