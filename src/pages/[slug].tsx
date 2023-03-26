import { type NextPage } from "next";
import Head from "next/head";

import { LoadingPage } from "~/components/Loading";
import { api } from "~/utils/api";

const ProfilePage: NextPage = () => {
  const { data, isLoading } = api.profile.getUserByUsername.useQuery({
    username: "jsfeb26",
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!data) {
    return <div>404</div>;
  }

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <main className="flex h-screen justify-center">
        <div>{data.username}</div>
      </main>
    </>
  );
};

export default ProfilePage;
